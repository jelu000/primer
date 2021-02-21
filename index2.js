//npx nodemon index2.js

//working with classes sid 83

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
    super(name, price);//super måste vara först vid arv
    this.taxrate = taxrate;
  }

  getPriceIncTax(){
    return Number(this.price) * this.taxrate;
  }

  toString(){
    let chainresult = super.toString();
    return `${chainresult} IncTax: ${this.getPriceIncTax()} `;
  }

  static process(...products){
    products.forEach(p=>console.log(p.toString()));
  }
}

let mossa = new Product("Mössa", 210);
let pjaxor = new Product("Pjäxor", 1000);

console.log(mossa.toString());
console.log(pjaxor.toString());

let stighud = new TaxedProduct("Stighud", 1220);

console.log( stighud.toString() );

TaxedProduct.process(new TaxedProduct("spänne", 30), new TaxedProduct("skidhållare", 130));

function createProductIerator(){
  const skridsko = new Product("Skridsko", 200);
  const cykel = new Product("Cykel", 5200);
  const snowboard = new Product("Snowboard", 200);

  let lastVal;

  return {
    next(){
      switch (lastVal){
        case undefined:
          lastVal = skridsko;
          return { value: skridsko, done: false }
        case skridsko:
          lastVal = cykel;
          return { value: cykel, done: false }
        case cykel:
            lastVal = snowboard;
            return { value: snowboard, done: false }
        case snowboard:
            lastVal = undefined;
            return { value: undefined, done: true }
      }
    }
  }
}

console.log("");
console.log("Använder iterator för att loopa produkter sid 87");

let iterator = createProductIerator();
let result  = iterator.next();

while (!result.done){
  console.log(result.value.toString());
  result = iterator.next();
}

console.log("");
console.log("Använder generator istället för iterator för att loopa produkter sid 87");


function* createProductGenerator(){
  yield new Product("Skoter", 25000);
  yield new Product("Fyrhjuling", 35000);

}

let generator = createProductGenerator();
let result2 = generator.next();

while (!result2.done){
  console.log(result2.value.toString());
  result2 = generator.next();
}

console.log("");
console.log("Ännu ett sett att använda generator istället för iterator för att loopa produkter sid 87");

[...createProductGenerator()].forEach(p => console.log(p.toString()));

console.log("");
console.log("Definera iterabla object Sid 89");



class Giftpack {
  constructor(name, prod1, prod2, prod3){
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }

  getTotalPrice(){
    return [this.prod1, this.prod2, this.prod3].reduce( (total, p) => total + p.price, 0);
  }

  *getGenerator(){
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }

  *[Symbol.iterator]() {
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}


let winterp = new Giftpack("Winter", new Product("Mössa", 100), new Product("Handskar", 150), new Product("Buff", 50));

console.log("---------");
console.log(`Totalt pris: ${ winterp.getTotalPrice() }`);
console.log("--Med [...winterp.getGenerator()].forEach");
[...winterp.getGenerator()].forEach(p => console.log(`Product: ${ p }`));
console.log("--Och igen men *[Symbol.iterator].forEach");
[...winterp].forEach(p => console.log(`Produkte igen: ${ p }`));

//sid 92 use object called data to collect products
console.log("");
console.log("sid 92 use object called data to collect products");
let data = { hat: new Product("Hat", 100) }
data.boots = new Product("Boots", 200);

Object.keys(data).forEach( i => console.log(data[i].toString()));

//Använder Map istället för att slippa begränsning med endast string som key
console.log("");
console.log("Använder Map istället för att slippa begränsning med endast string som key");

let datamap = new Map();
datamap.set("jacka", new Product("jacka", 600));
datamap.set("skjorta", new Product("skjorta", 400));

[...datamap.keys()].forEach(key => console.log(datamap.get(key).toString()));

//börjar med sid 94 Symbols
console.log("");
console.log("börjar med sid 94 Symbols");
//symbols används för att skapa unika nycklar
console.log("symbols används för att skapa unika nycklar");

this.id = Symbol();

class Supplier {
  constructor(name, productids){
    this.name = name;
    this.productids = productids;
  }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 200)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 200)];

let productsmap = new Map();
[...acmeProducts, ...zoomProducts].forEach(p => productsmap.set(p.id, p));

let suppliersmap  = new Map();
suppliersmap.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliersmap.set("zoom", new Supplier("Zoom shoes", zoomProducts.map(p => p.id)));

suppliersmap.get("acme").productids.forEach( id => console.log(`Name: ${productsmap.get(id).name}`));

//börjar med sid 95 Set()
console.log("");
console.log("börjar med sid 95 använda Set()");
//symbols används för att skapa unika nycklar
console.log("Använda set() me unika index");

let aproduct = new Product("Katt", 300);

let productarray = [];
let productset = new Set();

for (let j=0; j<5; j++){
  productarray.push(aproduct);
  productset.add(aproduct);
}

console.log(`Array length: ${productarray.length}`);
console.log(`Set length: ${productset.size}`);
