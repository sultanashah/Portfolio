// console.log("MAP EXCERSICE");
// var arr=[html,css,js];
// var arr1=arr.map(elem=>elem.toUpperCase())
// console.log(arr);


let str=['html','css','js'];
   str1=str.map(elem =>
     elem.toUpperCase())
   console.log(str1);

let num=[1,2,3,4,5,6]
let sqr=num.map(elem => elem**2)
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
// Fahrenheit using the formula (Celsius * 9/5) + 32.

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


let country=['Estonia','australia','Europe','goa','canada']

let ctry=country.filter(elem=>elem.length<6)
console.log(ctry);

let countrystarte=country.filter(elem=>elem.startsWith("E"))
console.log(countrystarte);



// Create a new array containing only products with
// prices less than $10. Suppose you have an array of
// objects representing products.
let productsf = [
    { name: 'pens', price: '$9' },
    { name: 'Boll', price: '$10' },
    { name: 'Chocolate', price: '$8' },
    { name: 'Dates', price: '$12' }
    ];
    let productsLessThanTen = productsf.filter(product => Number(product.price.slice(1)) <
    10);
    console.log(productsLessThanTen); 
    // let lowPriceProducts = productsf.filter(item => item.price < '$10');
    // console.log(lowPriceProducts);


    // Use the reduce function to calculate the sum of
    // all numbers in the array. The out put should be in
    // the array.

    console.log("REDUCE");
    let numb=[11,22,33,44,55,66,77,88,99];
    let totalSum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(numb);
    console.log(totalSum);
    // You have an array of strings. Use the reduce
    // function to concatenate all strings in the array
    // into a single sentence.
    let strngs = ['Hello', ',', 'I', 'am', 'Shah'];
    let fullSentence = strngs.reduce((accumulator, currentString) => accumulator + " " + currentString,
    "");
    console.log(fullSentence);



   // You have an array of objects representing products with prices.
    //Use the reduce function to calculate the total price of all products
    //in the array. The output should be a number.
    let productPrices = [
    {
        products:'BOTTLE',
        prices:'40'
    },
    {
        products:'TABLE',
        prices:'80'
    },
    
    {
        products:'STAND',
        prices:'50'
    },
    {
        products:'  BULB',
        prices:'20',
    },
    ]
    console.log(productPrices);
    let totalProductPrice= productPrices.reduce((accumulator,objects)=>
    accumulator+Number(objects.prices),0);
    console.log(totalProductPrice);



       

    // Use the reduce function to calculate the total price of all producTS
    // let totalProductPrice= productPrices.reduce((accumulator,currentVal)=>Number(accumulator)+Number(currentVal)

   
//     You have an array of transactions where each
// transaction is an object with a type ("debit" or
// "credit") and an amount. Use the reduce function
// to calculate the account balance. Debits reduce
// the balance, and credits increase it.
// [ { type: "debit"
// , amount: 50 }, { type: "credit"
// ,
// amount: 100 }, { type: "debit"
// , amount: 30 }, ];
let transactions=[{type:"debit",amount:50},{type:"credit",amount:100},
{type:"credit",amount:50} ,{type:"debit",amount:30} ]
console.log(transactions)
let initialBalance=0;
let finalBalance=transactions.reduce((accumulator,transaction)=>{
    if (transaction.type==="debit"){
        return accumulator-transaction.amount;
        }else if (transaction.type==="credit"){
            return accumulator+transaction.amount;
            }
            },initialBalance);
            console.log("final Balance after all transactions :",finalBalance)











        

   
    // console.log(productPrices);
    // let totalPrice = productPrices.reduce((accumulator, obj) => accumulator + (obj.price),)

    // console.log(`Total Price: ${totalPrice}`);












// let product = [
//     { name: 'Apple', price: 8 },
//     { name: 'Banana', price:16 },
//     { name: 'Cherry', price: 20},
//     { name: 'Date', price: 10 },
// ]
// let PriceProducts = product.price.filter(etem => etem.price < 10);
// console.log(PriceProducts);






// You have an array of objects representing
// employees. Use the filter function to create a new
// array containing only employees who have a
// salary greater than or equal to $50,000.
// const employee = [
//     { id: '1', name: 'John Doe', role: 'Developer', salary: 90000},
//     { id: '2', name: 'Jane Smith', role: 'Manager', salary: 120000},







































































































































































// let allPs = document.querySelectorAll('p');
// allPs.forEach((element,index)=>{
//     element.style.color="red";
//   })












// Create an index.html file and put four p elements
// as above: Get the first paragraph by using











// let  h1=document.querySelector("h1")
// console.log(h1);

// let text ="hello world"
// text.innerHTML="hello world";




