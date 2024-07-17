// ### Activity 1: Function Declaration

// Task 1:
// function evenOddChecker(number){
//     let result;
//     if (number % 2 === 0) {
//         result = "Even"
//     }
//     else{
//         result = "Odd"
//     }
//     console.log(`The number "${number}" is ${result}`);
// }

// evenOddChecker(121);


// Task 2:
// function sqrNumber(number) {
//     return (number * number);
// }

// let sqrOfNumber = sqrNumber(9);
// console.log(sqrOfNumber);


// ### Activity 2: Function Expression
// Task 3:
// const maxNum = function (num1, num2){
//     if (num1 === num2) {
//         console.log(`Both numbers are equal. The maximum number is ${num1}`);
//     }
//     else{
//         const max = (num1 > num2)? num1 : num2
//         console.log(`The maximum number is ${max}`);
//     }
// }

// maxNum(0,1)


// Task 4 :
// const stringConcat = function (str1, str2) {
//     let combinedString = str1 + str2
//     return combinedString
// }

// let resultString = stringConcat("Hello", " bro")
// console.log(resultString);


// ### Activity 3: Arrow Functions
// Task 5:
// const sumOfTwoNumbers = (num1, num2) => {
//     return (num1 + num2);
// }
// const sumNum = sumOfTwoNumbers(70,-20);
// console.log(`Sum of two numbers is: ${sumNum}`);


// Task 6:
// let checkString = (str1, checkCharacter) =>{ 
//     for (let i = 0; i < str1.length ; i++) {
//         if (checkCharacter === str1[i]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkString("Hello", "i"));


// ### Activity 4: Function Parameters and Default Values
// Task 7:
// function productNumbers(num1 , num2 = 8) {
//     return (num1 * num2);
// }

// let productIs = productNumbers(10);
// console.log(`Product of two numbers is ${productIs}`);


// Task 8:
// function selfIntro(name, age = 19) {
//     return `Good morning ${name}! today i became ${age} years OLD`
// }

// console.log(selfIntro("Raman"));