console.log("food, yummy challenge");
function alwaysHungry(arr) {
    let anyFood = false;   
    for (var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            anyFood=true;
        }
    }
    if(anyFood){
        console.log("Yummy...!");

    }
    else{
        console.log("I'm hungry...!");
    }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

console.log("filter challenge");

function highPass(arr, cutoff) {
    var filteredArr = [];
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]!= cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


console.log("Better than average");

function betterThanAverage(arr) {
    var sum = 0;    
    var average =0;
    for (var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    average = sum / arr.length;
    var count = 0
    for (var i=0;i<arr.length;i++){
        if (arr[i]>average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

console.log("Array Reverse challenge");
function reverse(arr) {
    let arr2=[];
    for (var i=arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }
    return arr2;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

console.log("Fibonacci Array challenge");
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i=2;i<n;i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);  