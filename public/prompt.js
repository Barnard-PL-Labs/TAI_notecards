

var wordsArr = ["fruit","animal","color","shape","city","country","vegetable","book", "movie","song","dessert","instrument","holiday","feeling","flower","language"];
var selector = Math.trunc((Math.random() * wordsArr.length));
var word = wordsArr[selector];
var letter = word.charAt(0);
if(letter == 'e' || letter == 'a' || letter == 'i' || letter == 'o' || letter == 'u'){
    document.getElementById('a/an').innerHTML= 'an';
} else {
    document.getElementById('a/an').innerHTML= 'a';}

document.getElementById('mysteryWord').innerHTML = word;
console.log(selector);

localStorage.setItem("prompt_word", word);
