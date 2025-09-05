// both type and interface are almost same but there are some differences
// we can use type to create union type but we cannot use interface to create union type
// we can use type to create intersection type but we cannot use interface to create intersection type
//! we can only use interface while creating class but we cannot use type while creating class

type User1 = {
    name: string;
    age: number;
    email: string;
}
interface User2 {
    name: string;
    age: number;
    email: string;
}



// lets say u want to print th id which can be either number or string
// we can use union type
// that is we can use type in place of interface

type ID = number | string;

function printId(id: ID) {
    console.log("Your ID is: " + id);
}

printId(101);
printId("202");



// lets say if u want to create a type that has every property of multiple types/interfaces
// we can use intersection type

//! Employee and Manager can be a interface or type both
//! but TeamLead has to be a type because we are using intersection type

type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Anoop",
    startDate: new Date(),
    department: "ECM"
}