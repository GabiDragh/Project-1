# Summary

A system that retrieves information about a country from the REST Countries API and then uses that information to fetch relevant news articles using the news API. Here's a basic outline of how you might do this:
Fetch Country Information: Use the REST Countries API to retrieve information about a specific country. This information might include the country's name, capital, population, region, etc.
Extract Relevant Data: Extract the relevant data from the response obtained from the REST Countries API, such as the country's name, capital, or region.
Query News API: Use the extracted data, such as the country name or capital, to construct a search query for the news API.
Retrieve News Articles: Query the news API with the constructed search query to retrieve relevant news articles about the country.
Display or Process News Articles: Once you have retrieved the news articles, you can display them to the user, process them further, or perform any other desired actions.

# Headline

A website that allows users to search for countries and view detailed information about them along with the latest news headlines.

## Overview

This is a simple web application built to provide users with information about countries worldwide. Users can search for a specific country and get details such as its capital, population, region, and currency. Additionally, the website displays the latest news headlines related to the searched country.

## Features

- Search for countries by name
- View detailed information about a country, including its capital, population, region, and currency
- Access the latest news headlines related to the searched country

## Installation

To run Country Explorer locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/GabiDragh/Project-1.git
   ```

2. Navigate to the project directory:

   ```
   cd project-directory
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

1. Enter the name of the country you want to search for in the search input field.
2. Click the "Search" button.
3. View the country details and the latest news headlines related to the searched country.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Credits

- Country information retrieved from the REST Countries API.
- News headlines fetched from the News API (newsdata.io)

---
