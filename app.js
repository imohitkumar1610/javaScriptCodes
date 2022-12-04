// const btn1 = document.querySelector('.btn1');

// function clickbtn (){
//     btn1.innerHTML = 'clicked';
// };
// btn1.addEventListener("click",clickbtn);

// const btn1 = document.querySelector('.btn1');
// console.log(btn1);

// function clickbtn() {
// btn1.innerHTML = 'clicked';
// // alert("i am an engineer");
// };
// btn1.addEventListener("click",clickbtn);

// let firstBatch = 5;
// let secondbatch = 7;
// let count = firstBatch + secondbatch;
// console.log(count);

// let num = 25;
// for(let i = 1;i<=num;i++){
//     console.log(i);
// }


const btn1 = document.querySelector('#btn1');
const box = document.querySelector('.box');
count = 0;

function increment(){
    count+=1;
    box.innerHTML = count;

// innerText returns all text contained by an element and all its  child elements. innerHtml returns all text, including html tags, that is contained by an element.

//     console.log(count);
    
};
// btn1.addEventListener("click",increment);

const btnSave = document.querySelector('.btn-save');
 function save(){
    console.log(count)
 }

// function countdown(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     console.log(6);
// }
// countdown();


// let lapsComplete = 0;

// function incrementLap(){
//     lapsComplete += 1;
// }
// incrementLap();
// console.log(lapsComplete);

// incrementLap();
// console.log(lapsComplete);

//everytime you envoke the function lapcount got increased by 1

//strings

// let userName = "mohit";
// let message = `you are doing good" but you can do better`;

// console.log(userName+message);
//string concatination

//sum function 
// let a = prompt("give a number");
 // number we tak ein inout is in the string format
// a = Number.parseInt(a); 
//converting string to integer
// let b = prompt("git another number");
// b = Number.parseInt(b);

// function sum(x,y){
//     let c = a+b;
//     return c; 
// }
//another way of declaring a function called arrow function
// const sum = (x,y) => {
//     let c = a+b;
//     return c; 
// }
// console.log(sum(a,b));
// console.log(sum(a,b));


// objects in javascript

// const student = {
//     "harry" : 54,
//     "shubham": 65,
//     "mohit": 99
// }

// console.log(student);

// for(let i = 0; i<Object.keys(student).length;i++){
//     console.log("the marks of "+ Object.keys(student)[i]+" are " + student[Object.keys(student)[i]]);
// }
// console.log(student[Object.keys(student)[2]])

//using for-in loop

// for (const key in student) {
//         console.log("marks of "+key+" are "+student[key]);
//     }

//arrays in javascript
const name = ["mohit","shubham",54,454,65,null];
const name2 = [2,1,2,3,5]
// for(let i = 0; i<name.length;i++){
//     console.log(name[i]);
// }
// let newArray = name.concat(name2);
// console.log(newArray);
// newArray.concat("yes");
//doenot work with array and string
// console.log(newArray);

//sort() function
// this way you can arrange th enumbers in the accending or in the decending order
//  const compare = (a,b) => {
//     return a-b;
//  }
// name2.sort(compare);

// console.log(name2);

// splice() function in js 
// const num = [1,2,3,4,5,6,7,8,9];
//  num.splice(2,2,1222,1333,1444,1555);
//  console.log(num)