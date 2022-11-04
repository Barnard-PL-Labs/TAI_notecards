document.getElementById("indefArt").innerHTML = localStorage.getItem('aORan');
var single = localStorage.getItem('prompt_word');
document.getElementById("theme").innerHTML = single;
var category = localStorage.getItem("plural_word");


var notesArr = JSON.parse(localStorage.getItem('notecards'));

var promptString = `The following is a list of ${category}\n\n`;
for (var i = 0; i < notesArr.length; i++){
  promptString += notesArr[i] + `\n` + `Show me another ${single}.`;
}

window.addEventListener('load', function() {
  var notesArr = JSON.parse(localStorage.getItem('notecards'));
  console.log("start")
  $.get("/gpt-3", {
    examplesData: promptString
  }, function(result) {
    var out = result;
    console.log(out);
    if (result == null || result == ""){
      out = notesArr[0];
    }
    document.getElementById("aibots_card").innerHTML = out;
  });
}, false);
