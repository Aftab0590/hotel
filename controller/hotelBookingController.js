import HotelBooking from "../database/models/hotelBookingModel.js";
import { createHotelBookingSevice, getHotelBookingService} from "../service/hotelBookingService.js";
//create hotel booking

export const createHotelBooking=async (req,res)=>{
    try {
        const {guestName,roomType,checkInDate,checkOutDate,contactNumber,status }=req.body;
        const newBooking=await createHotelBookingSevice({
            guestName,
            roomType,
            checkInDate,
            checkOutDate,
            contactNumber,
            status,
        });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
}


//all hotel booking....
export const getHotelBooking=async (req,res)=>{
    try {
        const bookings=await hotelBooking.find();
        res.status(201).json(bookings);
    } catch (error) {
        
        res.status(500).json({message:'Error fetching hotel boking!!!'});
        
    }
}
//booking by id......
export const getHotelbookingById=async (req,res)=>{
    try {
        const booking=await getHotelBookingService(req.body);

        if(!booking)
    return res.status(404).json({message:'booking is not found'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching  boking!!!'});
        
    }
}
//update hotel booking.....
export const updateHotelbookingById=async (req,res)=>{
    try {
        const updatebooking=await HotelBooking.findByIdAndUpdate(req.body.id,
            req.body
        );
        
    return res.status(404).json({updatebooking});
    } catch (error) {
        res.status(400).json({message:'Error updating  booking!!!'});
        
    }
}
//delete hotel booking
export const deleteHotelbookingById=async (req,res)=>{
    try {
        const deletebooking=await HotelBooking.findByIdAnddelete(req.body.id);
        
    return res.status(200).json({message:'hotel booking deleted successfully!!!'});
    } catch (error) {
        res.status(500).json({message:'Error deleting  booking!!!'});
        
    }
}