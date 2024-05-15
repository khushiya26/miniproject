import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';




// CORS middleware
//app.use(cors({
    //origin: "http://localhost:5173",
//}));



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET,
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


