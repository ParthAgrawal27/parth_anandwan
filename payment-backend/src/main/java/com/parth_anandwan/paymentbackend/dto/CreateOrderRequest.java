package com.parth_anandwan.paymentbackend.dto;

public class CreateOrderRequest {
    private Long amount; // in paise
    private String currency;
    private String name;
    private String phoneNumber;

    // Constructors
    public CreateOrderRequest() {}

    public CreateOrderRequest(Long amount, String currency, String name, String phoneNumber) {
        this.amount = amount;
        this.currency = currency;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
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
