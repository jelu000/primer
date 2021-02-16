//npx nodemon index2.js

//working with classes

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString(){
      return `toString: Name: ${this.name} Price ${this.price}`;
  }
}

class TaxedProduct extends Product{
  constructor(name, price, taxrate = 1.25){
    super(name, price);
    this.taxrate = taxrate;
  }

  getPriceIncTax(){
    return Number(this.price) * this.taxrate;
  }

  toString(){
    let chainresult = super.toString();
    return `${chainresult} IncTax: ${this.getPriceIncTax()} `;
  }
}

let mossa = new Product("Mössa", 210);
let pjaxor = new Product("Pjäxor", 1000);

console.log(mossa.toString());
console.log(pjaxor.toString());

let stighud = new TaxedProduct("Stighud", 1220);

console.log( stighud.toString() );
