var r = 0;
var col = [];
var vertibas = [];
var vartibasn = 0;
var laukums;
const minesana = ["2+2","3*3","2+2*2","4^2","90/9","5x+6=56","6x^2-6x+5","30-21","4*17",""];
const minesanaatbildes = ["4","9"];
var minesanashufled = ["2+2","4","3*3","9"];
var x;
var problemList = [];
var problemListAnswers = [];
var problemListShuffe = [];

function generateProblem() {
  // creates a random number from 1-100
  var randNum1 = Math.floor(Math.random() * 30) + 1;
  var randNum2 = Math.floor(Math.random() * 30) + 1;

  // creates a random operator
  var op = ["*", "+", "-"][Math.floor(Math.random() * 3)];

  return {number1: randNum1, operator: op, number2: randNum2};

}



document.getElementById("poga").onclick = function(){
  problemList.length = 0;
  problemListAnswers.length = 0;
   x = parseInt(document.getElementById("x").value); // rindas
  if (r != 0) {
    document.getElementById("row").remove();
  }
  r++;

  var t = [];
  var n = 1;

  vertibas.length = 0;
  vartibasn = 0;

  for (var i = 0; i < x*x; i++) {
    t[i] = n;
    n++;
  }
  shuffle(t);

  for (var i = 0; i < x*x; i++) { // even values for i

    vertibas[i] = vartibasn++;

}





while (problemList.length < ((x*x)/2)) {
  var math_it_up = {
  "+": function (x, y) { return x + y },
  "-": function (x, y) { return x - y },
  "*":  function (x, y) { return x * y },
};
    var pagaidu = generateProblem();
    console.log(pagaidu);
    problemList.push(`${pagaidu[Object.keys(pagaidu)[0]]}${pagaidu[Object.keys(pagaidu)[1]]}${pagaidu[Object.keys(pagaidu)[2]]}`);
    problemListAnswers.push(`${math_it_up[pagaidu[Object.keys(pagaidu)[1]]](pagaidu[Object.keys(pagaidu)[0]], pagaidu[Object.keys(pagaidu)[2]])}`);

}
var pagaidu2n = 0;
var pagaidu2 = [];
for (var i = 0; i < problemList.length+problemListAnswers.length; i++) { // even values for i
  if(i%2 != 0){
      problemListShuffe[i] = problemListAnswers[pagaidu2n];
      pagaidu2n++
    }else{
      problemListShuffe[i] = problemList[pagaidu2n];
    }
}

console.log(problemListShuffe);
shuffle(vertibas);
shuffle(problemListShuffe);
console.log(vertibas);


  laukums = document.getElementById("laukums");

  var row = document.createElement("DIV");
  row.setAttribute("id","row");
  laukums.appendChild(row);
  row.style.width = `${50*x}px`;
  row.style.margin = `0 auto`;
  row.style.padding = `0 !important`;
  row.style.fontSize =  `0px`;



  for (var i = 0; i < x*x; i++) {
    col[i] = document.createElement("DIV");
    col[i].setAttribute("class",`square`);
    col[i].setAttribute("id",`${i}`);
    col[i].setAttribute("onclick",`flip(this)`);
    col[i].innerHTML = `${problemListShuffe[i]}`;
  }
  for (var i = 0; i < x*x; i++) {
    row.appendChild(col[i]);
  }


}





function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
var o = 0;
var klikski = 0;
var pag = [];
var pag2 = [];
var numurs = 0;
var irVien = false;
var irDivi = false;
function flip(divs) {
if (klikski < 2) {
  pag[klikski] = divs;
  pag[klikski].style.pointerEvents = "none";
  klikski++;
  irVien = false;
  irDivi = false;
  if (klikski == 2 && vienadi(pag)) {
    console.log("vienadi");
    vienadi(pag);
    irDivi = true;
    laukums.style.pointerEvents = "none";
   if(irVien){
      pag[0].style.background="green";
      pag[0].setAttribute("onclick","");
      pag[1].style.background="green";
      pag[1].setAttribute("onclick","");
      laukums.style.pointerEvents = "auto";
      irDivi = false;
      klikski = 0;
    }
  } else {

    if (klikski == 1) {
      pag[0].style.background="#000";
    } else if (klikski == 2) {
      pag[0].style.background="#000";
      pag[1].style.background="#000";
      laukums.style.pointerEvents = "none";
      console.log("heiheijio");
      setTimeout(function(){
        klikski = 0;
        pag[0].style.background="#ffffff";
        pag[1].style.background="#ffffff";
        pag[0].style.pointerEvents = "auto";
        pag[1].style.pointerEvents = "auto";
        laukums.style.pointerEvents = "auto";
      }, 3000);
    }
  }


     //else if(!irDivi) {
    //  divs.style.background="#ffffff";
    //  divs.style.pointerEvents = "auto";
    //  console.log("heya");
}

}


function vienadi(parbaudamie){
irVien = false;
var temp = [];
pag2[0]=parbaudamie[0];
pag2[1]=parbaudamie[1];

if (problemListAnswers.indexOf(pag2[0].textContent) == problemList.indexOf(pag2[1].textContent) && problemListAnswers.indexOf(pag2[1].textContent) == problemList.indexOf(pag2[0].textContent)) {
  return irVien = true;
} else {
  return irVien = false;
}
}
