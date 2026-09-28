import mongoose from 'mongoose';

// Connect to MongoDB database
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ucare';
    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ DB Connection Error: ${error.message}`);
    console.warn(`💡 Tip: Ensure MongoDB service is running or set MONGODB_URI environment variable`);
  }
};

