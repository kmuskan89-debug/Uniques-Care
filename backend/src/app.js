import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware to ensure DB connection per request in serverless environment
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/issues', issueRoutes);

export default app;
