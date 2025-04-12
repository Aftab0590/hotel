import express from "express";

import{createHotelBooking,getHotelBooking,getHotelbookingById,
    updateHotelbookingById,
    deleteHotelbookingById
} from '../controller/hotelBookingController.js';

const router = express.Router();

router.post('/createHotelBooking',createHotelBooking);
router.get('/getHotelBooking',getHotelBooking);
router.put('/updateHotelbookingById:id',updateHotelbookingById);
router.delete('/deleteHotelbookingById:id',deleteHotelbookingById);

export default router;