


export class Car{
  constructor({id, make, model, year, price, img, description}){
    this.id = id
    this.make = make || ''
    this.model = model || ''
    this.year = year || 1968
    this.price = price || 1
    this.img = img || ''
    this.description = description || ''
  }

  get Template(){
    return `
    <div class="col-12 col-sm-6 col-lg-4 p-3 text-center">
      <div class="bg-white elevation-2 card-body rounded">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
        <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <h4 class="text-center">${this.make} <br> ${this.model} <br> ${this.year}</h4>
          <p>${this.description}</p>
          <section class="row">
          <div class="col-6 text-start">
          <button class="btn btn-info px-4" onclick="app.carsController.adjustCar('${this.id}')">Edit</button> 
          </div>
          <div class="col-6 text-end">
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button> 
          </div>
          </section>
        </div>
      </div>
    </div>
    `
  }
}