let all = '';

function addDivider() {
  all += '\n';
};

function logChangeLang(section, lang) {
  all += `${section} language changed to ${lang}.\n`;
};

function logTranslation1(before, after) {
  addDivider();
  all += `Primary -> Secondary\nFrom: ${before}\nTo: ${after}\n`;
};

function logTranslation2(before, after) {
  addDivider();
  all += `Secondary -> Primary\nFrom: ${before}\nTo: ${after}\n`;
};

function download() {
  var textToSave = all
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'ClassTranslate Transcript.txt';
  hiddenElement.click();
}