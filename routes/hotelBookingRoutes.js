import express from "express";

import{createHotelBooking,getHotelBooking,getHotelbookingById,
    updateHotelbookingById,
    deleteHotelbookingById
} from '../controller/hotelBookingController.js';

const router = express.Router();

router.post('/createHotelBooking',createHotelBooking);
router.post('/getHotelBooking',getHotelBooking);
router.post('/getHotelbookingById:id',getHotelbookingById);
router.post('/updateHotelbookingById:id',updateHotelbookingById);
router.post('/deleteHotelbookingById:id',deleteHotelbookingById);

export default router;