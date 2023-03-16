async function translate(section) {
  if (section == "primary") {
    var temp1 = lang1; 
    var temp2 = lang2;
  };
  if (section == "secondary") {
    var temp1 = lang2; 
    var temp2 = lang1;
  };
  const response = await fetch(`https://translation.jacebapps.com/${temp1}/${temp2}?content=${document.getElementById(section + '-input').value}`);
  let myJson = await response.json(); 
  document.getElementById(section + '-clarification').value = myJson.clarification;
}

async function changeLang(section, language) {
  const response = await fetch(`https://translation.jacebapps.com/get${section}/${language}`);
  const myJson = await response.json(); 
  document.getElementById(section + '-input').placeholder = myJson.input;
  document.getElementById(section + '-output').placeholder = myJson.output;
  document.getElementById(section + '-clarification').placeholder = myJson.clarification;
  document.getElementById(section + '-language').innerHTML = langs[language];
  if (section == "primary") {
    lang1 = language;   
    document.getElementById('transcript').placeholder = myJson.transcript;
    logChangeLang("Primary",langs[language])
  }
  if (section == "secondary") {
    lang2 = language
    logChangeLang("Secondary",langs[language])
  }
  refreshSection("primary")
  refreshSection("secondary")
}

