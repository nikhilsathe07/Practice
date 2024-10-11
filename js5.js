let N=5;
for ( let i=1 ;i<N ; i++){
    let sum="";
    for(let j=i; j<N; j++){
        sum += " ";
    }
    for(let j=1 ; j<2*i ;j++){
        sum+="*";
    }
    console.log(sum);
}

let dumy="";
for ( let k = 1; k <= N ; k++) {
   if(k === N) {
    dumy += "|";
   } else {
    dumy += " "
   }
}
console.log(dumy);