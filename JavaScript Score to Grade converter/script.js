/* This is a simple script that translates your Score into a Grade */

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

1. START
2. Input score (S) -- This is the variable

3. if S >= 70 AND <= 100 
    PRINT grade A

4. else if S >= 60 AND <= 69 
    PRINT grade B

5. else if S >= 50 AND <= 59 
    PRINT grade C

6. else if S >= 45 AND <= 50 
    PRINT grade D
    
7. else if S >= 40 AND <= 44 
    PRINT grade E
    
8. else if S >= 0 AND <= 39 
    PRINT grade F

9. else if S > 100 
    PRINT Invalid score, Inputed value is above 100 
    
10. else if S < 0 
    PRINT Invalid score, Inputed value is less than 0 
    
11. else
    PRINT Error! Check inputed value    

12. END    

*/

//CODE
function GradeConverter(score) {

    // Check if the score is valid (between 0 and 100)
    if (score > 100) { //In this case it is best and more efficient to check validity of Value first before grading it
        console.log("Invalid score, Inputed value is above 100");
    } else if (score < 0) {
        console.log("Invalid score, Inputed value is less than 0");
    } else if (score >= 70) {
        console.log("Grade: A");
        console.log("Remark: Excellent");
    } else if (score >= 60) {
        console.log("Grade: B");
        console.log("Remark: Good");
    } else if (score >= 50) {
        console.log("Grade: C");
        console.log("Remark: Average");
    } else if (score >= 45) {
        console.log("Grade: D");
        console.log("Remark: Moderate");
    } else if (score >= 40) {
        console.log("Grade: E");
        console.log("Remark: Pass");
    } else if (score < 40) {
        console.log("Grade: F");
        console.log("Remark: Fail");
    } else {
        console.log("Error! Check Inputed Value");
    }
};

// GradeConverter(67);


/* BUT now Let's go a bit further not every score will be out of a 100. Let's say it's over 60 then we have to consider an overall, so the script below will use PERCENTAGE to assign a grade and remark.

   Formula for percentage = (score / overall) * 100

The same algorithm applies, just consider values as percentages 
   A: 100% - 70%
   B: 69% - 60%
   C: 59% - 50%
   D: 50% - 45%
   E: 44% - 40%
   F: 39% - 0%


//New Algorithm
1. START

2. Input Score (S)

3. Input overall (O)

4. Input score in percentage (S%)
    i.e S% = (S / O) * 100

5. Input score (S) -- This is the variable

6. if S% >= 70 AND <= 100 
    PRINT grade A

7. else if S% >= 60 AND <= 69 
    PRINT grade B

8. else if S% >= 50 AND <= 59 
    PRINT grade C

9. else if S% >= 45 AND <= 50 
    PRINT grade D

10. else if S% >= 40 AND <= 44 
    PRINT grade E

11. else if S% >= 0 AND <= 39 
    PRINT grade F

12. else if S > O 
    PRINT Error! The score you input is above your overall 

13. else If S < 0 AND S < O
    PRINT Error! The score you input is less than your overall 

14. else
    PRINT Error! Check inputed value    

15. END
*/

// Using percentage-based grading
function ScoreConverterPercentage(score, overall) {

    // Calculate the score in percentage
    let score_in_percentage = (score / overall) * 100;

    // Validate the input
    if (score > overall) {
        console.log("Error! The score you input is above your overall.");
    } else if (score < 0 || overall <= 0) {
        console.log("Error! Invalid input. Ensure the score and overall are greater than 0.");
    } else if (score_in_percentage >= 70) {
        console.log("Grade: A");
        console.log("Remark: Excellent");
    } else if (score_in_percentage >= 60) {
        console.log("Grade: B");
        console.log("Remark: Good");
    } else if (score_in_percentage >= 50) {
        console.log("Grade: C");
        console.log("Remark: Average");
    } else if (score_in_percentage >= 45) {
        console.log("Grade: D");
        console.log("Remark: Moderate");
    } else if (score_in_percentage >= 40) {
        console.log("Grade: E");
        console.log("Remark: Pass");
    } else if (score_in_percentage >= 0) {
        console.log("Grade: F");
        console.log("Remark: Fail");
    } else {
        console.log("Error! Invalid score or overall input.");
    }
};

// Call ScoreConverterPercentage() with sample inputs
ScoreConverterPercentage(10, 30);

//CONCLUSION
/* That's it yes its a very small script but its's also very useful script, i just wanted to do something while i was learning Javascript i might implement this on my e-School Project which can be found on my Github "https://github.com/Chris-Error-404" hope i keep scaling up my projects and continue making them undertandable for everyone

I would have used JS HTML DOM to get user input directly from the browser but that's besides the point
Might create a CODEPEN and a Youtube Channel */



