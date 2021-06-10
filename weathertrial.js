const butto = document.getElementById('button');
const proxy = "https://cors-anywhere.herokuapp.com"
butto.addEventListener('click', function (name) {
    let inputvalue = document.getElementById('inputing').value;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=0f88c6ee3bac90c205a452cd8274b9d6`
    document.querySelector(".reply").style.display="block";
    console.log(api)

    fetch(api).then((response) => {
        return response.json()
     })
        .then(data => {
           
            let city = document.getElementById('cityin');
            let temperature = document.getElementById('temper');
            let maxmin = document.getElementById('maxim');
           
            console.log(data)
            cityin.innerText = data.name+ "," +data.sys.country;
            temper.innerText = Math.round(data.main.temp-273)+"°C";
            maxin.innerText = Math.ceil(data.main.temp_max-273)+"°C" + "/" + Math.floor(data.main.temp_min-273)+"°C";
            description.innerText = data.weather[0].main;
            let desc = document.getElementById('description');
            if (desc.textContent == 'Clouds') {
                document.body.style.backgroundImage = "url('images/img1.jpg')"
            }
            else if (desc.textContent == 'Rain') {
               document.body.style.backgroundImage = "url('images/rain.jpg')"
            }
            else if (desc.textContent == 'Clear') {
                document.body.style.backgroundImage = "url('images/clear.jpg')"
            }
            else if(desc.textContent=="Mist")
            {
                document.body.style.backgroundImage="url('images/misty.jpg')"
            }
            else if(desc.textContent=="Snow")
            {
                document.body.style.backgroundImage="url('images/snow.jpg')"
            }
            else if(desc.textContent=="Haze")
            {
                document.body.style.backgroundImage="url('images/haze.jpg')"
            }
            else if (desc.textContent == 'Drizzle') {
                document.body.style.backgroundImage = "url('imges/rain.jpg')"
             }
        }
        )

    .catch(err => alert("Wrong city name"));
})