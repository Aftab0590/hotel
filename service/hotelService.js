
import Hotel from "../database/models/hotelModel.js"




export const createHotelService = async (data)=>{
    try {
    const hotel= new Hotel(data);
    return await hotel.save();
    } catch (error) {
        throw error;
    }
}

export const getHotelsService = async (data)=>{
    try {
        const hotels=new Hotel(data);
        return await hotels.save()

    } catch (error) {
        throw error;
    }
}

export const updatedHotelService=async (data)=>{
    try {
        return await Hotel.updateOne(data,{where:{id:data.id}});
    } catch (error) {
        throw error;
    }
}