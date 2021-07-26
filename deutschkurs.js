

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



//==========     SLİDER      ==============//



const slider = document.getElementById("slider");
const progress = document.getElementById("progress");
let aktuell = 0;
const max = document.querySelectorAll("#slider>.slide").length;

setTimeout(function()
    {
        next();
    }, 3000);

function next()
{
    //CHECK
    if(aktuell == max-1)
    {
        return;
    }

    //AKTION
    aktuell++;

    //UPDATE
    translateUpdate();
}
function prev()
{
    if(aktuell == 0)
    {
        return;
    }
    
    aktuell--;
    translateUpdate();
}

function translateUpdate()
{

    slider.style.transform = "translateX(-" + (aktuell*100) + "vw)";
    setTimeout(function()
    {
        next();
    }, 3000);
}







