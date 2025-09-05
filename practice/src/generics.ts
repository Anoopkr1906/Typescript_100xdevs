// generics are a language independent concept (exists in c++ as well)

type Input = number | string;

function firstEle(arr: Input[]){
    return arr[0];
}

const value = firstEle([1,2,3,4,5]);
console.log(value); // 1
// .toFixed(2) // error because value is of type number | string and string does not have toFixed method

const str = firstEle(["a", "b", "c", "d"]);
console.log(str); // a
// .toUpperCase() // error because value is of type number | string and number does not have toUpperCase method

// to solve this problem we use generics


// Generics enables us to create components that work with any data type while still providing compile-time type safety.


function identity<T>(arg: T){
    return arg;
}

let output1 = identity<number>(5);
let output2 = identity<string>("Hello");

console.log(output1); // 5
console.log(output2.toUpperCase()); // HELLO , we can use string methods now


function getFirstEle<T>(arr: T[]){
    return arr[0];
}

const ele = getFirstEle<number>([1,2,3,4,5]);
const ele2 = getFirstEle<string>(["a", "b", "c", "d"]);