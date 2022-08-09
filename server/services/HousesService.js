import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";


class HousesService{
    async getHouses(){
        let houses = await dbContext.Houses.find({})
        return houses
    }

    async getHouseById(houseId){
        let house = await dbContext.Houses.findById(houseId)
        if(!house){
            throw new BadRequest('Invalid House Id')
        }
        return house
    }

    async createHouse(houseData){
        let house = await dbContext.Houses.create(houseData)
        return house
    }

    async deleteHouse(houseId){
        let house = await this.getHouseById(houseId)
        await house.remove()
        return house
    }

    async editHouse(houseId, houseData){
        let house = await this.getHouseById(houseId)
        house.levels = houseData.levels || house.levels
        house.bedrooms = houseData.bedrooms || house.bedrooms
        house.bathrooms = houseData.bathrooms || house.bathrooms
        house.year = houseData.year || house.year
        house.price = houseData.price || house.price
        house.img = houseData.img || house.img
        house.description = houseData.description || house.description
        await house.save()
        return house
    }
}

export const housesService = new HousesService()