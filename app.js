// inputs 
var nameInput = document.querySelector("#name");
var dateInput = document.querySelector("#date");
var numberInput = document.querySelector("#number");
var descInput = document.querySelector("#desc");
var imageInput = document.querySelector("#image");
var nomFrInput = document.querySelector("#name-fr");
var prenomFrInput = document.querySelector("#prenom-fr");
var importDateInput = document.querySelector("#import-date");
var exportDateInput = document.querySelector("#export-date");
// placeHolder
var namePlaceholder = document.querySelector("#name-placeholder");
var datePlaceholder = document.querySelector("#date-placeholder");
var numberPlaceholder = document.querySelector("#number-placeholder");
var descPlaceholder = document.querySelector("#desc-placeholder");
var imagePLaceholder = document.querySelector("#image-placeholder");
var nomFrPlaceholder = document.querySelector("#nom-placeholder");
var prenomFrPlaceholder = document.querySelector("#prenom-placeholder");
var importDatePlaceholder = document.querySelector("#import-date-placeholder");
var exportDatePlaceholder = document.querySelector("#export-date-placeholder");
// button
var btn = document.querySelector('#btn');
// name 
nameInput.addEventListener('keyup', function (e) {
  var width = namePlaceholder.getBoundingClientRect().width;
  x = 860 - width - 225;
  namePlaceholder.innerHTML = e.target.value;
  namePlaceholder.setAttribute("x", x);
})
// date 
dateInput.addEventListener('keyup', function (e) {
  var width = datePlaceholder.getBoundingClientRect().width;
  x = 860 - width - 203;
  datePlaceholder.innerHTML = e.target.value.replace(/\-/g, '/');
  datePlaceholder.setAttribute("x", x);
})
// number
numberInput.addEventListener('keyup', function (e) {
  var width = numberPlaceholder.getBoundingClientRect().width;
  x = 860 - width - 207;
  numberPlaceholder.innerHTML = e.target.value;
  numberPlaceholder.setAttribute("x", x);
})
// desc 
descInput.addEventListener('keyup', function (e) {
  var width = descPlaceholder.getBoundingClientRect().width;
  x = 860 - width - 144;
  descPlaceholder.innerHTML = e.target.value;
  descPlaceholder.setAttribute("x", x);
})
// Image 
imageInput.addEventListener('change', async function (e) {
  var src = URL.createObjectURL(e.target.files[0]);
  var reader = new FileReader();
  reader.onloadend = function () {
    imagePLaceholder.setAttribute("xlink:href", `${reader.result}`);
  }
  imageBase64 = reader.readAsDataURL(imageInput.files[0]);

})
// Fr nom 
nomFrInput.addEventListener('change', function (e) {
  nomFrPlaceholder.innerHTML = e.target.value;
})
// Fr prenom
prenomFrInput.addEventListener('change', function (e) {
  prenomFrPlaceholder.innerHTML = e.target.value;
})
// Import date 
importDateInput.addEventListener('keyup', function (e) {
  var width = importDatePlaceholder.getBoundingClientRect().width;
  x = 860 - width - 152;
  importDatePlaceholder.innerHTML = e.target.value.replace(/\-/g, '/');
  importDatePlaceholder.setAttribute("x", x);
})
// Export date 
exportDateInput.addEventListener('keyup', function (e) {
  var width = exportDatePlaceholder.getBoundingClientRect().width;
  x = 860 - width - 157;
  exportDatePlaceholder.innerHTML = e.target.value.replace(/\-/g, '/');
  exportDatePlaceholder.setAttribute("x", x);
});

// btn.addEventListener('click', function () {
//   $('#c3_chart').find('svg').attr('xmlns', 'http://www.w3.org/2000/svg');
//   xepOnline.Formatter.Format('c3_chart', {
//     pageWidth: '11in',
//     pageHeight: '8.5in',
//     render: 'download',
//     srctype: 'svg'
//   });
// });

// SVG
// const { jsPDF } = window.jspdf;

// console.log(jsPDF);
// const svgContent = document.querySelector('#Layer_1');
btn.addEventListener('click', function () {
  window.print()
  //   const doc = new jsPDF();
  //   console.log(doc)
  //   doc.svg(svgContent, {
  //     x: 0,
  //     y: 0,
  //     width: 595.28,
  //     height: 841.89
  //   });
  //   doc.save("myPdf.pdf");
})
