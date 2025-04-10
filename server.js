import express from 'express';
import {connectDB} from './database/db.js';
const app = express();
import "dotenv/config"
import UserRoutes from "./routes/user.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import hotelBookingRouter from "./routes/hotelBookingRoutes.js";




app.use(express.json());

app.use("/api/user",UserRoutes);
app.use("/api/hotel",hotelRoutes);
app.use("/api/hotelbooking",hotelBookingRouter);





connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}`);
});