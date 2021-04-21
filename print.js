import { calcMoms } from "./tax2";


export function print1() {
  console.log("print1");
}

export function print2() {
  console.log("print2");
}

export function printDetails(product){
  let taxedPrice = calcMoms(product.price);
  console.log(`Namn: ${product.name}, pris med moms: ${taxedPrice.toFixed(2)}:-`);
}

export function draRabbat(product, rabbat = 10){
 product.price = product.price - rabbat;
}
