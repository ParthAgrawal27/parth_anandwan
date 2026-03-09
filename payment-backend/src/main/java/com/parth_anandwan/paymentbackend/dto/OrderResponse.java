package com.parth_anandwan.paymentbackend.dto;

public class OrderResponse {
    private String orderId;
    private String key;
    private String message;

    // Constructors
    public OrderResponse() {}

    public OrderResponse(String orderId, String key, String message) {
        this.orderId = orderId;
        this.key = key;
        this.message = message;
    }

    // Getters and Setters
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
