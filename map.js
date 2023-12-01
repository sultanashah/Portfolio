// console.log("MAP EXCERSICE");
// var arr=[html,css,js];
// var arr1=arr.map(elem=>elem.toUpperCase())
// console.log(arr);


let str=['html','css','js'];
   str1=str.map(elem =>
     elem.toUpperCase())
   console.log(str1);

let num=[1,2,3,4,5,6]
let sqr=num.map(elem => elem*2)
console.log(sqr);
// laptop=40000,Phone=20000,Bags=5000
let productscards=[
    {
        products:'laptop',
        price:'40000'
    },
    {
        products:'Phone',
        price:'20000'
    },

    {
        products:'Bags',
        price:'5000'
    }
]
cards=productscards.map(elem=>elem.products)
console.log(cards);

// You have an array of temperatures in Celsius. Use
// the map function to convert each temperature to
// Fahrenheit using the formula (Celsius 9/5) + 32.

let temperature=[10,20,30,40,50,60];
let celsius=temperature.map(elem=>(elem*9/5) + 32);
console.log(celsius);

 let std=[
    {
        name:'fatima',
        age: 20
    },
    {
        name:'shah',
        age: 18
    },
    {
        name:'Ayesh',
        age: 40
    },
 ]
  let names=std.map(elem=>elem.name)
  let years=std.map(elem=>2023-elem.age)
//   let year=2023-elem.age
  console.log(names);
  console.log(years);


//   Use the filter to create a new array containing
//   only even numbers.

let arr=[1,2,3,4,5,6,7]
let newarr=arr.filter(elem=>elem%2)
console.log(newarr);



let arr1=[1,2,3,4,5,6,7]
let newarr1=arr1.filter(elem=>elem<6)
console.log(newarr1);


let country=['England','australia','euruope']

let ctry=