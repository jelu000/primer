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

class GiftPack{
  construct(name, prod1, prod2, prod3){
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }

  getTotalPrice(){
    return [this.prod1, this.prod2, this.prod3].reduce( (total, p) => total , 0);
  }

  *getGenerator(){
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}

let winterp = new GiftPack("Winter", new Product("Mössa", 100), new Product("Handskar", 150), new Product("Buff", 50));
console.log("---------");
console.log(`Totalt pris: ${ winterp.getTotalPrice() }`);
console.log( JSON.stringify(new Product("Mössa", 100)) );

[...winterp.getGenerator()].forEach(p => console.log(`Product: ${ p }`));
