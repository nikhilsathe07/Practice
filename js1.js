let N=5;
for(let i=1;i<=N;i++){
    let sum="";
    for(let j=N;j>i;j--){
        sum+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        if(j===1||j===2*i-1||i===N){
            sum+="*";
        }else{
            sum+=" ";
        }
    }
    console.log(sum);
}
