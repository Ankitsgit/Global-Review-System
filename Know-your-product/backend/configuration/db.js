import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://motu26927:zIlG0i1kXQ2iszdL@cluster0.teoaq.mongodb.net/kyp?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("Database Connected"));
}
