const input = document.getElementById('input');
const btn = document.getElementById('btn');
const form = document.querySelector('form');
let key = `5e53c76dc84c7411aa1cf445333ad07a`;
const div = document.querySelector(".details");
const body = document.querySelector('body');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let city = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{

        div.innerHTML = "";

        let city = data.name;
        let country = data.sys.country;
        let temp = data.main.temp - 273.5;
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;
        let wind = data.wind.speed;

        
        if(icon == "10n" || icon == "10d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        }
        else if(icon == "01n" || icon == "01d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)"
        }
        else if(icon == "50n" || icon == "50d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1525891618908-24765267dab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)"
        }
        else if(icon == "13n" || icon == "13d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1083&q=80)"
        }
        else if(icon == "11n" || icon == "11d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)"
        }
        else if(icon == "09n" || icon == "09d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1438260483147-81148f799f25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)"
        }
        else if(icon == "04n" || icon == "04d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1626370236204-de9e30886839?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80)"
        }
        else if(icon == "03n" || icon == "03d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1495933925743-bb94d1d4ea4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        }
        else if(icon == "04n" || icon == "04d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1626370236204-de9e30886839?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80)"
        }
        else if(icon == "02n" || icon == "02d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1470334165954-365e14d84faa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)"
        }
        else if(icon == "04n" || icon == "04d"){
            body.style.backgroundImage = "url(https://images.unsplash.com/photo-1626370236204-de9e30886839?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80)"
        }

        div.innerHTML = `
        <div class="location">${city}, ${country}</div>
        <div><i class="fas fa-wind"></i> ${wind} km/h</div><br>
        <div class="temp">${Math.ceil(temp)}&#8451</div><br>
        <div class="des">${description}</div>
        <div class="image"><img src="http://openweathermap.org/img/wn/${icon}@4x.png"></div>
        `

        // div.append(`${city}, ${country}`)
        // // div.append(img)
        // div.append(description)
        // console.log(icon)


        
    })
    .catch(err =>{        
        div.innerHTML = "";

        div.innerHTML = `City not found.`
    })

    


    input.value = "";
});