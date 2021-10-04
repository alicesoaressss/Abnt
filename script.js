let capture = "";
function nameConvert() {
   capture = document.getElementById('name').value;
   let convert = capture.substring(capture.lastIndexOf(" "));
   let teste = capture.replace(convert, '');
   let nameCompleted = convert + ", "
   let finalConvert = teste.split(" ");
   for (let i = 1; i < finalConvert.length; i++) {
      finalConvert[i] = finalConvert[i][0].toUpperCase();
  }
  finalConvert = finalConvert.join(' ');
   console.log(finalConvert)
   document.getElementById('convertName').innerHTML = "Nome convertido: " + nameCompleted + " " + finalConvert;
}
