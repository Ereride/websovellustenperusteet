const url = 'https://api.openweathermap.org/data/2.5/weather?'
const icon_url = 'http://openweathermap.org/img/wn/'
const api_key = 'c52b36bd8bc3a9dcfec65f93ab558de7'


const temp_span = document.querySelector('#temp')
const speed_span = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')
const icon_img = document.querySelector('img')



const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ', '
            document.querySelector('#lng').innerHTML = position.coords.longitude.toFixed(3)
            getWeather(position.coords.latitude,position.coords.longitude)
        }), (error => {
            alert(error)
        })

    } else {
        alert("Your browser does not support geolocation!")
    }
}

const getWeather = (lat, lng) => {
    const address = url +
        'lat=' + lat +
        '&lon=' + lng +
        '&units=metric' +
        '&appid=' + api_key +
        '&lang=fi';
    axios.get(address)
        .then(response => {
            const json = response.data;
            temp_span.innerHTML = json.main.temp + '&#8451;';
            speed_span.innerHTML = json.wind.speed + ' m/s';
            direction_span.innerHTML = json.wind.deg + '&#176;';
            const capitalizedDescription = json.weather[0].description.charAt(0).toUpperCase() + json.weather[0].description.slice(1);
            description_span.innerHTML = capitalizedDescription;
            const image = icon_url + json.weather[0].icon + '@2x.png';
            icon_img.src = image;
        })
        .catch(error => {
            alert(error);
        });
}

getLocation()

