"use strict";

let textBox = document.getElementsByTagName("textarea");

let codedMsg = textBox[0].value;
let workingCopy = codedMsg.split("");
console.log(workingCopy);



let results = document.createElement("p");
let newResult = workingCopy.join('');
results.innerText = newResult;
document.body.appendChild(results);

let letterBox = document.createElement("section");
document.body.appendChild(letterBox);
let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (let i = 0; i < 26; i++) {
  let letterInput = document.createElement("div");
  letterInput.innerHTML = `${alpha[i]} -> <input type="text" id="${alpha[i]}" newletter="${alpha[i]}" onblur="letterChange(id, value)">`
  letterBox.appendChild(letterInput);

}

////// after you have removed focus on one of the letter inputs, this function happens
let letterChange = (oldLetter, newLetter) => {
  let letter = document.getElementById(oldLetter);

  if (newLetter === "" || newLetter === " ") {
    console.log("Please enter a letter");
  } else {
    console.log(codedMsg);
    
    for (let i = 0; i < codedMsg.length; i++) {
      if (codedMsg[i] === oldLetter && newLetter !== null) {
        
        // let newCopy = workingCopy.replace(oldLetter, newLetter);
        workingCopy.splice(i, 1, newLetter);
        
  
        // letter.attributes("newletter") = newLetter;
        letter.setAttribute("newletter", newLetter);
        // letter.newletter = newLetter;
        
        
        
      }
    }
    newResult = workingCopy.join('');
    results.innerText = newResult;
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

