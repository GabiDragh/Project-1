/* ----------------- Create a listener for the Clear button ----------------- */
document
  .getElementById("clearSearchButton")
  .addEventListener("click", resetApp);

/* ----------------- Create a listener for the Search button ---------------- */
document
  .getElementById("countrySearch")
  .addEventListener("click", fetchCountryInfo);

/* ------- Create buttons if countries already stored in local storage ------ */
var countryArray = [];
var countryArrayStored = localStorage.getItem("Countries");
if (countryArrayStored !== null) {
  countryArray = JSON.parse(countryArrayStored);
  for (var i = 0; i < countryArray.length; i++) {
    createCountryButton(countryArray[i], 0);
  }
}

/* -------------------- Function to create country button ------------------- */
function createCountryButton(country, updateLS) {
  // Step 0: Get the appropriate element from the HTML to insert the buttons in
  var targetSection = document.getElementById("history");

  // Step 1: Create the button element
  var button = document.createElement("button");

  // Step 2: Set button attributes
  button.setAttribute("data-country", country);
  button.setAttribute("class", "btn btn-secondary mb-1");
  button.setAttribute("type", "button");

  // Step 3: Add text to the button
  button.textContent = country;

  // Step 4: Append the button to the HTML document
  targetSection.prepend(button);

  // Update array of countries and save to local storage
  if (updateLS) {
    console.log(`Info: ${country} was added to local storage`);
    countryArray.push(country);
    var countryArrayString = JSON.stringify(countryArray);
    localStorage.setItem("Countries", countryArrayString);
  }
}

/* ---- Function to clear local storage when the reset button is pressed ---- */
function resetApp() {
  console.log("Clear button pressed");
  localStorage.removeItem("Countries");
  var targetSection = document.getElementById("history");
  targetSection.innerHTML = "";
  countryArray = [];
}

/* --------------------- Function to fetch country info --------------------- */
function fetchCountryInfo(e) {
  e.preventDefault();
  var countryName = document.getElementById("search-input").value;

  console.log(`Info: Am in function to fetch country info for ${countryName}`);

  const apiUrl =
    "https://restcountries.com/v3.1/name/" + countryName + "?fullText=true";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(apiUrl);
      console.log(data);

      var capital = data[0].capital[0];
      console.log("Capital:", capital);
      var lat = data[0].latlng[0];
      console.log("Lat:", lat);
      var lon = data[0].latlng[1];
      console.log("lon:", lon);
      var sideOfRoad = data[0].car.side;
      console.log("side of road", sideOfRoad);
      var continent = data[0].continents[0];
      console.log(continent);
      var flagURL = data[0].flags.png;
      console.log(flagURL);
      var flag_disp = document.getElementById("flag_disp");

      flag_disp.src = flagURL;

      var isIndependent = data[0].independent;
      console.log(isIndependent);
      var languages = data[0].languages;
      console.log(languages);
      var timezone = data[0].timezones[0];
      console.log(timezone);
      var officialName = data[0].name.official;
      console.log(officialName);
      var mapsLink = data[0].maps.googleMaps;
      console.log(mapsLink);
      var newsCountry = data[0].cca2;
      console.log(newsCountry);

          var APIkey = "pub_378280dff9b7b7117e605422bac64f7b9a752";

          var getNewsURL =
            "https://newsdata.io/api/1/news?apikey=" +
            APIkey +
            "&country=" +
            newsCountry;

          var corsURL =
            "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" +
            getNewsURL;
          console.log(getNewsURL);
          console.log(corsURL);
          fetch(corsURL)
            .then(function (response) {
              console.log(JSON.stringify(response.json));
              return response.json();
            })
            .then(function (newsData) {
              console.log(newsData);
              if (!countryArray.includes(countryName))
                createCountryButton(countryName, true);
              // displayLocalNews();
              $(".card-title").empty(); //would have liked all of this in a function, but I couldn't make it work outside of here
              $(".card-text").empty();
              $(".card-title-two").empty(); //would have liked all of this in a function, but I couldn't make it work outside of here
              $(".card-text-two").empty();
              $(".card-title-three").empty(); //would have liked all of this in a function, but I couldn't make it work outside of here
              $(".card-text-three").empty();
              var newsArray = newsData.results;
              console.log(newsArray);

              var randomArticle = newsArray[0];
              console.log(randomArticle);

              var articleTitle = randomArticle.title;
              $(".card-title").append(articleTitle);

              var articleText = randomArticle.description;
              $(".card-text").append(articleText);

              var randomArticleTwo = newsArray[1];
              console.log(randomArticle);

              var articleTitleTwo = randomArticleTwo.title;
              $(".card-title-two").append(articleTitleTwo);

              var articleTextTwo = randomArticleTwo.description;
              $(".card-text-two").append(articleTextTwo);

              var randomArticleThree = newsArray[2];
              console.log(randomArticleThree);

              var articleTitleThree = randomArticleThree.title;
              $(".card-title-three").append(articleTitleThree);

              var articleTextThree = randomArticleThree.description;
              $(".card-text-three").append(articleTextThree);
            });
        });
    };

