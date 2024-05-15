//Solution
// starting with the name of the function 
function calculateGrade(marks){
    //conditions for the grading system
    if(marks > 79){
        return 'A'
    }else if(marks >= 60 && marks <=79){
        return 'B'
    }else if(marks >=49 && marks <=59){
        return 'C' 
    } else if(marks >= 40 && marks <=49){
        return 'D'
    } else if(marks < 40){
        return 'E';
    }
    
}
//required conditions from the user
const studentMarks = prompt('Enter student marks (btwnn 0 and 100):' );
if(!isNaN(studentMarks) && studentMarks <=100 && studentMarks >=0){
    //calling the function above 
    const grade = calculateGrade (studentMarks)
    console.log(grade)
}
else{
    console.log('invalid input, please input a numbber between 0 and 100')
}
