import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mongo:mongo@cluster0.f4r0jpl.mongodb.net/dress-db').then(() => console.log("DB connected successfully..."));
}