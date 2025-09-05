// to specify the datatype of variable
let x: number = 10;
console.log(x);


// if we are returning something from function then we have to specify the return type
function sum(a: number, b: number): number {
    return a + b;
}
const value = sum(5 , 10);
console.log("Sum is: " + value);


// if we are not returning anything from function then we can use void as return type or we can skip it
function greet(name: string) {
    console.log("Hello, " + name + "!");
}
greet("Anoop");


// to pass datatype to function as a parameter
function runAfter1s(fn: ()=>void){
    setTimeout(fn , 1000);
}
runAfter1s(function(){
    console.log("Hello after 1 second");
});


