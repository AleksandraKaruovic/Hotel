var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500);
}

function popUpWindow(URL, windowName, windowWidth, windowHeight) {
  var centerLeft = (screen.width/2)-(windowWidth/2);
  var centerTop = (screen.height/2)-(windowHeight/2);
  var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no, ';
  return window.open(URL, windowName, windowFeatures +' width='+ windowWidth +', height='+ windowHeight +', top='+ centerTop +', left='+ centerLeft);
 };

 function myFunction() {
  alert("Hvala!");
 }