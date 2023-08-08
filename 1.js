const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57e953f643msh71334b8da75a429p1cd16ajsn633003870c79',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityname.innerHTML = city
    
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    humidity.innerHTML = response.humidity

    temp.innerHTML = response.temp
    wind_speed.innerHTML = response.wind_speed
    feels_like.innerHTML = response.feels_like
      
        
         
        
        
    })

	.catch(err => console.error(err));

}


submit.addEventListener("click",  (e)=>{
    e.preventDefault()
    getWeather(city.value)

})


getWeather("delhi")