import calcTax from "./tax";
import calcMomsSum, { calcMoms } from "./tax2";
//import {print1, print2, printDetails, draRabbat} as print from "./print";
import * as print from "./print";

console.log("Sid 96 - Using modules");

class Vara {
  constructor(name, price){
    this.id = Symbol();
    this.name = name;
    this.price = price;

  }
}


let vara = new Vara("segel", 2444);
let taxedprice = calcTax(vara.price);
console.log(`Name: ${ vara.name}, Pris med Moms: ${ taxedprice }:-`);
console.log("");

let vara2 = new Vara("bräda", 3000);
let momsatpris = calcMoms(vara2.price);
console.log(`Name: ${ vara2.name}, Pris med Moms: ${ momsatpris }:-`);
console.log("");
console.log("imorterar alla named med *");
print.print1();
print.print2();

let products = [new Vara("Gloves", 100), new Vara("Boots", 200), new Vara("Moppe", 1000)];
let totaltpris = calcMomsSum(...products.map(p => p.price));
console.log(`Totalt pris: ${totaltpris.toFixed(2)}`);

console.log("");
console.log("en sista vara");

let vara3 = new Vara("Flygplan", 1000);
print.draRabbat(vara3, 50);//sista parameter valfri! använt extraparameter om inget anges
let momspris = calcMoms(vara3.price);
print.printDetails(vara3);
