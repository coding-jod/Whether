async function fetchData(city) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd8cb31d54fmshe83616052c756b4p1d4a4cjsnacc88ecb7179',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    // console.log(typeof result)
    // console.log(result.temp)
    cloud=document.getElementById("cloud_pct_"+city)
  // console.log(cloud.innerHTML)
	cloud.innerHTML=result.cloud_pct
  tem=document.getElementById("temp_"+city)

  tem.innerHTML=result.temp
  feel_like=document.getElementById("feels_like_"+city)
  feel_like.innerHTML=result.feels_like
  sunse=document.getElementById("sunset_"+city)

  sunse.innerHTML=result.sunset
  sunris=document.getElementById("sunrise_"+city)
  sunris.innerHTML=result.sunrise
  humid=document.getElementById("humidity_"+city)
  humid.innerHTML=result.humidity
  wind_de=document.getElementById("wind_degrees_"+city)
  wind_de.innerHTML=result.wind_degrees
  wind_spe=document.getElementById("wind_speed_"+city)
  wind_spe.innerHTML=result.wind_speed
  max_te=document.getElementById("max_temp_"+city)
  max_te.innerHTML=result.max_temp
  min_te=document.getElementById("min_temp_"+city)
  min_te.innerHTML=result.min_temp
//   console.log(temp)
} catch (error) {
	console.error(error);
}
  }
  
  fetchData("Delhi");
  fetchData("Istanbul");
  fetchData("Paris");
  fetchData("London");

  async function fetchDat(city) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd8cb31d54fmshe83616052c756b4p1d4a4cjsnacc88ecb7179',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  city_name.innerHTML=city;
  cloud_pct.innerHTML=result.cloud_pct
  temp.innerHTML=result.temp
  temp2.innerHTML=result.temp
  feels_like.innerHTML=result.feels_like
  humidity.innerHTML=result.humidity
  humidity2.innerHTML=result.humidity
  min_temp.innerHTML=result.min_temp
  max_temp.innerHTML=result.max_temp
  wind_speed.innerHTML=result.wind_speed
  wind_speed2.innerHTML=result.wind_speed
  wind_degrees.innerHTML=result.wind_degrees
  sunrise.innerHTML=result.sunrise
  sunset.innerHTML=result.sunset
} catch (error) {
	console.error(error);
}
  }
  fetchDat("Delhi")
// //    // Call the async function to start the process


submit.addEventListener("click",(e)=>{
  e.preventDefault()
  fetchDat(citi.value)
})
//   </th>
  // <td id="cloud_pct_delhi"></td>

 
//   "cloud_pct": 100, "temp": 13, "feels_like": 13, "humidity": 90, "min_temp": 11, "max_temp": 17, "wind_speed": 2.57, "wind_degrees": 340, "sunrise": 1697120604, "sunset": 1697160476
// temp.innerHTML=result.temp
// feels_like.innerHTML=result.feels_like
// humidity.innerHTML=result.humidity
// min_temp.innerHTML=result.min_temp
// max_temp.innerHTML=result.max_temp
// wind_speed.innerHTML=result.wind_speed
// wind_degrees.innerHTML=result.wind_degrees
// sunrise.innerHTML=result.sunrise
// sunset.innerHTML=result.sunset

// <td id="temp_Istanbul" ></td>
// <td id="feels_like_Istanbul" ></td>
// <td id="humidity_Istanbul" ></td>
// <td id="min_temp_Istanbul" ></td>
// <td id="max_temp_Istanbul" ></td>
// <td id="wind_speed_Istanbul" ></td>
// <td id="wind_degrees_Istanbul" ></td>
// <td id="sunrise_Istanbul" ></td>
// <td id="sunset_Istanbul" ></td>