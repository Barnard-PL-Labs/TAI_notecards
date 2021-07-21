window.addEventListener('load', function(){
  document.getElementById("output").innerHTML = localStorage.getItem('notecards');
}, false);