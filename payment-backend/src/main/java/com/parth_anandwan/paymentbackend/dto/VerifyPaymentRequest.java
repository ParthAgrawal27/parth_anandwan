package com.parth_anandwan.paymentbackend.dto;

public class VerifyPaymentRequest {
    private String orderId;
    private String paymentId;
    private String signature;
    private String name;
    private String phoneNumber;

    // Constructors
    public VerifyPaymentRequest() {}

    public VerifyPaymentRequest(String orderId, String paymentId, String signature, String name, String phoneNumber) {
        this.orderId = orderId;
        this.paymentId = paymentId;
        this.signature = signature;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
