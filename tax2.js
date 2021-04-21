//använder named exports när flera värden ska exporteras från en modul
console.log("Beräknar Svensk moms! - använder named exports när flera värden ska exporteras från en modul");

export function calcMoms(price) {
  return Number(price) * 1.25;
}

console.log("La till en funktion med default export för ett värde i denna modul");

//använder default exports för denna funktion
export default function calcMomsSum(...prices){
  return prices.reduce((total, p) => total += calcMoms(p), 0);
}
