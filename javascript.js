//let isDarkMode= false//
//const findHomestyle=document.body.style//

//function gantiWarna() {//
 //   if(isDarkMode==true) {//
     //   setToLightMode()
   // }else {
//        setToDarkMode()
 //   }
//    isDarkMode=!isDarkMode
//}//

//function setToDarkMode () {
    //findHomestyle.backgroundColor ="#000000"
   // findHomestyle.color = "#ffffff"
//}//

//function setToLightMode () {
   // findHomestyle.backgroundColor ="#ffffff"
   // findHomestyle.color = "#000000"
//}//

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


