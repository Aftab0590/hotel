import mongoose from "mongoose";
const hotelSchema= new mongoose.Schema({
    guestName:{
        type:String,
        required:true,
    },
    roomType:{
        type:String,
        required:true,
        enum:["Single",'Double'],
        
    },
    checkInDate:{
        type:Date,
        required:true
    },
    checkOutDate:{
        type:Date,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending', 'Confirm', 'Cancelled'],
        default:'pending',
    }

});

const HotelBooking= mongoose.model('HotelBooking',hotelSchema);
export default HotelBooking;