function gantiWarna() {
    var element = document.body;
    var btn = document.getElementById("tombol");
    element.classList.toggle("dark-mode");
    if (btn.innerHTML === '<i class="uil uil-moon"></i>') {
       btn.innerHTML = '<i class="uil uil-sun"></i>'
    } else if (btn.innerHTML === '<i class="uil uil-sun"></i>') {
      btn.innerHTML = '<i class="uil uil-moon"></i>'
    }
 }

 
   
function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
 }
 
 
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
 }
 


