//on click go the top of the page (scroll up)
function topFunction() {
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


