//for of loop   use for string and array
let str= " I can do it";
let size=0;
for( let i of str )
    {
        console.log("i=",i);
        size ++;
    }

    // loop in  used in case of objecta nd also array
    let student={
        name:"Rahul",
        dept: "CSE",
        roll:121,
        cgpa:8.37,
        issPass: true,
    };
    for(let i in student)
        {
            console.log(i); // print the keys only like name, dept,roll,cgpa etc
        }
    for(let key in student)
        {
            console.log("keys=",key ,"values=",student[key])
        }