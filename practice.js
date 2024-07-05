
//4.run the question using choice of user
console.log("question no 1.get user to a input a number using prompt Enter a numbert.check if it is divisible by 5 or not.");
console.log("Question no. 2. JS code which can give you grades to students according to their score. ");
console.log("Question 3.sum of first 15 numbers");
console.log("Question no. 4.Create a game where you start witha ny random game number. Ask the user to keep guessing until the correvt guess");
console.log("Question n. 5. generate a username as per input entered");
console.log("Question no. 6. for a given array of marks find the average");
console.log("Question no 7. 10% off on a given arrayt . now store the new values after applying offer");
console.log("Ques No. 8. take a string as input and return the number of vowels using function.. also do the same task using arrow function");
console.log("Question number 9. Print the square of each element in an array using forEach loop");





let question=parseInt(prompt("Enter the numbre of question you want to run"));
switch(question){
case 1:
    {
let number=prompt("Enter a number");
number%5==0?console.log(number,"is multiple of 5"):console.log(number, "is not divisible ny 5");
    }
    break;
case 2:
    {
let num= prompt("Enter your marks:");
if(num>91 && num<=100)
    {
        console.log("Your Grade is O");
    }
else if(num>81 && num<=90)
    {
        console.log("Your Grade is E");
    }
else if(num>71 && num<=80)
    {
        console.log("Your Grade is A");
    }
else if(num>61 && num<=70)
    {
        console.log("Your Grade is B");
    }
else
 console.log("You have failed");
    }
    break;
case 3:
    {
        
        let sum =0;
        let number = parseInt(prompt("Enter the number to print the addition"));
        for(let i= 0;i<number; i++)
            {
                sum=sum+i;
            }
            console.log("Addition of first 15  number is",sum);
    }
    break;
    case 4:
        {
            let gameNum=25;
            let userNum=parseInt(prompt("guess the number in the game"));
            while(gameNum!=userNum)
                {
                    prompt("You entered wrong guess again");
                }
            console.log("Congo, You entered correct guess");
        }
        break;
case 5:
   let str=prompt("Enetr your fulll name");
   console.log("your username is @",str,str.len());
   break;
case 6:
    {
        let marks=[85,97,34,76,60];
        let sum=0;
        for(let i=0;i< marks.length;i++)
            {
                sum=sum+marks[i];
            }
            let avg=sum/marks.length;
            console.log('The avg marks of the student is',avg);
    }
    break;
case 7:
    {
        items=[250,645,300,900,50];
        for(let i =0; i<items.length;i++)
            {
                let offer = items[i]/10;
                items[i]=items[i]-offer;
            }
            console.log(" after Applying 10% off on each itemn the va;lue of items is",items);
    }
    break;
case 8:
    {
        function vowel(str)
        {
            sum=0;
            for(let i of str)
                {
                    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
                        {
                            sum=sum+1;
                        }
                }
                return sum;
        }
        let string=prompt("Enter a string");
        console.log("The no. of vowels are ",vowel(string));
    }
    break;
case 9:
    {
        let nums=[2,5,7,9];
        nums.forEach(element => {
            console.log("The square  of 2,5,7,9 is",element*element);
            
        });
    }
break;
default:
    console.log("Your question number is not valid");
}