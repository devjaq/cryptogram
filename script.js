"use strict";

let editScreen = document.getElementById("edit-screen");
let textBox = document.getElementsByTagName("textarea");

let codedMsg = textBox[0].value;
let workingCopy = codedMsg.split("");



let results = document.createElement("p");
let newResult = workingCopy;

////// create a results display with special style for each character

for (let i = 0; i < workingCopy.length; i++) {
  if (workingCopy[i] === "," || workingCopy[i] === " " || workingCopy[i] === "." || workingCopy[i] === "!" || workingCopy[i] === "?") {

  } else {
    newResult[i] = `<span class="unknown ${workingCopy[i]}">${workingCopy[i]}</span>`
  }
}

newResult = newResult.join('');
results.innerHTML = newResult;
document.body.appendChild(results);

////// function to update results display

let updateResults = () => {
  newResult = workingCopy;
  newResult = newResult.join('');
  results.innerHTML = newResult;
}

let editMsg = () => {
  editScreen.style.display = "flex";

}

let editButton = document.createElement("button");
editButton.type = "button";
editButton.setAttribute("onclick", "editMsg()");
editButton.innerText = "Edit";
document.body.appendChild(editButton);

let letterBox = document.createElement("section");
document.body.appendChild(letterBox);
let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (let i = 0; i < 26; i++) {
  let letterInput = document.createElement("div");
  letterInput.innerHTML = `${alpha[i]} -> <input autocomplete="off" maxlength="1" type="text" id="${alpha[i]}" newletter="${alpha[i]}" onfocus="highlight(id, value)" onblur="letterChange(id, value)">`
  letterBox.appendChild(letterInput);

}

////// after you have removed focus on one of the letter input fields, this function happens
let letterChange = (oldLetter, newLetter) => {
  let letter = document.getElementById(oldLetter);
    
    for (let i = 0; i < codedMsg.length; i++) {
      if (codedMsg[i] === oldLetter && newLetter !== null && newLetter !== "" && newLetter !== " ") {
        workingCopy.splice(i, 1, newLetter);
        letter.setAttribute("newletter", newLetter);
      } else if (codedMsg[i] === oldLetter && newLetter === null || codedMsg[i] === oldLetter && newLetter === "" || codedMsg[i] === oldLetter && newLetter === " ") {
        workingCopy.splice(i, 1, oldLetter);
        letter.setAttribute("newletter", oldLetter);
      }
    }
    updateResults();
}



function buttonClick() {
  editScreen.style.display = "none";
  codedMsg = textBox[0].value;
  workingCopy = codedMsg.split("");
  updateResults();
  let counter = 1;
  // console.log(textBox);
  // console.log(textBox[0].value);
  // let word = [];
  // let fullText = [];
  // let workingCopy = [];

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
  // console.log("test");

  for (let i = 0; i < codedMsg.length; i++) {
    if (codedMsg[i] === oldLetter) {
      console.log("match");
      
      // codedMsg[i].style = "color = blue";
      // codedMsg[i].insertAdjacentElement("beforebegin","span")
    }


  }

}

// 2. find the letter

// 3. change bg of letter

// 4 on blur, remove bckground

