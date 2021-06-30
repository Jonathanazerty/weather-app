

let status = document.querySelector(".status");
let place = document.querySelector(".place");
let date = document.querySelector(".date");
let temperature = document.querySelector(".temperature");
let inputCity = document.querySelector(".inputCity");
let button = document.querySelector(".button");



document.getElementById("submit").addEventListener("click", function(){


    // TODO async method
    async function weatherAllData(){

        // TODO get information from OpenWeather
        try{
            let data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputCity.value +"&appid=68d5f1c6c15d8ca90e89bd90e1f55dc6");
            let weatherData = await data.json();
            console.log(weatherData);
                {
                
            // loop over data
            let average = 0;
        for ( let i = 0; i < weatherData["list"].length; i++) {
            let obj = weatherData["list"][i];
            average += weatherData["list"][i]["main"]["temp"];
            
            console.log(obj);
            
            }

            // average temperature to degrees celcius
            average = average / weatherData["list"].length;
            degrees = Math.round(average-273);
            console.log({degrees});

            // get data from json
            let cityValue = weatherData["city"]["name"];
            let tempValue = weatherData["list"][0]["main"]["temp"];
            let statusValue = weatherData["list"][0]["weather"][0]["description"];
            console.log(tempValue);

            // today
            let today = new Date(weatherData["list"][0]["dt"]*1000);
            status.innerHTML = statusValue;
            place.innerHTML = cityValue + " 📍";
            date.innerHTML = today;
            temperature.innerHTML = degrees + "°C 🌡️";
            console.log(today);
            
            // obj["clouds"]["dt_txt"] = today;

            // TODO: click submit weather for the next 5 days

            // tomorrow
            let tomorrow = new Date(weatherData["list"][0]["dt"]*1000);
            tomorrow.setDate(today.getDate() + 1);
            //document.querySelector(".date2").innerHTML = tomorrow.setDate(today.getDate() + 1);
            // document.querySelector(".status2").innerHTML = status2;
            console.log(tomorrow);



            // day3
            let day3 = new Date(weatherData["list"][0]["dt"]*1000);
            day3.setDate(today.getDate() + 2);
            document.querySelector(".date3")
            // document.querySelector(".status3").innerHTML = status3;
            console.log(day3);



            // day4
            let day4 = new Date(weatherData["list"][0]["dt"]*1000);
            day4.setDate(today.getDate() + 3);
            // document.querySelector(".status4").innerHTML = status4;
            console.log(day4);



            // day5
            let day5 = new Date(weatherData["list"][0]["dt"]*1000);
            day5.setDate(today.getDate() + 4);
            // document.querySelector(".status5").innerHTML = status5;
            console.log(day5);

                }   
            }

        // document.getElementById(temperature).innerHTML = "Currently" + (weather.temperature);

        
        catch(error){
            alert("Wrong name... please write the correct city name");
            console.log(error);
            }

        // TODO : setIcons(icon, document.querySelector(".icon"));
    }

    weatherAllData();
});


    /* TODO: icon 
    function setIcons(icon, iconID) {
        let skycons = new Skycons({"color": "black"});
        let currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
*/

