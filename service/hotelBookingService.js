
import HotelBooking from "../database/models/hotelBookingModel.js"

export const createHotelBookingSevice= async (data)=>{
    try {
        const hotelBooking= new HotelBooking(data);
        return await hotelBooking.save();
    } catch (error) {
        throw error;
    }
}

export const getHotelBookingService=async (id)=>{
    try {
        return await HotelBooking.findById(id)
    } catch (error) {
        throw  error;
    }
}