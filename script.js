"use strict";

let editScreen = document.getElementById("edit-screen");
let textBox = document.getElementsByTagName("textarea");
let codedMsg = textBox[0].value;
let workingCopy = codedMsg.split("");
let newResult = null;

////// create a results display with special style for each character
let results = document.createElement("p");

let updateMsg = () => {
newResult = workingCopy;

for (let i = 0; i < workingCopy.length; i++) {
  if (workingCopy[i] === "," || workingCopy[i] === " " || workingCopy[i] === "." || workingCopy[i] === "!" || workingCopy[i] === "?") {

  } else {
    newResult[i] = `<span class="unknown ${workingCopy[i]}">${workingCopy[i]}</span>`
  }

  // if (newResult[i].getAttribute("unknown") === true) {
    // console.log(newResult[i]);
    // console.log(newResult[i].classList);
    
    // newResult[i].classList.add("unknown");
  // }

}

newResult = newResult.join('');
results.innerHTML = newResult;
let span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
  if (newResult[i].getAttribute("unknown") === true) {
    newResult[i].classList.add("unknown");
  }
}

}
updateMsg();
document.body.appendChild(results);

////// function to update results display

let updateLetter = () => {
  newResult = workingCopy;

  for (let i = 0; i < workingCopy.length; i++) {
    let span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
  if (newResult[i].getAttribute("unknown") === true) {
    newResult[i].classList.add("unknown");
  }
}
    // if (workingCopy[i] === "," || workingCopy[i] === " " || workingCopy[i] === "." || workingCopy[i] === "!" || workingCopy[i] === "?") {
  
    // } else {
    //   newResult[i] = `<span class="unknown ${workingCopy[i]}">${workingCopy[i]}</span>`
    // }
  }

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

////// create area to input new letters
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

  let active = document.getElementsByClassName(oldLetter);
  for (let i = 0; i < active.length; i++) {
    // console.log(active[i].classList);
    active[i].classList.remove("active");
  }

  let letter = document.getElementById(oldLetter);
    
    for (let i = 0; i < codedMsg.length; i++) {
      if (codedMsg[i] === oldLetter && newLetter !== null && newLetter !== "" && newLetter !== " ") {
        workingCopy.splice(i, 1, newLetter);
        letter.setAttribute("newletter", newLetter);
      } else if (codedMsg[i] === oldLetter && newLetter === null || codedMsg[i] === oldLetter && newLetter === "" || codedMsg[i] === oldLetter && newLetter === " ") {
        workingCopy.splice(i, 1, oldLetter);
        letter.setAttribute("newletter", oldLetter);
        letter.setAttribute("unknown", true);
      }
    }
    // updateResults();
    updateLetter();
}



function buttonClick() {
  editScreen.style.display = "none";
  codedMsg = textBox[0].value;
  workingCopy = codedMsg.split("");
  newResult = workingCopy;

  for (let i = 0; i < workingCopy.length; i++) {
    if (workingCopy[i] === "," || workingCopy[i] === " " || workingCopy[i] === "." || workingCopy[i] === "!" || workingCopy[i] === "?") {
  
    } else {
      newResult[i] = `<span class="unknown ${workingCopy[i]}">${workingCopy[i]}</span>`
    }
  }

  newResult = newResult.join('');
  results.innerHTML = newResult;
  // updateResults();
  let counter = 1;
  // let word = [];
  // let fullText = [];
  // let workingCopy = [];

///////// BELOW is for breaking words into arrays
// for (let i = 0; i < codedMsg.length; i++) {
//   // if (i === 1) {
    
//   // }
  
//   if (codedMsg[i] === " ") {
//     fullText.push(word);
//     word = [];
//   } else if (i === codedMsg.length-1) {
//     word.push(codedMsg[i]);
//     fullText.push(word);
//     word = [];
//   } else {
//     word.push(codedMsg[i]);
//   }
  
// }
};

////// function to highlight letters on focus

// 1. click in the box
let highlight = (oldLetter, newLetter) => {

  // 2. find the letter
  for (let i = 0; i < codedMsg.length; i++) {
    if (codedMsg[i] === oldLetter) {
      // console.log("match");
      // 3. change the letter
      console.log(workingCopy[i]);
      
      
    }
  }
  let active = document.getElementsByClassName(oldLetter);
  console.log(active);
  for (let i = 0; i < active.length; i++) {
    // console.log(active[i].classList);
    active[i].classList.add("active");
  }
}




