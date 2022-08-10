import { House } from "../Models/House.js";



export function getHouseForm(house = new House({})) {
    let submitAction = 'app.housesController.createHouse()'
    if(house.id){
        submitAction = `app.housesController.editHouse('${house.id}')`
    }

    return `
    <form class="col-10 bg-white p-3 elevation-2 rounded card" onsubmit="${submitAction}">
          <h3 class="text-primary text-center">List Your House</h3>
          <div class="row card-body">
            <div class="col-12 col-md-4">
              <label class="form-label my-1" for="levels">Levels</label>
              <input class="form-control" type="number" id="levels" name="levels" value="${house.levels}">
            </div>
            <div class="col-12 col-md-4">
              <label class="form-label my-1" for="bedrooms">Bedrooms</label>
              <input class="form-control" type="number" id="bedrooms" name="bedrooms" value="${house.bedrooms}">
            </div>
            <div class="col-12 col-md-4">
              <label class="form-label my-1" for="year">Year Built</label>
              <input class="form-control" type="number" id="year" name="year" value="${house.year}">
            </div>
            <div class="col-12 col-md-6 pt-2">
            <label class="form-label my-1" for="bathrooms">Bathrooms</label>
            <input class="form-control" type="number" min="1" id="bathrooms" name="bathrooms" value="${house.bathrooms}">
            </div>
            <div class="col-12 col-md-6 pt-2">
            <label class="form-label my-1" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price" value="${house.price}">
            </div>
            <div class="col-12 pt-2">
            <label class="form-label my-1" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img" value="${house.img}">
            </div>
            <div class="col-12 pt-2">
            <label class="form-label my-1" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
            </div>
            <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
            </div>
          </div>
        </form>`
}