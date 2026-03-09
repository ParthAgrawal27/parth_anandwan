import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Billing.css';

function Billing() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get amount from navigation state
  const amount = location.state?.amount || 0;

  useEffect(() => {
    if (amount === 0) {
      navigate('/fundraiser');
    }
  }, [amount, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Step 1: Create order on backend
      const orderResponse = await axios.post(
        'http://localhost:8080/api/payments/create-order',
        {
          amount: Math.round(amount * 100), // Convert to paise
          currency: 'INR',
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        }
      );

      const { orderId, key } = orderResponse.data;

      // Step 2: Initialize Razorpay
      const options = {
        key: key,
        amount: Math.round(amount * 100),
        currency: 'INR',
        name: 'Anandwan',
        description: 'Support Anandwan Foundation',
        order_id: orderId,
        prefill: {
          name: formData.name,
          contact: formData.phoneNumber,
        },
        handler: async (response) => {
          try {
            // Step 3: Verify payment on backend
            const verifyResponse = await axios.post(
              'http://localhost:8080/api/payments/verify-payment',
              {
                orderId: orderId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                name: formData.name,
                phoneNumber: formData.phoneNumber,
              }
            );

            if (verifyResponse.data.success) {
              alert('Payment successful! Thank you for your donation.');
              navigate('/fundraiser');
            } else {
              setError('Payment verification failed. Please try again.');
            }
          } catch (err) {
            setError('Payment verification error: ' + (err.response?.data?.message || err.message));
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError('Payment cancelled');
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      setError('Failed to initiate payment: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="billing-page">
      <div className="billing-container">
        <div className="billing-card">
          <h1>Donation Details</h1>
          
          <div className="amount-display">
            <h2>Amount: ₹{amount}</h2>
            <p>Support Anandwan Foundation</p>
          </div>

          <form className="billing-form" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter 10-digit phone number"
                maxLength="10"
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="pay-button"
              disabled={loading}
            >
              {loading ? 'Processing...' : `Proceed to Pay ₹${amount}`}
            </button>
          </form>

          <p className="security-info">
            ✓ Secure payment powered by Razorpay
          </p>
        </div>
      </div>
    </div>
  );
}

export default Billing;
