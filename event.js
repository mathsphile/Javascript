//  Event Handling using event object method
//  let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>
// {
//     console.log("Button is clicked");
//     console.log(evt.type);
//      console.log(evt.target);
//       console.log(evt.clientX,evt.clientY);

// };
let btn2=document.querySelector("#btn2");
btn2.ondblclick=(evt)=>
{
    console.log("You clicked twice");
    console.log(evt.type);
     console.log(evt.target);
      console.log(evt.clientX,evt.clientY);
};
let div=document.querySelector("div");
div.onmouseover=(evt)=>
{
    console.log("You are inside the div tag");
    console.log(evt.type);
     console.log(evt.target);
      console.log(evt.clientX,evt.clientY);
};
// Event handling using event listener
const handler4=()=>
{
    console.log("You clicked on handler 4");
}
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>
{
    console.log("You clicked on handler 1");
});
btn1.addEventListener("click",()=>
{
    console.log("You clicked on handler 2");
});
btn1.addEventListener("click",()=>
{
    console.log("You clicked on handler 3");
});
btn1.addEventListener("click",handler4);
btn1.removeEventListener("click",handler4);
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>
{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
    }
    console.log(currMode);
});


