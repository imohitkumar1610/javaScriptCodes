console.log("fetchApi.js");

// function getData(){
//     console.log("started getData");
//     url = "mohit.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
// }


function getData(){
    console.log("started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("inside first then")
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}
console.log("before running getData");
getData();
console.log("after running getdata");