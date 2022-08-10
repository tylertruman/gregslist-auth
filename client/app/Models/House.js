


export class House{
    constructor({id, levels, bedrooms, bathrooms, year, price, img, description}){
        this.id = id 
        this.levels = levels || 0
        this.bedrooms = bedrooms || 0
        this.bathrooms = bathrooms || 0
        this.year = year || 0
        this.price = price || 0
        this.img = img || ''
        this.description = description || ''
    }
    get Template(){
      return `
      <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="bg-white elevation-2 card-body rounded">
        <img class="img-fluid" src="${this.img}" alt="">
        <section class="row p-2">
        <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <h4 class="text-center">${this.levels} Levels <br> ${this.bedrooms} Beds <br>${this.bathrooms} Bathrooms<br> Built: ${this.yearbuilt}</h4>
          <p>${this.description}</p>
          <div class="col-6 text-start">
          <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust House</button> 
          </div>
          <div class="col-6 text-end">
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete Me</button> 
          </div>
        </div>
      </section>
    </div>`

  }
}