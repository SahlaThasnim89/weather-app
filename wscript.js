let weather={
    apiKey:"2aae6192261905bbcb96c78448568426",
    fetchWeather:function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ).then((response)=>{
            if(!response.ok){
                alert("No weather found")
            }
            return response.json();
        })
        .then((data)=>
            this.displayWeather(data))
        },
        displayWeather:function (data) {
            const {name}=data;
            const {icon,description}=data.weather[0]
            const{temp,humidity}=data.main;
            const {speed}=data.wind;


            document.querySelector('.city').innerText="Weather in " +name;
            document.querySelector('.description').innerText=description;
            document.querySelector('.temp').innerText=temp+'°C';
            document.querySelector('.icon').src='https://openweathermap.org/img/wn/' + icon +'.png';
            document.querySelector('.humidity').innerText='Humidity: '+ humidity + '%';
            document.querySelector('.wind').innerText='wind speed: '+ speed + 'km/h';
            document.querySelector('.weather').classList.remove('loading');
            // document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";
            // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600*900/ + description + ",nature,sky')";
            document.body.style.backgroundImage = "url('https://www.pexels.com/search/city/')";
            document.body.style.backgroundImage = "url('https://picsum.photos/1600/900?random')";



            const apiKey = 'SutBRd3BPF54v5ino2nBymjMhOg8ndkinqhQ7BjFJvKokGaPCk5qS5gx';
const query = city;

fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15`, {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.photos.length);
    const imageUrl = data.photos[randomIndex].src.original;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => console.error('Error fetching image:', error));




        },

        search:function(){
            this.fetchWeather(document.querySelector('.search-bar').value);
        },
    };

    document.querySelector('.search button').addEventListener("click",function(){
        weather.search();
    });

    document.querySelector('.search-bar').addEventListener('keyup',function(event){
        if(event.key==='Enter'){
            weather.search()
        }
    });

    weather.fetchWeather("Bengaluru")
