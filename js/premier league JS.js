//on click go the top of the page (scroll up)
function scrollupFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
}

//dark mode
var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click",function(){
    darkMode.classList.toggle("active");
    content.classList.toggle("night");
    
})();

// button salah 
function salah() {
  var x = document.getElementById("moh");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// button trezeguet
function trezeguet() {
  var x = document.getElementById("tre");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
// button elneny
function elneny() {
  var x = document.getElementById("neno");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
