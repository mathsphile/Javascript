// Async in Js
//Selecting a timeout with passing dealay of time
// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,4000); //time delay in ms
// setTimeout(()=>
// {
//     console.log("Hi");

// },2000);
// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("DVAS"); //DVAs will be printed after 4s.
// },4000);
// console.log("3");
// console.log("4");
//Callback Hell i.e. when there is nested callback
// function getData(dataId,NextData)
// {
//     setTimeout(()=>
//     {
//         console.log("Data",dataId);
//     if(NextData)
//     {
//         NextData();
//     }
//     },4000);
// }
// //Calling the function
// getData(1,()=>
// {
//     getData(2,()=>{
//         getData(3,()=>
//         {
//             getData(4,()=>{
//                 getData(5);
//             });
//         });
//     });
// });

// To overcome the problem of nested callback promises is introduced
// let promise= new Promise((resolve,reject)=>{
//     console.log("I am a promise");  //if print promise then the state will show pending
//     resolve(123);   //. after using resolve the state is now fulfilled
// });
// let promised=new Promise((resolve,reject)=>
// {
//     console.log("This is new promoise")
//     reject("Some error occured");
// });


