document.getElementById("indefArt").innerHTML = localStorage.getItem('aORan');
document.getElementById("theme").innerHTML = localStorage.getItem('prompt_word');
var category = localStorage.getItem("plural_word");


var notesArr = JSON.parse(localStorage.getItem('notecards'));

var promptString = `The following is a list of ${category}\n\n`;
for (var i = 0; i < notesArr.length; i++){
  promptString += notesArr[i] + `\n`;
}

window.addEventListener('load', function() {
//var notesArr = JSON.parse(localStorage.getItem('notecards'));
  console.log("start")
  $.get("/gpt-3", {
    examplesData: promptString
  }, function(result) {
    var out = result.choices[0].text;
    console.log(out);
    if (localStorage.getItem("new") == null){
      out = notesArr[0];
    }
    document.getElementById("aibots_card").innerHTML = out;
  });
}, false);

var restart = document.getElementById('playBtn');
restart.addEventListener('click', function() {
  console.log("restarting")
  localStorage.clear();
}, false);
  

