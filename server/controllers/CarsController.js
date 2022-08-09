import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController{
    constructor(){
        super('/api/cars')
        this.router
        .get('', this.getCars)
        .get('/:carId', this.getCarById)
        .post('', this.createCar)
        .delete('/:carId', this.deleteCar)
        .put('/:carId', this.editCar)
    }

    async getCars(req, res, next){
        try {
            let cars = await carsService.getCars()
            res.send(cars)
        } catch (error) {
            next(error)
        }
    }

    async getCarById(req, res, next){
        try {
            let car = await carsService.getCarById(req.params.carId)
            res.send(car)
        } catch (error) {
            next(error)
        }
    }

    async createCar(req, res, next){
        try {
            let carData = req.body
            let car = await carsService.createCar(carData)
            res.send(car)
        } catch (error) {
            next(error)
        }
    }

    async deleteCar(req, res, next){
        try {
            let car = await carsService.deleteCar(req.params.carId)
            res.send(car)
        } catch (error) {
            next(error)
        }
    }

    async editCar(req, res, next){
        try {
            let carData = req.body // the data from the client (ex: form)
            let car = await carsService.editCar(req.params.carId, carData)
            res.send(car)
        } catch (error) {
            next(error)
        }
    }
}