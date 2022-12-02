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


const btn1 = document.querySelector('.btn1');
const box = document.querySelector('.box');
count = 0;

function increment(){
    count+=1;
    box.innerHTML = count;
};
btn1.addEventListener("click",increment);



