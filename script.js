function myFunction() {
 var x = document.getElementByClassName('hider');
 if (x.style.display === "none") {
  x.style.display = "block";
 }
 else {
  x.style.display = 'none';
 }
}
