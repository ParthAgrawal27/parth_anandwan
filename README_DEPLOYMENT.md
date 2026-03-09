# 🚀 Anandwan Payment Application - Deployment

A full-stack payment application with React frontend, Spring Boot backend, and Supabase database.

## 📋 Quick Deploy (Recommended)

### Option 1: Vercel + Railway (Easiest)

#### 1. Deploy Frontend to Vercel
```bash
# Run deployment script
./deploy-vercel.sh

# Or manually:
npm run build
# Then drag & drop 'build' folder to vercel.com
```

#### 2. Deploy Backend to Railway
```bash
# Run deployment script
cd payment-backend && ./deploy-railway.sh

# Or manually:
cd payment-backend
./mvnw clean package -DskipTests
# Then connect GitHub repo to railway.app
```

#### 3. Set Environment Variables

**Vercel (Frontend):**
```
REACT_APP_API_URL=https://your-railway-backend.railway.app
```

**Railway (Backend):**
```
DATABASE_URL=jdbc:postgresql://your-supabase-url
DB_USERNAME=your-supabase-username
DB_PASSWORD=your-supabase-password
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
ALLOWED_ORIGINS=https://your-vercel-frontend.vercel.app
```

### Option 2: Docker Deployment

#### Local Testing
```bash
# Start all services
docker-compose up --build

# Frontend: http://localhost:3000
# Backend: http://localhost:8080
```

#### Production Deployment
```bash
# Build and deploy
docker-compose -f docker-compose.prod.yml up --build -d
```

### Option 3: Manual Cloud Deployment

#### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy 'build' folder to your hosting provider
```

#### Backend (Heroku/Render)
```bash
cd payment-backend
./mvnw clean package -DskipTests
# Deploy JAR file to your cloud provider
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL` - Supabase PostgreSQL connection string
- `DB_USERNAME` - Supabase username
- `DB_PASSWORD` - Supabase password
- `RAZORPAY_KEY_ID` - Your Razorpay key ID
- `RAZORPAY_KEY_SECRET` - Your Razorpay key secret

## 🧪 Testing Deployment

### Frontend Tests
```bash
npm test
npm run build
```

### Backend Tests
```bash
cd payment-backend
./mvnw test
```

### API Tests
```bash
# Health check
curl https://your-backend-domain.com/api/payments/health

# Create order test
curl -X POST https://your-backend-domain.com/api/payments/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount":50000,"currency":"INR","name":"Test","phoneNumber":"9876543210"}'
```

## 📊 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │  Spring Boot    │    │   Supabase      │
│   (Frontend)    │◄──►│   (Backend)     │◄──►│  PostgreSQL     │
│                 │    │                 │    │   Database      │
│ - Payment UI    │    │ - Payment API   │    │                 │
│ - Razorpay      │    │ - Order Mgmt    │    │ - Payment       │
│   Integration   │    │ - Verification  │    │   Records       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Production URLs

After deployment, update these URLs:

1. **Frontend**: Set `REACT_APP_API_URL` to your backend URL
2. **Backend**: Set `ALLOWED_ORIGINS` to your frontend URL
3. **Razorpay**: Update webhook URL if needed

## 📈 Monitoring

- **Frontend**: Check Vercel/Netlify analytics
- **Backend**: Monitor Railway/Render logs
- **Database**: Use Supabase dashboard
- **Payments**: Monitor Razorpay dashboard

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**: Check `ALLOWED_ORIGINS` in backend
2. **Database Connection**: Verify Supabase credentials
3. **Payment Failures**: Check Razorpay keys and webhook
4. **Build Failures**: Ensure all dependencies are installed

### Logs

- **Frontend**: Vercel/Netlify deployment logs
- **Backend**: Railway/Render application logs
- **Database**: Supabase query logs

## 📞 Support

- **Deployment Issues**: Check `DEPLOYMENT_GUIDE.md`
- **Payment Issues**: Check `PAYMENT_INTEGRATION_GUIDE.md`
- **Code Issues**: Check GitHub repository

---

**Happy Deploying! 🎉**