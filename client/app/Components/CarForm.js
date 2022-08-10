import { Car } from "../Models/Car.js";



export function getCarForm(car = new Car({})) {
    let submitAction = 'app.carsController.createCar()'
    if(car.id){
        submitAction = `app.carsController.editCar('${car.id})`
    }

    return `
    <form class="col-10 bg-white p-3 elevation-2 rounded card" onsubmit="${submitAction}">
          <h3 class="text-primary text-center">List Your Car</h3>
          <div class="row card-body">
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="make">Make</label>
              <input class="form-control" type="text" minlength="5" id="make" name="make" value="${car.make}">
            </div>
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="model">Model</label>
              <input class="form-control" type="text" id="model" name="model" value="${car.model}">
            </div>
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="year">Year</label>
              <input class="form-control" type="number" id="year" name="year" value="${car.year}">
            </div>
            <div class="col-12 col-sm-6">
            <label class="form-label my-1" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price" value="${car.price}">
            </div>
            <div class="col-12">
            <label class="form-label my-1" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img" value="${car.img}">
            </div>
            <div class="col-12">
            <label class="form-label my-1" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${car.description}">${car.description}</textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}