// Direct way of creating object
const student={
    Name:"Nandini",
    Marks:98,
    favourite:"Maths",
    printMarks:function(){
        console.log("Your marks is",this.Marks);
    },
};

// Prototype 
const new_student={
    school:"DVAS",
  fuction()  {console.log("The school name is",this.school);
  },
  favourite:"English",  //own property will be prioritize
};
new_student.__proto__=student;  //synchronise the property of student object

//Creating class
class College
{
    constructor()
    {
        console.log("Creating new object");  // the constructor method will be prosecuted first
    }
    name()
    {
        console.log("FIEM");
    }
    address()
    {
        console.log("Sonarpur");
    }
    affiliation()
    {
        console.log("Makaut");
    }
}
let CSE=new College();    // let for variable , new is keyword to create object under class
// let CSE={
//     section:3,   //cannont redeclare 
// };

// Inheritence
class person{
    constructor(name)
    {
        this.name=name;
        console.log("I am a human being");
    }
work()
{
    console.log("I can work");
}
eat()
{
    console.log("I can eat");
}
}
 class engineer extends person{
    constructor(name)
    {
        super(name); // calls the parent class's constructor
        console.log("I am Btech Student");
    }
    work()
    {
        console.log("problem solving");
    }
 }
 class doctor extends person
{
    constructor(name)
    {
        super(name);   // calls the parent class's constructor
        console.log("I did MBBS");    //in console box if you want to print classNmae.method() without creatingf object it will not going to run
    }
    work()
    {
        console.log("Treating patient");
    }
   
 }
let engObj=new engineer("Nandini");
let personObj=new person("Raj");
let docObj=new doctor("Dipayan");

// Practice question
// create a website for your college where class is User there will be two properties name and email with one method called viewdata() that allows user to view website data
 //create a new class called  admin and it will inherits the data from User and add new method editData thta allows them to edit the User data.
 let DATA=console.log("This is confidential");
    class User{
    constructor(name,email)
    {
        this.Name=name;
        this.Email=email;
    }
    viewData()
    {
        console.log("Your websit data is",DATA);
    }
 }
 class Admin extends User{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        DATA=console.log("Edited Data");
    }
 }
 let stud1=new User("Nandini","ndas20997@gmail.com");
 let stud2=new User("Indra","ari@gmail.com");
 let stud3=new User("Raj","raj@gmail.com");
 let admin1=new Admin("Admin1","admin@gmail.com");

 // Error Handling 
  a=15;
 b=10;
 console.log("a+b",a+b);
 console.log("a-b",a-b)
try{
   
     console.log("a*b",a*c);   // the next line after encountoring error will execute
   
}
catch(err)
{
    console.log(err);
}
   console.log("a/b",a/b);