# Weather app


### What does this project do?
- This project is a weather application that allows users to check weather conditions, humidity, rain, storm, temperature, UV index, and other related information.
- It provides a user interface to input a location and view the weather details for that location.

### Built with following tech:
- **Technologies:** JavaScript, HTML, CSS
- **Frameworks/Libraries:** Webpack
- **Tools:** ESLint, Babel
- **API:** Provided by https://weatherapi.com

### Functionality:
-  If geolocation is permitted, the weather app will attempt to access the user's navigator.geolocation service and send a request.
-  You can request weather data and forecast on requested location for up to 3 days.
-  Search request based on which data is sent back. It could be following:

       - Latitude and Longitude (Decimal degree) e.g: 48.8567,2.3508
       - city name e.g.: Paris
       - US zip e.g.: 10001
       - UK postcode e.g: SW1
       - Canada postal code e.g: G2J
       - metar:<metar code> e.g: metar:EGLL
       - iata:<3 digit airport code> e.g: iata:DXB
       - auto:ip IP lookup e.g: auto:ip
       - IP address (IPv4 and IPv6 supported) e.g: 100.0.0.1
       - By ID returned from Search API. e.g: id:2801268

### Overview
This project is a simple weather app built with the MVC model, primarily utilizing factory functions. It serves as a learning process to understand these concepts better.

### Live preview 
You can check out this hosted project [here](https://arthwr.github.io/weather-app/)

### Img preview

![arthwr github io_weather-app](https://github.com/Arthwr/weather-app/assets/132221421/31f9ad83-2e57-4048-8643-fc1a99a2d673)


