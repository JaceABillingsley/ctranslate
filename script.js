let lang1 = 'en'
let lang2 = 'es'
const langs = {"en":"English", "fr":"French", "es":"Spanish", "uk":"Ukrainian", "pt":"Portuguese", "de":"German", "ru":"Russian", "ja":"Japanese", "ko":"Korean", "el":"Greek", "tr":"Turkish", "mn":"Mongolian", "ht":"Haitian Creole"}

function clearSection(section) {
  document.getElementById(section + '-input').value = '';
  document.getElementById(section + '-output').value = '';
  document.getElementById(section + '-clarification').value = '';
}

async function refreshSection(section) {
  if (section == "primary") {
    var temp1 = lang1; 
    var temp2 = lang2;
  };
  if (section == "secondary") {
    var temp1 = lang2; 
    var temp2 = lang1;
  };
  const response = await fetch(`translation.apis.jacebapps.com/${temp1}/${temp2}?content=${document.getElementById(section + '-input').value}`);
  const myJson = await response.json(); 
  document.getElementById(section + '-output').value = myJson.translated;
  document.getElementById(section + '-clarification').value = myJson.clarification;
}

async function clarificationConfirmed(section) {
  if (section == "primary") {
    var temp1 = lang1; 
    var temp2 = lang2
  };
  if (section == "secondary") {
    var temp1 = lang2; 
    var temp2 = lang1
  };
  const response = await fetch(`translation.apis.jacebapps.com/${temp1}/${temp2}?content=${document.getElementById(section + '-input').value}`);
  const myJson = await response.json(); 
  document.getElementById(section + '-clarification').value = myJson.clarification;
  document.getElementById(section + '-output').value = myJson.translated;
  if (section == "primary") {
    transcript()
  };
  if (section == "secondary") {
    transcript2();
  };
}

function languageSelector() {
  document.getElementById('backbutton').style.visibility = 'visible'
  document.getElementById('form1').style.visibility = 'visible'
  document.getElementById('form2').style.visibility = 'visible'
  document.getElementById('form1').style.position = 'relative'
  document.getElementById('form2').style.position = 'relative'
  document.getElementById('btn1').style.visibility = 'hidden'
  document.getElementById('btn2').style.visibility = 'hidden'
  document.getElementById('btn3').style.visibility = 'hidden'
  document.getElementById('btn4').style.visibility = 'hidden'
  document.getElementById('btn1').style.position = 'absolute'
  document.getElementById('btn2').style.position = 'absolute'
  document.getElementById('btn3').style.position = 'absolute'
  document.getElementById('btn4').style.position = 'absolute'
}

function resetDash() {
  let e = document.getElementById("language1");
  changeLang("primary", e.value)
  let d = document.getElementById("language2");
  changeLang("secondary", d.value)
  document.getElementById('backbutton').style.visibility = 'hidden'
  document.getElementById('form1').style.visibility = 'hidden'
  document.getElementById('form2').style.visibility = 'hidden'
  document.getElementById('form1').style.position = 'absolute'
  document.getElementById('form2').style.position = 'absolute'
  document.getElementById('btn1').style.visibility = 'visible'
  document.getElementById('btn2').style.visibility = 'visible'
  document.getElementById('btn3').style.visibility = 'visible'
  document.getElementById('btn4').style.visibility = 'visible'
  document.getElementById('btn1').style.position = 'relative'
  document.getElementById('btn2').style.position = 'relative'
  document.getElementById('btn3').style.position = 'relative'
  document.getElementById('btn4').style.position = 'relative'
}
