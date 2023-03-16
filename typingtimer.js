
//setup before functions
let typingTimer;                //timer identifier
let doneTypingInterval = 500;  //time in ms (1/2 second)
let myInput = document.getElementById('primary-input');

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//setup before functions
let typingTimer2;                //timer identifier
let doneTypingInterval2 = 500;  //time in ms (1/2 second)
let myInput2 = document.getElementById('secondary-input');

//on keyup, start the countdown
myInput2.addEventListener('keyup', () => {
    clearTimeout(typingTimer2);
    if (myInput2.value) {
        typingTimer2 = setTimeout(doneTyping2, doneTypingInterval2);
    }
});

function doneTyping2 () {
  async function userAction2() {
    const response = await fetch(`https://translation.jacebapps.com/${lang2}/${lang1}?content=${document.getElementById('secondary-input').value}`);
    const myJson = await response.json(); 
    document.getElementById('secondary-clarification').value = myJson.clarification;
  } 
  userAction2();
}

function doneTyping () {
  async function userAction() {
    const response = await fetch(`https://translation.jacebapps.com/${lang1}/${lang2}?content=${document.getElementById('primary-input').value}`);
    const myJson = await response.json(); 
    document.getElementById('primary-clarification').value = myJson.clarification;
  } 
  userAction();
}
