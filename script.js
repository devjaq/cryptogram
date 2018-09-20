"use strict";

let textBox = document.getElementsByTagName("textarea");

function buttonClick() {
  let counter = 1;
  // console.log(textBox);
console.log(textBox[0].value);
let codedMsg = textBox[0].value;
let word = [];
let fullText = [];
for (let i = 0; i < codedMsg.length; i++) {
  // console.log( codedMsg.length);
  // console.log(i);
  // if (i === 1) {
    
  // }
  
  if (codedMsg[i] === " ") {
    console.log("space");
    console.log(`Start word ${counter += 1}`);
    fullText.push(word);
    word = [];
  } else if (i === codedMsg.length-1) {
    console.log(codedMsg[i]);
    word.push(codedMsg[i]);
    console.log(word);
    console.log("end reached");
    fullText.push(word);
    word = [];
  } else {
    console.log(codedMsg[i]);
    word.push(codedMsg[i]);
    console.log(word);
  }
  
}
console.log(fullText);


};

