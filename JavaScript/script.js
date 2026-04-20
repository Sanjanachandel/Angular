// var aa=10;
// console.log(aa);
// let user=20;
// console.log(user);
// let a=Symbol(10);
// console.log(a);
// let ss=true;
// console.log(ss);

// console.log(a);
// var a=10;
// console.log(a);
// let val=Boolean(0);
// console.log(val);
// function demo(a,b){
//     console.log("hello");
//     console.log(a);
//     console.log(b);
// }
// demo(10,20,30);

// let data=function(){
//     console.log("hello");
// }
// data();
// debugger;

// function demo(a,b,c)
// {
//     console.log(c(a,b));
// }
// let add=(x,y)=>
// {
//     return x+y;
// }
// let div=(x,y)=>
// {
//     return x/y;
// }
// let mul=(x,y)=>
// {
//     return x*y;
// }
// demo(10,20,add);
// demo(10,20,mul);
// demo(40,20,div);
// demo(30,20, (x,y)=>
// {
//     return x-y;
// })
// debugger;
// function bank()
// {
//     let cbalance=100;
//     function credit()
//     {
//         let creditBalance=200;
//         function total()
//         {
//             let totalBalance=cbalance+creditBalance;
//             console.log(totalBalance);
//         }
//         total();
//     }
//     credit();
// }
// bank();
// if(true)
// {
//     let a=10;


// }
// console.log(a);
// function demo()
// {
//     var a=10;
// }
// console.log(a);
// let name="sanjana";
// console.log(`my name is ${name}`);
// console.log(`${(1>2)?"true":"False"}`);

// console.log(name.replace('a','s'));
// // console.log(name.replace());
// console.log(name.trim());
// console.log(name.slice(2,4));
// console.log(name.split("a"));
// console.log(name.split("a").join());
// let arr=[10,20,30,40];
// console.log(arr[2]);
// let arr1=[10,"sanjana",true,undefined,null];
// console.log(arr1[1]);
// console.log(arr.length);

// let arr2=new Array(12);
// console.log(arr2);
// let arr3=Array.of(20,40,60);
// console.log(arr3[2]);

// arr1[2]="hello";
// console.log(arr1);
// arr1[50]=100;
// console.log(arr1);
// console.log(arr1.length);   
// arr1.push(200);
// console.log(arr1);
// arr1.unshift(300);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(Array.isArray(arr1));
// console.log(arr1.slice(1,4));
// arr1.splice(2,0,"hi");
// console.log(arr1);
// arr1.splice(2,3);
// console.log(arr1);
// let arr4=[10,20,30,40];
//  let val=arr4.map((a)=>
//  {
// console.log(a);
// return a*10;
//  });

//  let val1=arr4.filter((a)=>
//     a>20);
//  console.log(val1);

//  // for of and for in :- using for iteration
//  let a1=[10,20,30,40,50];
//  for(let a of a1)// a is holding values
//  {
//    console.log(a);
//  }
//  for(let a in a1)//a is holding index
//  {
//    console.log(a);
//  }
//  console.log(a1);
// let name="sajana";
// console.log(name.toUpperCase());
//  let obj={
//    name:"sanjana",
//    age:21,
//    home:"HP"
//  }
//  console.log(Object.keys(obj));
//  console.log(Object.values(obj));
//  console.log( Object.entries(obj));
//  Object.freeze(obj);
//  console.log(Object.isFrozen);
//  obj.age="100";

//  console.log(obj);
//  for(let a in obj)
//  {
//    console.log( a);
//  }

//  function demo(x,y,...a)
//  {
//    console.log(x,y,a);
//  }
//  demo("hello","hii","by",10);
//  let a2=[20,35,80,100];
//  console.log(...a2);

//asyn
// let count=0;
// var data=setInterval(() => {
//   console.log("timeout");
//   count++;
//   if(count>10)
//   {
//     clearInterval(data);
//   }
// }, 5000);


//promise
// let promiseData=new Promise((res,rej)=>
// {
//   const success=true;
//   setTimeout(()=>
//   {
//     if(success)
//     {
//       res("success is achieved");
//     }
//     else{
//       rej("error");
//     }
//   },2000);

// });
// promiseData.then((a)=>
// {
//   console.log(a);
// }).catch((b)=>{
//   console.log(b);
// }).finally(()=>
// {
//   console.log("successed");
// })

// let data=fetch("https://dummyjson.com/products");
// data.then((a)=>
// {
//   return a.json();
// }).then((b)=>
// {
//   let val=b.products;
//   val.forEach((a)=>
//   {
//     console.log(a.title);
//   });
// });

//dom
console.log(window.document);
let inp=document.getElementById("inp");
console.log(inp);
let btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",()=>{
  console.log(inp.value);
  let h1=document.createElement("h1");
  h1.innerText=inp.value;
  document.body.appendChild(h1);
});

