

var wordsArr = ["fruit","animal","color","shape","city","country","vegetable","book", "movie","song","dessert","instrument","holiday","feeling","flower","language"];
var pluralWordsArr = ["fruits","animals","colors","shapes","cities","countries","vegetables","books", "movies","songs","desserts","instruments","holidays","feelings","flowers","languages"];
var selector = Math.trunc((Math.random() * wordsArr.length));
var word = wordsArr[selector];
var pluralWord = pluralWordsArr[selector];
localStorage.setItem("plural_word",pluralWord);
var letter = word.charAt(0);
var article;
if(letter == 'e' || letter == 'a' || letter == 'i' || letter == 'o' || letter == 'u'){
    article = "an";
} else {
    article ="a";}
document.getElementById('a/an').innerHTML = article;
localStorage.setItem("aORan", article);
document.getElementById('mysteryWord').innerHTML = word;
console.log(selector);

localStorage.setItem("prompt_word", word);