// let para1=document.querySelectorAll('p');
// console.log(para1[0]); //first element of array
//Create a new div with id "myDiv", set its innerHTML to "Hello World!". Then, get that div back out
//and log it in console.
// let mydiv = document.createElement("div");
// mydiv.id = "myDiv";
// mydiv.innerHTML = "Hello World!";
// document.body.appendChild(mydiv);
// let divBackOut = document.getElementById("myDiv");
// console.log(divBackOut);






















// // ARRAY EXCERCISE I


// console.log("ARRAYs-1");
// let str=[]
// let str1=[1,2,3,4,5,6,7,8,]
// console.log(str1);
// console.log(str1.length);
// console.log("First Arrays");
// firstitem=str1[0];
// console.log(firstitem);
// console.log("Last Arrays");
// lastIndex=str1.length-1;
// console.log(lastIndex);
// console.log("middle Arrays");
// middarray=Math.floor(str1.length/2);
// console.log(middarray);

// let mixDataType=['fatima',25,'OCT','Shah',23,1.5,'AUG' ,true,false]
// console.log(mixDataType.length);

// console.log("IT COMPANIES HERE");
// let companies=['Facebook', 'Google', 'Microsoft',
//     'Apple', 'IBM','Oracle','Amazon']

// console.log(companies);
// console.log(companies.length);
// console.log("First Company:");
// let firstcpmn=companies[0];
// console.log(firstcpmn);

// console.log("Middle Company:" );

// let middcamp=Math.floor(companies.length/ 2);
// let middleItem= str1[middcamp]
// console.log(middleItem);


// // var middleIndex = Math.floor(Companies.length / 2);
// // var middleItem = arr2[middleIndex];
// // console.log("Middle company:", middleItem);


// console.log("Last Company");
// lastcamp=companies.length-1;
// console.log(lastcamp);

// console.log("The Companies to upper case");

// let length = companies.length;
// for ( let i=0; i <length; i++){
//   console.log(companies[i].toUpperCase());
// }

// // var Length = itCompanies.length;
// // for (var i = 0; i <Length; i++) {
// // console.log(itCompanies[i].toUpperCase());
// // }
// let senct=companies.join(",");
// console.log(senct,"are big IT companies");
// let comp="microsoft"
// if (companies.includes(comp)){
//     console.log(comp,'Found')
// }
// else{
//     console.log("Not Found");
// }

// // arrray2
// console.log("ARRAYs-2");

// var shoppingCart = ['Milk','Coffee','Tea','Honey']
// shoppingCart.unshift("Meat");
// console.log("'Meat' in the beginning of your shopping", shoppingCart);


// shoppingCart.push("Sugar");
// console.log("'Sugar' in the end of your shopping", shoppingCart);

// shoppingCart.splice(4,1);
// console.log("'Honey' is the removed of your shopping", shoppingCart);

// shoppingCart[3]='GreenTea'
// console.log("modify Tea to 'Green Tea'", shoppingCart);

// // In countries array check if 'India' exists in the array
// // if it exists print 'INDIA'. If it does not exist add to
// // the countries list.

// let countries = ["London","USA","CHINA","Australia"]
// console.log(countries)
// if(countries.includes("india")){
//    console.log("INDIA")
// }
// else{
//    countries.push("India")
//    console.log(countries,"India added sucessfully")
// }


// // Concatenate the following two arrays and store it
// // in a fullStack variable.


// let front = ['HTML','CSS','JS','REACT ', ] 
// let backend =['Node','Express','MongoDB']
// let mernstack=front+backend;
// console.log(mernstack);

// console.log("ARRAYs-3");

// let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // Sort the array
// console.log("Sort the array");
// ages.sort();
// console.log(ages);

// // Find the minimum and maximum age
// console.log("'minimum and maximum age'");

// let minAge = ages[0];
// let  maxAge = ages[ages.length - 1];
// console.log(minAge);
// console.log(maxAge);

// // Find the median age

// console.log("'Find the median age'");
// let midage = Math.floor(ages.length / 2);
// let med;
// if (ages.length % 2 === 0) {
//     // If the array has an even number of elements, take the average of the two middle values
//     med = (ages[midage - 1] + ages[midage]) / 2;
// } else {
//     // If the array has an odd number of elements, take the middle value
//     med = ages[midage];
// }
//  console.log(med);

 
// // Find the average age
// console.log("'Average age'");

// let sum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// var averageAge = sum / ages.length;
//  console.log(averageAge);

// // Find the range of ages
// var range = maxAge - minAge;
// console.log(range);


// // Compare (min - average) and (max - average)
// var minAverageDiff = Math.abs(minAge - averageAge);
// var maxAverageDiff = Math.abs(maxAge - averageAge);



