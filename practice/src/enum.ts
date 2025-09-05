// enum stands for enumerations
// it is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors: numeric and string-based.

enum direction {
    up,
    down,
    left,
    right
}


function doSomething(keyPressed: direction){
    if(keyPressed === direction.up){
        console.log("You pressed up");
    }
    if(keyPressed === direction.down){
        console.log("You pressed down");
    }   
    if(keyPressed === direction.left){
        console.log("You pressed left");
    }
    if(keyPressed === direction.right){
        console.log("You pressed right");
    }
}


doSomething(direction.up);
doSomething(direction.down);
doSomething(direction.left);
doSomething(direction.right);


// the first value will be 0 and the next will be 1 and so on
// we can give them default values also
console.log(direction.up); // 0
console.log(direction.down); // 1
console.log(direction.left); // 2
console.log(direction.right); // 3
// the final value of enum will be a number if we have not assigned any value to it