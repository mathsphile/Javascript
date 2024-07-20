const url="https://cat-fact.herokuapp.com/facts";
let para=document.querySelector("#fact");
let btn=document.querySelector("#btn");


const getFacts=async()=>{
    console.log("Fetching Data..");
    let response=await fetch(url);  //it returns a promise
    console.log(response);
    let data= await response.json(); //.json() make the file readable
    para.innerText=data[3].text;
};
btn.addEventListener("click",getFacts);

