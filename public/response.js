document.getElementById("indefArt").innerHTML = localStorage.getItem('aORan');
document.getElementById("theme").innerHTML = localStorage.getItem('prompt_word');

const chatButton = document.getElementById("get_response");

chatButton.addEventListener('click', function() {
  console.log("start")
  var humanText = document.getElementById("chat_box").value;
  $.get("/gpt-3", {
    chatData: humanText
  }, function(result) {
    var out = result.choices[0].text;
    console.log(out);
    document.getElementById("aibots_card").innerHTML = out;
  });
}, false);
