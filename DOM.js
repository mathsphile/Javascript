let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
// let class=div.getAttribute("class");
// console.log(class);
console.log(div.getAttribute("name"));
let para=document.querySelector("p");
console.log(para);
console.log(para.getAttribute("class"));
para.setAttribute("class","newClass");
let el=document.createElement("button");
el.innerHTML="<button>Click Me!</button>";
el.style.backgroundColor="red";
el.style.color="white";
document.querySelector("body").prepend(el);