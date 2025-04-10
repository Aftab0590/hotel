import Hotel from "../database/models/hotelModel.js";
import {
  createHotelService,
  getHotelsService,
  updatedHotelService,
} from "../service/hotelService.js";
//create hotel
export const createHotel = async (req, res) => {
  try {
    const { hotelName, location, rooms, price, availability } = req.body;
    const newHotels = await createHotelService({
      hotelName,
      location,
      rooms,
      price,
      availability,
    });
    res.status(201).json(newHotels);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "hotel not create!!!" });
  }
};

//get all hotels
export const getHotels = async (req, res) => {
  try {
    const hotels = await getHotelsService(req.body);
    res.status(201).json(hotels);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " hotel not find!!!" });
  }
};

//book a hotel ....update availability!!!
export const updateHotelById = async (req, res) => {
  try {
    const updatedHotel = req.body;
    const isUpdated = await updatedHotelService(updatedHotel);
    res.status(200).json({message:"Updted Successfully!!!!"});
      
  

    if (!isUpdated) {
      
      res.status(400).json({ message: "hotel not found!!!" });
    }
    //if (Hotel.availability) {
      
    //  return res.status(200).json({ message: "  room is available!!!" });
      
    //} else {
    //  (!Hotel.availability)
    //    res.status(500).json({ message: "No room available!!!!" });
    //}
  } 
    catch (error) {
  console.log(error);
    res.status(500).json({ message: "Booking Unsuccessful!!" });
  }
};
