# Payment Gateway Integration Guide - Razorpay

## Overview
This guide will help you set up and run the Razorpay payment gateway integration for the Anandwan fundraising platform.

## 🚀 Quick Start

### Frontend Setup (React)

1. **Install Dependencies**
   ```bash
   npm install
   # This will install axios and razorpay packages
   ```

2. **Start the React Application**
   ```bash
   npm start
   # React app will run on http://localhost:3000
   ```

### Backend Setup (Spring Boot)

1. **Prerequisites**
   - Java 17 or higher
   - MySQL Server running
   - Maven installed

2. **Create Database**
   - The application is configured to use Supabase PostgreSQL
   - Database connection is already configured in `application.properties`
   - No manual database creation needed - Supabase handles this automatically

3. **Database Configuration**
   - The application uses Supabase PostgreSQL
   - Connection details are pre-configured in `application.properties`
   - No additional setup required

4. **Configure Razorpay Credentials**
   - File: `payment-backend/src/main/resources/application.properties`
   - Replace with your actual Razorpay credentials:
     ```properties
     razorpay.key.id=YOUR_RAZORPAY_KEY_ID
     razorpay.key.secret=YOUR_RAZORPAY_KEY_SECRET
     ```

5. **Build and Run Backend**
   ```bash
   cd payment-backend
   mvn clean install
   mvn spring-boot:run
   # Backend will run on http://localhost:8080
   ```

## 📝 Getting Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Sign up or log in to your account
3. Navigate to Settings → API Keys
4. Copy your Key ID and Key Secret
5. Paste them in the `application.properties` file

## 🏗️ Architecture

### Frontend Flow
1. User clicks "Donate" on Fundraiser page
2. Redirected to Billing page with donation amount
3. User enters Name and Phone Number
4. Clicks "Proceed to Pay"
5. Razorpay payment window opens
6. After successful payment, verification is done on backend
7. User is redirected to Fundraiser page with success message

### Backend Flow
1. Create Order: Frontend sends amount, name, phone to backend
2. Backend creates Razorpay order and saves to database
3. Backend returns Order ID and Key ID to frontend
4. Razorpay payment window opens with these details
5. After payment, frontend sends verification details to backend
6. Backend verifies signature and updates database
7. Returns success/failure response

## 📁 New Files Created

### Frontend
- `src/Billing.js` - Payment form component
- `src/Billing.css` - Styling for payment page
- Updated `src/App.js` - Added Billing route and Razorpay script loader
- Updated `src/Fundraiser.js` - Added navigation to Billing page
- Updated `package.json` - Added axios and razorpay dependencies

### Backend
- `PaymentBackendApplication.java` - Main Spring Boot application
- `model/Payment.java` - Payment entity for database
- `repository/PaymentRepository.java` - Data access layer
- `service/PaymentService.java` - Business logic for payment processing
- `controller/PaymentController.java` - REST API endpoints
- `dto/CreateOrderRequest.java` - Request DTO for order creation
- `dto/VerifyPaymentRequest.java` - Request DTO for payment verification
- `dto/OrderResponse.java` - Response DTO for order creation
- Updated `pom.xml` - Added Razorpay and related dependencies
- Updated `application.properties` - Configuration settings

## 🔌 API Endpoints

### Create Order
- **Endpoint**: `POST http://localhost:8080/api/payments/create-order`
- **Request Body**:
  ```json
  {
    "amount": 50000,
    "currency": "INR",
    "name": "John Doe",
    "phoneNumber": "9876543210"
  }
  ```
- **Response**:
  ```json
  {
    "orderId": "order_1234567890",
    "key": "YOUR_RAZORPAY_KEY_ID",
    "message": "Order created successfully"
  }
  ```

### Verify Payment
- **Endpoint**: `POST http://localhost:8080/api/payments/verify-payment`
- **Request Body**:
  ```json
  {
    "orderId": "order_1234567890",
    "paymentId": "pay_1234567890",
    "signature": "signature_hash",
    "name": "John Doe",
    "phoneNumber": "9876543210"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Payment verified successfully"
  }
  ```

### Health Check
- **Endpoint**: `GET http://localhost:8080/api/payments/health`
- **Response**:
  ```json
  {
    "status": "Payment service is running"
  }
  ```

## 🗄️ Database Schema (PostgreSQL)

### payments table
```sql
CREATE TABLE payments (
  id BIGSERIAL PRIMARY KEY,
  order_id VARCHAR(255) UNIQUE NOT NULL,
  payment_id VARCHAR(255),
  amount DOUBLE PRECISION NOT NULL,
  currency VARCHAR(10),
  donor_name VARCHAR(255),
  phone_number VARCHAR(20),
  status VARCHAR(50),
  signature VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## ✅ Testing the Integration

1. **Start both Frontend and Backend**
   - Frontend: `npm start` (port 3000)
   - Backend: `mvn spring-boot:run` (port 8080)

2. **Navigate to Fundraiser Page**
   - Go to http://localhost:3000/fundraiser

3. **Select a Donation Amount**
   - Click any "Donate" button or enter custom amount

4. **Fill Billing Form**
   - Enter name and phone number
   - Click "Proceed to Pay"

5. **Complete Test Payment**
   - Razorpay will open in test mode
   - Use test card: 4111 1111 1111 1111
   - Any expiry date and CVV will work

6. **Verify Payment**
   - Check database for payment record
   - Verify status is "SUCCESS"

## 🔒 Security Notes

- Never commit actual Razorpay credentials to version control
- Use environment variables for sensitive data in production
- Verify all payment signatures before processing
- Always validate amount on backend (don't trust client-side)
- Implement proper error handling and logging

## 🐛 Troubleshooting

### CORS Error
- **Issue**: Payment creation fails with CORS error
- **Solution**: Ensure backend has `@CrossOrigin` annotation (already added)

### Razorpay Script Not Loading
- **Issue**: Payment window doesn't open
- **Solution**: Check browser console for script loading errors
- Ensure `useEffect` in App.js is loading the script

### Database Connection Error
- **Issue**: Backend fails to start
- **Solution**: 
  - Ensure MySQL is running
  - Check database credentials in application.properties
  - Verify database exists

### Payment Signature Verification Fails
- **Issue**: Payment shows in UI but verification fails
- **Solution**: 
  - Verify Razorpay credentials are correct
  - Check that key secret is exact
  - Ensure order ID and payment ID match

## 📞 Support

For issues with:
- **Razorpay Integration**: Check [Razorpay Documentation](https://razorpay.com/docs/)
- **React/Frontend**: Check [React Documentation](https://react.dev)
- **Spring Boot/Backend**: Check [Spring Boot Documentation](https://spring.io/projects/spring-boot)

## 🎉 Success!

Your payment gateway is now integrated! Users can now make donations through Razorpay.
