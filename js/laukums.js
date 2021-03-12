var r = 0;
var col = [];
var vertibas = [];
var vartibasn = 0;
var laukums;
var x;
var problemList = [];
var problemListAnswers = [];
var problemListShuffe = [];
var meginajumi = 0;


function checkmyinput () {
    // Get inputfield
    var inputfield = document.getElementById("x");


    // Get value from inputfield
    var inputval = inputfield.value;

    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");

    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric%2 != 0 || numeric == 0) {
        inputfield.value = '';
    }
}


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
  pari = 0;
  pirmaisklikskis = 0;
  laiks = 0;
  meginajumi = 0;
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

shuffle(problemListShuffe);
console.log(problemList);
console.log(problemListAnswers);


  laukums = document.getElementById("laukums");

  var row = document.createElement("DIV");
  row.setAttribute("id","row");
  laukums.appendChild(row);
  row.style.width = `${60*x + x*10}px`;
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


// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




var o = 0;
var klikski = 0;
var pag = [];
var pag2 = [];
var numurs = 0;
var irVien = false;
var irDivi = false;
var pari = 0;
var pirmaisklikskis = 0;
var laiks = 0;
var sekunde;

function myTimer() {
  laiks++;
}

function flip(divs) {
  pirmaisklikskis++;
  if (pirmaisklikskis == 1) {
      sekunde = setInterval(myTimer, 1000);
  }
if (klikski < 2) {
  pag[klikski] = divs;
  pag[klikski].style.pointerEvents = "none";
  klikski++;
  irVien = false;
  irDivi = false;
  if (klikski == 2 && vienadi(pag)) {
    vienadi(pag);
    irDivi = true;
    laukums.style.pointerEvents = "none";
    meginajumi++;
   if(irVien){
      pag[0].style.background="#00A170";
      pag[0].style.color= "white";
      pag[0].setAttribute("onclick","");
      pag[1].style.background="#00A170";
      pag[1].style.color= "white";
      pag[1].setAttribute("onclick","");
      laukums.style.pointerEvents = "auto";
      irDivi = false;
      klikski = 0;
      pari++;
      if (problemListAnswers.indexOf(pag[0].textContent) == problemList.indexOf(pag[1].textContent)) {
        problemList.splice(problemList.indexOf(pag[1].textContent), 1);
        problemListAnswers.splice(problemListAnswers.indexOf(pag[0].textContent), 1);
        console.log(problemList);
        console.log(problemListAnswers);
        console.log("pirmais");
      } else if (problemListAnswers.indexOf(pag[1].textContent) == problemList.indexOf(pag[0].textContent)) {
        console.log("otrais");
      }

      if (pari == ((x*x)/2)) {
        clearInterval(sekunde);
        setTimeout(function(){
          modal.style.display = "block";
        }, 500);
        document.getElementById("laiks").innerHTML = `Tev tas prasīja: ${laiks} sekundes un ${meginajumi} mēģinājumus`
        console.log("Kopējais laiks: "+ laiks+ " sekundes");
      }
    }
  } else {

    if (klikski == 1) {
      pag[0].style.background="#0072B5";
      pag[0].style.color="white";
    } else if (klikski == 2) {
      meginajumi++;
      pag[0].style.background="#0072B5";
      pag[0].style.color="white";
      pag[1].style.background="#0072B5";
      pag[1].style.color= "white";
      laukums.style.pointerEvents = "none";
      setTimeout(function(){
        klikski = 0;
        pag[0].style.background="#D2386C";
        pag[0].style.color="transparent";
        pag[1].style.background="#D2386C";
        pag[1].style.color="transparent";
        pag[0].style.pointerEvents = "auto";
        pag[1].style.pointerEvents = "auto";
        laukums.style.pointerEvents = "auto";
      }, 1500);
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
