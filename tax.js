//använder default exports nä endast ett värde ska exporteras från en modul
export default function(price) {
  console.log("Beräknar Engelsk tax! - default exports när endast ett värde ska exporteras från en modul");
  return Number(price) * 1.20;
}
