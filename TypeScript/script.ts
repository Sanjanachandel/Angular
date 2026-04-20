// let a=10;
// console.log(a);
let a: string;
a="hello";
console.log(a);
let b:undefined;
console.log(b);
// let c:any;
// c="helllooo"
// c=10;
let c:any=10;
c="helllooo";
console.log(c);
let d:void;
console.log(d);
function printValues(a: number, b?: number){
console.log({a, b});
} 
printValues(10);

//array
let aa:string[]=["jee","hello","hi","bye"];
console.log(aa);
let bb:number[]=[1,2,3,4,5];
console.log(bb);
let cc:any[]=[1,"hello",true];
console.log(cc);
let arr:(string|number)[]=[1,"hello",2,"hi"];
console.log(arr);
console.log("bye");
//tuple
let arr1 :[number, string, boolean]=[1,"hello",true];
console.log(arr1);
//object 
let user={
    firstname:"ABC",
    lastname:"XYZ",
    age: 10,
    isalive:true
};
// user.age="hello";//not possible
console.log(user);