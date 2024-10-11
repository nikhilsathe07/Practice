let N = 5;
for (let i = 1; i < N; i++) {
  let car = "";

  for (let space = N; space > i; space--) {
    car += "  ";
  }

  for(let j = 1; j <= i*2-1; j++) {
    car += "* ";
}

  console.log(car);
  
}
let dumy="";
for ( let k = 1; k <= N + 1; k++) {

   if(k === N ) {
    dumy += "|";
   }
   else {
    dumy += "  "
   }

}
console.log(dumy);



/* modified */

// let N = 5;
// for (let i = 1; i < N; i++) {
//   let car = "";

//   for (let space = N; space > i; space--) {
//     car += " ";
//   }

//   for(let j = 1; j <= i*2-1; j++) {
//     car += "*";
// }

//   console.log(car);
  
// }

// let dumy="";
// for ( let k = 1; k <= N + 1; k++) {

//    if(k === N ) {
//     dumy += "|";
//    }
//    else {
//     dumy += " "
//    }

// }
// console.log(dumy);