import { get } from 'unirest';

function myFunction() {
    get("https://wordsapiv1.p.rapidapi.com/words/example")
.header("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com")
.header("X-RapidAPI-Key", "993184e5aemsh72cd44763e0eaa8p1c2840jsn70a16af24ce5")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
})};