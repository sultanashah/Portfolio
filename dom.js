// getElementsByTagName()
// getElementsByClassName()
// getElementsById()
// querySelector()
// querySelectorAll()



let heder=document.querySelector("h1")
console.log(heder);


let paragraph=document.querySelector("p")
console.log(paragraph);




// let p1tag=document.getElementsByTagName("p")
// console.log(p1tag);

let allptags=document.querySelectorAll("p")
console.log(allptags)

let para1=document.getElementsByTagName("p")
// console.log(para1[0].textContent="This is a test");
para1[0].style.color = "blue";

let paraid=document.getElementById("pp1")
console.log(paraid);

let paraid2=document.getElementById("pp2")
console.log(paraid);
paraid2.style.color = "pink";
paraid2.style.backgroundColor ="grey";


let paraid3=document.getElementById("pp3")
console.log(paraid3);
paraid3.style.color = "browm";
paraid3.style.backgroundColor ="yellow";

let paraid4=document.getElementById("pp4")
console.log(paraid4);
paraid4.style.color = "red";
paraid4.style.borderBlock = "grey";







// Get all the p as nodeList using
// document.querySelectorAll(tagname) and by their
// tag name
let allPtags=document.querySelectorAll('p');
for (var i=0;i<allPtags.length;i++){
    console.log(allPtags[i]);
    }


    // Target the h1 element and change the color  of h1 for
    // // every 2 secs
    // var headerElement=document.querySelector('h1')
    // setInterval(()=>{headerElement.style.color='purple'},2000)



let headersec=1;
setInterval(()=>{
    let hedtag=document.querySelector("h1");
    if(headersec){
        hedtag.style.color="purple";
        headersec=0;}
        else {
            hedtag.style.color="green";
            headersec=1;}}
            ,2000);




    // let flag = 1;
    // setInterval(() => {
    //     let h1Tag = document.querySelector("h1");
    //     if (flag){
    //         h1Tag.style.color = "blue";
    //         flag = 0;
    //         } else {
    //             h1Tag.style.color = "red";
    //             flag = 1
    //             }
    //             }, 2000);




























// Create an index.html file and put four p elements
// as above: Get the first paragraph by using
// document.querySelector(tagname) and tag name.
// Print it to the console.





// Get each of the the paragraph using
// document.querySelector('#id') and by their id
// Get all the p as nodeList using




























// let chagecolor=para1.style.color = "blue";
// let chagecolor1=para1.style.textContent = "bold";




// let h1=document.querySelector('h1')
// console.log(h1);
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
