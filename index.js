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
console.log("Key word this--------------------------------");

let Snowboard = {
  name: "snowboard",
  price: "1040",
  price_inkTax: 1040 * 1.2,

  get priceIncTax(){
    return Number(this.price) * 1.2;
  },




  writeDetails: function(){
    console.log(`Object: ${this.name} ${this.price} ${this.price_inkTax}`);
  }

}

//ArrowFunctions använd inte som metoder till klasser eller objekt
writeDetails2 = () => console.log(`Object: ${Snowboard.name} ${Snowboard.price} ${Snowboard.price_inkTax}`);

writeDetails2();
Snowboard.writeDetails();
//this används för att hänvisa till objektet till funktionen eller metoden tillhör.
//Funktioner tillhör det globala objektet window i webläsare och till Node i javascriptprogram som körs i Node
//Metoder hänvisar till Objektet varifrån metoden är anropad i från.
console.log("");
console.log("this används för att hänvisa till objektet till funktionen eller metoden tillhör.");
console.log("Funktioner tillhör det globala objektet window i webläsare och till Node i javascriptprogram som körs i Node");
console.log("Metoder hänvisar till Objektet varifrån metoden är anropad i från.");
console.log("");

//Att kalla på en funktion eller metod utan paranteser är ett refferens anrop på funktion eller metod och används oftast vid omClick för att inte kör funktionen vid start.
console.log("Att kalla på en funktion eller metod utan () paranteser är ett refferensanrop på funktion eller metod och används oftast vid omClick för att inte kör funktionen vid start.");

/*Kapitel 4 från Sid 73 Object och arv i javscript---*/
//sid 74
console.log("");
let skoter = {
  name: "Skoter",
  pris: 10000,
  prisMedMoms(){
    return Number(this.pris) * 1.25;
  }
}

console.log(`skoter: ${skoter.name}, pris: ${skoter.pris}:-`);
console.log(`toString: ${skoter.toString()}`);

console.log("------------------");
let vattenskoter = {
  name: "Vattenskoter",
  pris: 30000,
  prisMedMoms(){
    return Number(this.pris) * 1.25;
  }
}

let skoterprototyp = Object.getPrototypeOf(skoter);
console.log("Skoter prototyp: " + skoterprototyp);

let vattenskoterprototyp = Object.getPrototypeOf(vattenskoter);
console.log("VattenSkoter prototyp: " + vattenskoterprototyp);
//kollar om prototyperna är lika
console.log("Kollar om prototyperna är lika!");
console.log(`Common prototyp ${ skoterprototyp === vattenskoterprototyp}`);
//kollar om objekten är lika
console.log("Kolla om objekten är lika");
console.log(`Kollar om objekten är lika ${ skoter === vattenskoter}`);

//prövar att skriva ut skoterobjekt
console.log(skoter.toString());
console.log(vattenskoter.toString());

//Omdefinerar toString() för skoterprototyp
skoterprototyp.toString = function(){
  return `toString: name: ${this.name}, Pris: ${this.pris}`;
}
console.log("Omdefinerar toString() för skoterprototyp och skriver samma skoter & vilket påverkar VattenSkoter object också! Se upp efetrsom de är samma prototyp!");
console.log(skoter.toString());
console.log(vattenskoter.toString());

//Custom prototype
console.log("Custom prototyp");

let ProductProto = {
  toString: function(){
    return `toString: name= ${this.name}, Pris= ${this.pris}`;
  }
}

Object.setPrototypeOf(skoter, ProductProto);
Object.setPrototypeOf(vattenskoter, ProductProto);

console.log(skoter.toString());
console.log(vattenskoter.toString());

//Använda Constructor funktions
console.log("");
console.log("Använda Constructor funktions");

let Vinterprodukt = function(name, price) {
  this.name = name;
  this.price = price;
}

Vinterprodukt.prototype.toString = function() {
  return `toString: Name: ${this.name}, price: ${this.price}`;
}
console.log("Constructor function invoked with the 'new' keyword ");
let skidor = new Vinterprodukt("Skidor", 2495);
let snowboard = new Vinterprodukt("Snowboard", 1795);

console.log(skidor.toString());
console.log(snowboard.toString());

//sid 80------
let MomsadVinterProdukt = function(name, price, momssats){

  console.log("");
  console.log("Använder call() för att klämma in construktorn i arvskedjan");
  //Använder call() för att klämma in construktorn i arvskedjan

  Vinterprodukt.call(this, name, price);
  this.momssats = momssats;
}

console.log("");
console.log("Använder Object.setPrototypeOf() för att skicka in den nya constructorn i arvskedjan");
//Använder Object.setPrototypeOf() för att skicka in den nya constructorn i arvskedjan
Object.setPrototypeOf(MomsadVinterProdukt.prototype, Vinterprodukt.prototype);

MomsadVinterProdukt.prototype.getPrisMedMoms = function(){
  return (this.price) * this.momssats;
}
MomsadVinterProdukt.prototype.toMomsString = function(){
  return `${this.toString()}, Momsad: ${this.getPrisMedMoms()}`
}

let pulka = new  MomsadVinterProdukt("Pulka", 100, 1.4);

console.log(pulka.toMomsString());

//Skuggar eller override, omdefinerar prototyp
console.log("Skuggar eller override, omdefinerar prototyp");

MomsadVinterProdukt.prototype.toString = function(){
  let chainResult = Vinterprodukt.prototype.toString.call(this);
  return `${chainResult}, Momsad: ${this.getPrisMedMoms()}`
}

console.log(`Pulka och MomsadVinterProdukt: ${pulka instanceof MomsadVinterProdukt}`);
console.log(`Pulka och VinterProdukt: ${pulka instanceof Vinterprodukt}`);

console.log(`skidor och MomsadVinterProdukt: ${skidor instanceof MomsadVinterProdukt}`);
console.log(`skidor och VinterProdukt: ${skidor instanceof Vinterprodukt}`);

Vinterprodukt.process = (...produkter) => produkter.forEach(p => console.log(p.toString()));
Vinterprodukt.process(new Vinterprodukt("Snowracer", 450, 1.25), new Vinterprodukt("Stavar", 80, 1.25), new Vinterprodukt("Hjälm", 40, 1.25));
console.log("Klar till sida 82, ska börja med klasser i ny fil");
//klar till sida 82
