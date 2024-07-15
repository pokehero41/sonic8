const API_KEY = "81b306cefb651139459a94f5e9644459"; // OpenWeatherMap에서 발급받은 API 키를 여기에 추가하세요

// DOM 요소 선택
const weatherInfo = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');

// 가평의 고정된 좌표
const GAPYEONG_LAT = 37.8315;
const GAPYEONG_LON = 127.5097;

// 날씨 정보를 API를 통해 가져오는 함수
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // 온도, 위치, 날씨 묘사, 날씨 아이콘을 받아옴
            const temperature = json.main.temp;
            const place = json.name;
            const weatherDescription = json.weather[0].description;
            const weatherIcon = json.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            // 받아온 정보들을 웹 페이지에 표현
            weatherInfo.innerText = `${temperature} °C @ ${place} / ${weatherDescription}`;
            weatherIconImg.setAttribute('src', weatherIconAdrs);
        })
        .catch((error) => console.log("error:", error));
}

// 초기화 함수
function init() {
    // 가평의 날씨 정보를 가져옴
    getWeather(GAPYEONG_LAT, GAPYEONG_LON);
}

// 초기화 함수 호출
init();
