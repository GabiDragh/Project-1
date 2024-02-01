const apiUrl = "https://restcountries.com/v3.1/name/argentina?fullText=true";

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

    var APIkey = "3e63b2e1d60e44d09750ac4308a89e23";

    var getNewsURL =
      "https://newsapi.org/v2/top-headlines?country=" +
      newsCountry +
      "&apiKey=" +
      APIkey;
    var corsURL =
      "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + getNewsURL;
    console.log(getNewsURL);
    console.log(corsURL);
    fetch(corsURL)
      .then(function (response) {
        console.log(JSON.stringify(response.json));
        return response.json();
      })
      .then(function (newsData) {
        console.log(newsData);
      });
  });
