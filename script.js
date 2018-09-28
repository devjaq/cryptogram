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
  letterInput.innerHTML = `${alpha[i]} -> <input autocomplete="off" maxlength="1" type="text" id="${alpha[i]}" newletter="${alpha[i]}" onfocus="highlight(id, value)" onblur="letterChange(id, value)">`
  letterBox.appendChild(letterInput);

}

////// after you have removed focus on one of the letter inputs, this function happens
let letterChange = (oldLetter, newLetter) => {
  let letter = document.getElementById(oldLetter);

  // if (newLetter === "" || newLetter === " ") {
  //   console.log("Please enter a letter");
  //   workingCopy.splice(i, 1, oldLetter);
  //   letter.setAttribute("newletter", oldLetter);
  //   newResult = workingCopy.join('');
  //   results.innerText = newResult;
  // } else {
    // console.log(codedMsg);
    
    for (let i = 0; i < codedMsg.length; i++) {
      if (codedMsg[i] === oldLetter && newLetter !== null && newLetter !== "" && newLetter !== " ") {
        console.log(newLetter);
        
        
        // let newCopy = workingCopy.replace(oldLetter, newLetter);
        workingCopy.splice(i, 1, newLetter);
        letter.setAttribute("newletter", newLetter);
      } else if (codedMsg[i] === oldLetter && newLetter === null || codedMsg[i] === oldLetter && newLetter === "" || codedMsg[i] === oldLetter && newLetter === " ") {
        workingCopy.splice(i, 1, oldLetter);
        letter.setAttribute("newletter", oldLetter);
      }
    }
    newResult = workingCopy.join('');
    results.innerText = newResult;
  // }
  
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

////// function to highlight letters on focus

// 1. click in the box
let highlight = (oldLetter, newLetter) => {
  console.log("test");

  for (let i = 0; i < codedMsg.length; i++) {
    if (codedMsg[i] === oldLetter) {
      // codedMsg[i].style = "color = blue";
      // codedMsg[i].insertAdjacentElement("beforebegin","span")
    }


  }

}

// 2. find the letter

// 3. change bg of letter

// 4 on blur, remove bckground

