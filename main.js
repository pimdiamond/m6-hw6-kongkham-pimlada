// When a user hovers over any one of the boxes, highlight all of the boxes with a different background color

window.onmouseover  = myFunction;

function myFunction() {
  document.getElementsByClassName("b1")[0].style.backgroundColor = "#FED277";
  document.getElementsByClassName("b2")[0].style.backgroundColor = "#44C2C5";
  document.getElementsByClassName("b3")[0].style.backgroundColor = "#EF456B";
}


// When a user clicks on box #1, have a message appear somewhere on the page that says “Oooh - so close, but no cigar” 

var box1 = document.getElementsByClassName('b1');

for(i=0; i<box1.length; i++) {
    box1[i].addEventListener('click', function(){ alert("Oooh - so close, but no cigar");});
}

// When a user clicks on box #2, have a message appear somewhere on the page that says “DING DING DING - We have a winner”

var box2 = document.getElementsByClassName('b2');

for(i=0; i<box2.length; i++) {
    box2[i].addEventListener('click', function(){ alert("DING DING DING - We have a winner");});
}

// When a user clicks on box #3, have a message appear somewhere on the page that says “Oops, butter luck next time” 

var box3 = document.getElementsByClassName('b3');

for(i=0; i<box3.length; i++) {
    box3[i].addEventListener('click', function(){ alert("Oops, better luck next time");});
}

// When any one of the three boxes are clicked, have a button that says “Start Over” with an href of “index.html” appear 

var allBoxes = document.getElementsByClassName('row');

var button = document.getElementsByClassName('hidden')[0];

allBoxes[0].addEventListener('click', function(){button.classList.remove('hidden')});



