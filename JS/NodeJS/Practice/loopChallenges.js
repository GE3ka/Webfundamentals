console.log("printing all the odd numbers from 1 to 20");
for (var i=1;i<=20;i++){
    if (i%2!=0){
        console.log(i,"is an odd number");
    }
}

console.log("Decreasing Multiples of 3");

for(var i=100;i>0;i--){
    if(i % 3 == 0){
        console.log(i,"is evenly divisible by 3");
    }
}  


console.log("Print the sequence");


let x = 4;
while(x>=-3.5){
    console.log(x);
    x-=1.5;
}


console.log("Sigma");

let sum=0;
for(var i=0;i<=100;i++){
    sum+=i;
}
console.log("The total sum 1 to 100 = ", sum);


console.log("Factorial");
let product=1;
for(var i=2;i<=12;i++){
    product*=i;
}
console.log("the result 1 * 2 * 3 * ... * 10 * 11 * 12 = ",  product);