import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const url = process.env.DATABASE_URL ||'mongodb://localhost:27017/monsters'
    try {
        const connection = await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (e) {
        console.log('Failed to connect to database: ', e);
    }
}
