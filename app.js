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

