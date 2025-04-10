
import HotelBooking from "../database/models/hotelBookingModel.js"

export const createHotelBookingSevice= async (data)=>{
    try {
        const hotelBooking= new HotelBooking(data);
        return await hotelBooking.save();
    } catch (error) {
        throw error;
    }
}

export const getHotelBookingService=async (data)=>{
    try {
        const getHotelsBooking=new HotelBooking({data});
        return await getHotelsBooking.find({data});
    } catch (error) {
        throw  error;
    }
}