import express from "express";

import {createHotel, getHotels,updateHotelById} from '../controller/hotelController.js';
 
const router = express.Router();


router.post("/createHotel",createHotel);
router.post("/getHotels",getHotels);
router.put("/updateHotel:id",updateHotelById);

export default router;