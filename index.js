let hatPrice = 100;
console.log("Hat price: " + hatPrice);
let bootPrice = "100";
console.log("Boot price: " + bootPrice );

if (hatPrice == bootPrice)
  console.log("pice is the same");
else
  console.log("Price is not the same");

let totalPrice = hatPrice + bootPrice;
console.log("Total price="+ totalPrice);

let myVariable = "Jens";
console.log("Type: " + typeof myVariable);
//sid 46
console.log(" ");
console.log("Sid 47------- avoding Type coercion  Type: " + typeof hatPrice);

if (hatPrice === bootPrice)
  console.log("pice is the same");
else
  console.log("Price is not the same");


//sid 50 avoding argument missmatching

function SumPrices(first, second, third){
  return first + second + third;
}

totalPrice = SumPrices(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices(100, 200, 300);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices(100, 200);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

console.log(" ");
console.log("Sid 51------- avoding Type coercion  Type: " + typeof hatPrice);

function SumPrices2(first, second, third=0){
  return first + second + third;
}

totalPrice = SumPrices2(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices2(100, 200, 300);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices2(100, 200);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

console.log(" ");
console.log("Sid 52------- using rest parameter  Type: " + typeof hatPrice);

function SumPrices3(...numbers){
  return numbers.reduce(function(total, val){ return total + val}, 0);
}

totalPrice = SumPrices3(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices3(100, 200, 300);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices3(100, 200);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

console.log(" ");
console.log("Sid 52------- remove string and types as NaN  function SumPrices4() ");

function SumPrices4(...numbers){
  return numbers.reduce(function(total, val){ return total + (Number.isNaN(Number(val)) ? 0:Number(val));}, 0);
}

totalPrice = SumPrices4(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices4(100, 200, 300);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices4(100, 200);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

totalPrice = SumPrices4(100, 200, undefined, false, "Hello");
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

console.log(" ");
console.log("Sid 53------- arrowFunction ot Lambda expression in SumPrices5() instead of anonymes function  ");

function SumPrices5(...numbers){
  return numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0:Number(val)), 0);
}

totalPrice = SumPrices5(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);



console.log(" ");
console.log("Using one line arrowFunction!");
let SumPrices6 = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0:Number(val)), 0);

totalPrice = SumPrices6(hatPrice, bootPrice);
console.log(`Total: ${totalPrice}   ${typeof totalPrice}`);

console.log(" ");
console.log("Sid 54 Working with Arrays");

let names = ["hat", "boots", "gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);
let totalPrice2 = SumPrices6(...prices);
console.log("totalt: " + totalPrice2 + typeof totalPrice2);

let combinedArray = [...names, ...prices];
combinedArray.forEach(elements => {console.log("Combined array: " + elements)});
console.log("IGEN-------------- Enligt boken!");
combinedArray.forEach( element => console.log(`combined array: ${ element }`));

//Arbeta med object sid 56----------------------------
let hat = {
  name: "Hat",
  price: 120
};

let boot = {
  name: "Boot",
  price: 100
}

let totalPrice3 = SumPrices6(hat.price, boot.price);
console.log(`Totalt: ${ totalPrice3 } och typ: ${ typeof totalPrice3}`);

let gloves = {
  productname: "Gloves",
  price: "40"
}
 gloves.name = gloves.productname;
 delete gloves.productname;
 gloves.price = 20;

 let totprice = SumPrices6(hat.price, boot.price, gloves.price);
 console.log("Totalt pris: " + totprice + " typeof: "+ typeof totprice);

 //sid 58 Type Coercion with || ----------------------------

let propertycheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${ propertycheck }, ${ objectAndPropertyCheck }`);

let otherHat = { ...hat };
console.log(`Spread: ${ otherHat.name} Price ${otherHat.price }`);

// sid 60-------
let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replaceProperties = {...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replaceProperties)}`);

let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

console.log("hat object: " + JSON.stringify(hat));
console.log(hat);

//sid 61 defining Objects with Getters and Setters. ADDING Keps and Shirt not in book

let Keps = {
  name: "keps",
  _price: 100,
  price_inkTax: 100*1.2,

  set price(newPrice){
    this._price = newPrice;
    this.price_inkTax = this._price * 1.2;
  },

  get price() {
    return this._price;
  },

  writeDetails: function(){
    console.log(`Object: ${this.name} ${this.price} ${this.price_inkTax}`);
  }
}

let Shirt = {
  name: "shirt",
  price: "104",

  get priceIncTax(){
    return Number(this.price) * 1.2;
  }
}

console.log(`Keps: ${ Keps.price}  ${Keps.price_inkTax}`);
Keps.price = 120;
console.log("Nytt pris:");
console.log(`Keps: ${ Keps.price}  ${Keps.price_inkTax}`);

console.log(`Shirt: ${ Shirt.price}  ${Shirt.priceIncTax}`);
Shirt.price = 124;
console.log("Nytt pris:");
console.log(`Keps: ${ Shirt.price}  ${ Math.round(Shirt.priceIncTax) }`);

Keps.writeDetails();
Keps.price = 200;
Keps.writeDetails();

// Sid Understanding the this key word----------------------------
