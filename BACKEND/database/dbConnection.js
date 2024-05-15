import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Access MONGO_URI from environment variables
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbname: "MERN_STACK_WORKWHIZ",})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
};

export default dbConnection;

