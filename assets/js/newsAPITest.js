

var APIkey = "3e63b2e1d60e44d09750ac4308a89e23";

var getNewsURL = "https://newsapi.org/v2/everything?country=fr&apiKey=" + APIkey;

var corsURL = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + getNewsURL;

console.log(getNewsURL);
console.log(corsURL);

fetch(corsURL)

  //Ask for JSON format data
  .then(function (response) {
    console.log(JSON.stringify(response.json));
     return response.json();
    })
  //Function that stores all data
    .then(function (newsData) {
     console.log(newsData);
    
    })