interface User{
    name: string;
    age: number;
    email?: string; // optional property , we can pass it or not
}

function isLegal(user: User): boolean{
    if(user.age > 18){
        return true;
    }
    return false;
}

function greet(user: User) {
    console.log("Hello, " + user.name);
    if(isLegal(user)){
        console.log("You are legal");
    } else {
        console.log("You are not legal");
    }
}

greet({name: "Anoop", age: 20});

// isLegal({name: "Anoop", age: 20});