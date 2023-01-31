//setup before functions
let transcriptTimer;                //timer identifier
let doneTypingIntervalTranscript = 2000;  //time in ms (2 second)
let myInputTranscript = document.getElementById('primary-input');

// //on keyup, start the countdown
// myInputTranscript.addEventListener('keyup', () => {
//     clearTimeout(transcriptTimer);
//     if (myInputTranscript.value) {
//         transcriptTimer = setTimeout(transcript, doneTypingIntervalTranscript);
//     }
// });

// //setup before functions
// let transcriptTimer2;                //timer identifier
// let doneTypingInterval2Transcript = 2000;  //time in ms (2 second)
// let myInput2Transcript = document.getElementById('secondary-input');

// //on keyup, start the countdown
// myInput2Transcript.addEventListener('keyup', () => {
//     clearTimeout(transcriptTimer2);
//     if (myInput2Transcript.value) {
//         transcriptTimer2 = setTimeout(transcript2, doneTypingInterval2Transcript);
//     }
// });

function transcript2 () {
  async function userAction2() {
    const response = await fetch(`translation.apis.jacebapps.com/${lang2}/${lang1}?content=${document.getElementById('secondary-input').value}`);
    const myJson = await response.json(); 
    document.getElementById('transcript').innerHTML += `<span class='leftmessage leftbar'><mark class='mark1'>| ${myJson.translated}</mark></span><br><br>`;
    var objDiv = document.getElementById("transcript");
    objDiv.scrollTop = objDiv.scrollHeight;
    logTranslation2(myJson.clarification, myJson.translated)
  } 
  userAction2();
}

function transcript () {
  async function userAction() {
    const response = await fetch(`translation.apis.jacebapps.com/${lang1}/${lang2}?content=${document.getElementById('primary-input').value}`);
    const myJson = await response.json(); 
    document.getElementById('transcript').innerHTML += `<span class='leftmessage leftbar'><mark class='mark2'>| ${myJson.translated}</mark></span><br><br>`;
    var objDiv = document.getElementById("transcript");
    objDiv.scrollTop = objDiv.scrollHeight;
    logTranslation1(myJson.clarification, myJson.translated)
  } 
  userAction();
}

function pushMessage(message) {
  // var newSpan = document.createElement('span');
  // newSpan.innerHTML = message;
  // document.getElementById('transcript').appendChild(newSpan);
  document.getElementById('transcript').innerHTML += `<span>${message}</span>`;
}
document.getElementById('transcript').innerHTML += `<br>`;