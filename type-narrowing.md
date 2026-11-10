// Type Narrowing in Typescript


type narrowing is an important feature, that allows developers to make a variables type more specific and it prevents type related errors.


Common 3 techniques are typeof, instanceof, in operator.

typeof:

function print( value; string | number){
    if(typeof value === 'string'){
        clog("String");
    }
    else{
        clog("Number");
    }
}

here, ts identifies whether the value is string or number.


instanceof:

class Car{
    start(){
        clog("Car has engine")
    }
}

function drive(vehicle: Car | Cycle){
    if(vehicle instanceof Car){
        vehicle.start();
    }
}

here ts recognizes vehicle as a car inside the condition



type Admin = {
    role: string
}

type User = {
    username : string
}

function check(person : Admin | User){
    if("role" in person){
        clog(person.role);
    }
    else{
        clog(person.username);
    }
}


ts narrows the object based on the property that exists.


type narrowing makes ts applications safer and easier to maintain and it helps to prevent errors.