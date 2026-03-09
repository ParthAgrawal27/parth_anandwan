package com.parth_anandwan.paymentbackend.service;

import com.parth_anandwan.paymentbackend.dto.CreateOrderRequest;
import com.parth_anandwan.paymentbackend.dto.OrderResponse;
import com.parth_anandwan.paymentbackend.dto.VerifyPaymentRequest;
import com.parth_anandwan.paymentbackend.model.Payment;
import com.parth_anandwan.paymentbackend.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.apache.commons.codec.digest.HmacUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PaymentService {

    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    @Autowired
    private PaymentRepository paymentRepository;

    public OrderResponse createOrder(CreateOrderRequest request) throws Exception {
        try {
            RazorpayClient client = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", request.getAmount()); // Amount in paise
            orderRequest.put("currency", request.getCurrency());
            orderRequest.put("receipt", UUID.randomUUID().toString());
            orderRequest.put("notes", new JSONObject()
                    .put("donor_name", request.getName())
                    .put("phone_number", request.getPhoneNumber()));

            Order order = client.orders.create(orderRequest);
            String orderId = order.get("id");

            // Save payment record to database
            Payment payment = new Payment(
                    orderId,
                    request.getAmount() / 100.0, // Convert paise to rupees
                    request.getCurrency(),
                    request.getName(),
                    request.getPhoneNumber()
            );
            paymentRepository.save(payment);

            return new OrderResponse(orderId, razorpayKeyId, "Order created successfully");
        } catch (Exception e) {
            throw new Exception("Failed to create order: " + e.getMessage());
        }
    }

    public boolean verifyPayment(VerifyPaymentRequest request) throws Exception {
        try {
            String orderId = request.getOrderId();
            String paymentId = request.getPaymentId();
            String signature = request.getSignature();

            // Verify signature
            String payload = orderId + "|" + paymentId;
            String expectedSignature = HmacUtils.hmacSha256Hex(razorpayKeySecret, payload);

            if (!expectedSignature.equals(signature)) {
                throw new Exception("Invalid payment signature");
            }

            // Update payment record
            Payment payment = paymentRepository.findByOrderId(orderId)
                    .orElseThrow(() -> new Exception("Order not found"));

            payment.setPaymentId(paymentId);
            payment.setSignature(signature);
            payment.setStatus("SUCCESS");
            payment.setUpdatedAt(LocalDateTime.now());

            paymentRepository.save(payment);

            return true;
        } catch (Exception e) {
            throw new Exception("Payment verification failed: " + e.getMessage());
        }
    }
}
