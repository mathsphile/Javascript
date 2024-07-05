function print(msg)
{
    console.log(msg);
}
print("Js is as like c"); 
// summation of two number using function
function sum(a,b)
{
    return a+b;
}
let m=parseInt(prompt("Enter a numer"));
let n=parseInt(prompt("Enter second number"));
let result=sum(m,n);
console.log("The summation of two numbers are ",result);

// arrow sum function
const arrowSum=(a,b)=>
    {
        console.log(a+b);
    };
arrowSum(6,7);


// Arrow multiplication function
const mult=(n,m)=>
    {
        return m*n;
    }
console.log("The multiplication of  7 and 8 is",mult(7,8));

// map function
let eel=[1,2,3,67,9];
let new_arr=eel.map((val)=>
{
    return val;

})
console.log("New array becomes using map function",new_arr);

// filter function
let int=[1,3,5,8,,5,4];
let newArr= int.filter((val)=>
{
    return(val%2===0);

})
console.log("the new array of even number becomes",newArr);

// Reduce FFunction
let arr1=[2,5,7,78,3];
const output= arr1.reduce((prev,curr)=>      // prev  store the initial value and curr stoeres the next value by default
{
    return prev+curr;
});
console.log("The sum of all numbers is",output);

// finding the largest number from an Array using reduce function
let arr2=[2,5,7,78,3];
const output1= arr2.reduce((prev,curr)=>      // prev  store the initial value and curr stoeres the next value by default
{
    return prev>curr?prev:curr;
});
console.log("The largest number from  all numbers is",output1);