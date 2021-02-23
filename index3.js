import calcTax from "./tax";
import { calcMoms } from "./tax2";
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
