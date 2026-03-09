#!/bin/bash

# Railway Deployment Script for Anandwan Payment Backend

echo "🚀 Starting Railway deployment for Anandwan Payment Backend..."

# Build the application
echo "📦 Building Spring Boot application..."
./mvnw clean package -DskipTests

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📤 Ready for Railway deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push this code to GitHub"
    echo "2. Go to https://railway.app"
    echo "3. Connect your GitHub repository"
    echo "4. Railway will auto-detect Java and deploy"
    echo "5. Set environment variables in Railway dashboard:"
    echo "   - DATABASE_URL"
    echo "   - DB_USERNAME"
    echo "   - DB_PASSWORD"
    echo "   - RAZORPAY_KEY_ID"
    echo "   - RAZORPAY_KEY_SECRET"
    echo "   - ALLOWED_ORIGINS (your frontend URL)"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi