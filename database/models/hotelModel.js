import mongoose from "mongoose";

const HotelSchema= new mongoose.Schema({
    name: String,
    location: String,
    rooms: Number,
    price:Number,
    availability:Boolean
    
    
});

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;

