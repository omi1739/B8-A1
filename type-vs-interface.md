// Type vs Interface core differences in typescript

ts gives us 2 ways to define data structure, type aliases and interface


interface User{
    name : string;
    age : number;
}

const user: User = {
    name : "Omi",
    age : 22
};

type alias can also define an object structure but it is more flexible, it supports unions, intersections, primitive types and tuples.

One major difference is declaration merging. interfaces with the same name can be declared multiple times and ts combines their properties.

interface Person{
    name: string;
}

interface Person{
    age : number;
}



Lastly, we need to use interface when defining object structures espicially, when declaration merging or extension is usful. on the other hand, when working with unions, intersections, primitives or more complex types expressions we use type alias.