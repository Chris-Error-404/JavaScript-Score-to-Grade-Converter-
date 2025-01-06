/* This is a simple script that transaltes your Score into a Grade

/* This is how grade ranges work in Nigerian Universities
ACCORDING TO slideplayer.com 

A: 100 - 70
B: 69 - 60
C: 59 - 50
D: 50 - 45
E: 44 - 40
F: 39 - 0
*/

/* ALGORITHM 

1; START
2; Input score (S) -- This is the variable

3; if S >= 70 AND <= 100 
    PRINT grade A

4; else if S >= 60 AND <= 69 
    PRINT grade B

5; else if S >= 50 AND <= 59 
    PRINT grade C

6; else if S >= 45  AND <= 50 
    PRINT grade D
    
7; else if S >= 40 AND <= 44 
    PRINT grade E
    
8; else if S >= 0 AND <= 39 
    PRINT grade F

9; else if S >= 100 
    PRINT Invalid score, Inputed value is above 100 
    
10; else If S <= 0 
    PRINT Invalid score, Inputed value is less than 0 
    
11; else
    PRINT Error! Check inputed value    

11; END    

 */


//CODE
function GradeConverter(score){

    if( score >= 70 && score <= 100)
    {
        console.log("Grade: A")
        console.log("Remark: Excellent")
    }

    else if( score >= 60 && score <= 69){
        console.log("Grade: B")
        console.log("Remark: Good")
    }

    else if( score >= 50 && score <= 59){
        console.log("Grade: C")
        console.log("Remark: Average")
    }

    else if( score >= 45 && score <= 50){
        console.log("Grade: D")
        console.log("Remark: Moderate")
    }

    else if( score >= 40 && score <= 44){
        console.log("Grade: E")
        console.log("Remark: Pass")
    }

    else if( score >= 0 && score <= 39){
        console.log("Grade: F")
        console.log("Remark: Fail")
    }

    else if( score > 100){
        console.log("Invalid score, Inputed value is above 100")
    }

    else if( score < 100){
        console.log(" Invalid score, Inputed value is less than 0")
    }

    else{
        console.log("Error! Check Inputed Value")
    }; 
};

//Least likely condition is the last to avoid checking it first and wasting time 


// GradeConverter()  
// Remove comment "//" to call the function
//And input score in the argument e.g (67)



//NOTE
/* I don't know how efficient this code is because of the number of conditions to check i would have used a switch case since i read somewhere they are more optimized and faster than if statements but the work about for the use of conditions is too long 

e.g

const x = 85;
const range;

if (x <= 90) {
  range = "low";
} else if (x > 90 && x <= 100) {
  range = "mid";
} else {
  range = "high";
}

switch (range) {
  case "low":
    console.log("x is less than or equal to 90");
    break;
  case "mid":
    console.log("x is between 91 and 100");
    break;
  case "high":
    console.log("x is greater than 100");
    break;
}

Hence there will be twice the amount of conditions to be checked 
*/



/* BUT now Let's go a bit further not every score will be out of a 100. lets say its over 60 then we have to consider an overall so the script below will use PERCENTAGE to assign a grade and remark 

This will all become Percentages
A: 100% - 70%
B: 69% - 60%
C: 59% - 50%
D: 50% - 45%
E: 44% - 40%
F: 39% - 0%

Formula for percentage = score/overall * 100/1

SAME ALGORITHM APPLIES just consider values as percentage and change first steps

1; START
2; input Score (S)
3; input overall (O)
4; input score in percentage (S%)

4; input formula for percentage and store in S%
    i.e
    S% = (S / O) * 100

5; Input score (S) -- This is the variable

6; if S >= 70 AND <= 100 
    PRINT grade A

7; else if S >= 60 AND <= 69 
    PRINT grade B

8; else if S >= 50 AND <= 59 
    PRINT grade C

9; else if S >= 45  AND <= 50 
    PRINT grade D
    
10; else if S >= 40 AND <= 44 
    PRINT grade E

11; else if S >= 0 AND <= 39 
    PRINT grade F

12; else if S > O 
    PRINT Error! The score you inputed in above ypur overall 
    
13; else If S < 0 AND S < O
    PRINT Error! The score you inputed in less than your overall" 
    
14; else
    PRINT Error! Check inputed value    

15; END        
*/



//We are still using score because it is a local variable

function ScoreConverterPercentage(score,overall){

score_in_percentage = (score / overall) * 100

    if( score_in_percentage >= 70 && score_in_percentage <= 100)
    {
        console.log("Grade: A")
        console.log("Remark: Excellent")
    }

    else if( score_in_percentage >= 60 && score_in_percentage <= 69){
        console.log("Grade: B")
        console.log("Remark: Good")
    }

    else if( score_in_percentage >= 50 && score_in_percentage <= 59){
        console.log("Grade: C")
        console.log("Remark: Average")
    }

    else if( score_in_percentage >= 45 && score_in_percentage <= 50){
        console.log("Grade: D")
        console.log("Remark: Moderate")
    }

    else if( score_in_percentage >= 40 && score_in_percentage <= 44){
        console.log("Grade: E")
        console.log("Remark: Pass")
    }

    else if( score_in_percentage >= 0 && score_in_percentage <= 39){
        console.log("Grade: F")
        console.log("Remark: Fail")
    }

    else if(score > overall){
        console.log("Error! The score you inputed in above ypur overall")
    }

    else if(score <  overall && score1 < 0){
        console.log("Error! The score you inputed in less than your overall")
    }

    else{
        console.log("Error! Check Inputed Value")
    };
};

// ScoreConverterPercentage(70,80)
// Remove comment "//" to call the function
/* And input score and overall i.e (score, overall) 
    e.g (70,80)  */

/*Or you can put it in an Output variable i.e 
const output = ScoreConverterPercentage();



//CONCLUSION
/* That's it yes its a very small script but its's also very useful script, i just wanted to do something while i was learning Javascript i might implement this on my e-School Project which can be found on my Github "https://github.com/Chris-Error-404" hope i keep scaling up my projects and continue making them undertandable for everyone

I would have used JS HTML DOM to get user input directly from the browser but that's besides the point
Might create a CODEPEN and a Youtube Channel */



