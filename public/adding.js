window.addEventListener('load', function(){
  var notesArr = JSON.parse(localStorage.getItem('notecards'));
  for (var i = 0; i < notesArr.length; i++){
    document.getElementById("output").innerHTML += "<div class=\"card\"> <img class=\"paper\" src=\"note.png\" alt=\"Graphic of a paper note\"></img> <h3>" +
    notesArr[i] + "</h3></div>"
  }
  //document.getElementById("output").innerHTML = localStorage.getItem('notecards');
}, false);
