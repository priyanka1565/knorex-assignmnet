#### Weather App 🌦️
A professional weather forecasting web application built with ReactJS. This app displays the current weather and a 3-day forecast for selected cities, with a dynamic and visually appealing user interface.

#### Features ✨
Dynamic Backgrounds: Background changes based on the weather conditions (e.g., sunny, cloudy, rainy).
Real-Time Weather Data: Fetches data using the OpenWeather API (version 2.5).
City Selector: Includes a dropdown to choose cities:
Ho Chi Minh
Singapore
Kuala Lumpur
Tokyo
Athens
Weather Persistence: Keeps the selected city even after refreshing the page.
Responsive Design: Fully responsive and works on all modern browsers, including IE 11.
Loading Indicator: Displays a spinner while fetching weather data.


#### Tech Stack 🛠️
Frontend:
ReactJS
HTML5, CSS3
Bootstrap 5 (React Bootstrap)
API: OpenWeather API (version 2.5)
Tools:
Axios for API requests
LocalStorage for city persistence

#### Getting Started 🚀
1. Prerequisites
Node.js (v14 or higher)
NPM or Yarn package manager

2. Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-repo/weather-app.git

3. Navigate to the project directory:
cd weather-app

4. Install dependencies:
npm install

 5. Running the App
Start the development server:
npm start

#### API Key Setup 🔑
Register on OpenWeatherMap.
Generate an API key from your account.
Replace YOUR_API_KEY in the App.js file with your API key:
javascript
Copy code


#### Folder Structure 📂

weather-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── DropdownSelector.js
│   │   └── WeatherDisplay.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── README.md
└── package.json

#### Browser Compatibility 🌐
Tested on:

Chrome
Firefox
Safari
Microsoft Edge
Internet Explorer 11


#### Future Enhancements 🚧
Add more cities dynamically.
Implement hourly weather forecasts.
Improve animations and transitions.
Provide user authentication for custom settings.
