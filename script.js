"use strict";

let textBox = document.getElementsByTagName("textarea");

let letterA = document.getElementById("a");
// let letterA = document.getElementsByTagName("input");
console.log(letterA);

let fullText = "";
// let workingCopy = "";
let codedMsg = textBox[0].value;
let workingCopy = textBox[0].value;

let results = document.createElement("p");
results.innerText = workingCopy;
document.body.appendChild(results);

let letterChange = (oldLetter, newLetter) => {
  console.log(oldLetter);
  console.log(newLetter);
  
  
  for (let i = 0; i < codedMsg.length; i++) {
    if (codedMsg[i] === oldLetter) {
      console.log(i);
      console.log(workingCopy[i]);
      
      let newCopy = workingCopy.replace(/a/g, newLetter);
      console.log(newCopy);
      workingCopy = newCopy;
      console.log(workingCopy);
      results.innerText = workingCopy;
      
    }
  }
}

function buttonClick() {
  let counter = 1;
  // console.log(textBox);
  // console.log(textBox[0].value);
  // let word = [];
  // let fullText = [];
  // let workingCopy = [];
  console.log(codedMsg);
  console.log(workingCopy);


  




///////// BELOW is for breaking words into arrays
// for (let i = 0; i < codedMsg.length; i++) {
//   // console.log( codedMsg.length);
//   // console.log(i);
//   // if (i === 1) {
    
//   // }
  
//   if (codedMsg[i] === " ") {
//     console.log("space");
//     console.log(`Start word ${counter += 1}`);
//     fullText.push(word);
//     word = [];
//   } else if (i === codedMsg.length-1) {
//     // console.log(codedMsg[i]);
//     word.push(codedMsg[i]);
//     console.log(word);
//     console.log("end reached");
//     fullText.push(word);
//     word = [];
//   } else {
//     // console.log(codedMsg[i]);
//     word.push(codedMsg[i]);
//     console.log(word);
//   }
  
// }
// console.log(fullText);


};

