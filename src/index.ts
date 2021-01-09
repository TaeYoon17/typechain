interface Human {
    name: string;
    age: number;
    gender: string;
}

const person={
    name:"kim",
    gender:"male",
    age:22
};

const name = "Kim",
    age=23,
    gender="male";

const sayHi = (person:Human):string=>{
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi(person));

export {};