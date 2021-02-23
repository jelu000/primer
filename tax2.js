//använder named exports när flera värden ska exporteras från en modul

export function calcMoms(price) {
  console.log("Beräknar moms! - använder named exports när flera värden ska exporteras från en modul");
  return Number(price) * 1.25;
}
