
/***
problem-01
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
//solution
 let price= 800;
 let passengerType="student";
 let age=15;
 if(age < 10)
   price=0;
else if(age >= 60)
   price=(price*15)/100;
else if(passengerType=="student")
   price=(price*50)/100;


console.log("ticket prize : "+price)



/***
problem 02
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
 //solution
let num1=16;
let num2=14;
console.log(num1>num2 ? num1*2 : num1+num2 )


/***
problem 03
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// solution
 let score=30;
 console.log(score>=80?"lunch":
               score>=60?"good luck":
                 score>=40?"massage unseen":"block friend"
             )




/***
problem 04
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// solution
let score=91;
console.log(score>100?"not valid score" :
             score>=90 && score<=100?"A":
                score>=80?"B":
                   score>=70?"C":
                     score>=60?"D":"F"
)






/*** 
problem 05
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// solution
let weight=600;
let height=50;
let bmi=weight/height*2;
console.log(bmi>29.9?"obese":
               bmi>=25?"overweight":
                 bmi>=18.5?"normal":"underweight"
                   

)
console.log("BMI : "+bmi)


/***
problem 06
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// solution
let buy= 510;
console.log(buy>500?"free coke": "coke : 30tk")