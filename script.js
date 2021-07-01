

let status = document.querySelector(".status");
let place = document.querySelector(".place");
let date = document.querySelector(".date");
let temperature = document.querySelector(".temperature");
let inputCity = document.querySelector(".inputCity");
let button = document.querySelector(".button");

let status2 = document.querySelector(".status2");
let date2 = document.querySelector(".date2");
let place2 = document.querySelector(".place2");
let temperature2 = document.querySelector(".temperature2");

let status3 = document.querySelector(".status3");
let date3 = document.querySelector(".date3");
let place3 = document.querySelector(".place3");
let temperature3 = document.querySelector(".temperature3");

let status4 = document.querySelector(".status4");
let date4 = document.querySelector(".date4");
let place4 = document.querySelector(".place4");
let temperature4 = document.querySelector(".temperature4");

let status5 = document.querySelector(".status5");
let date5 = document.querySelector(".date5");
let place5 = document.querySelector(".place5");
let temperature5 = document.querySelector(".temperature5");




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
            
            }
            
            // average temperature to degrees celcius
            average = average / weatherData["list"].length;
            degrees = Math.round(average-273);

            // TODAY
            let cityValue = weatherData["city"]["name"];
            let tempValue = weatherData["list"][0]["main"]["temp"];
            let statusValue = weatherData["list"][0]["weather"][0]["description"];

            let today = new Date(weatherData["list"][0]["dt"]*1000);
            status.innerHTML = statusValue;
            place.innerHTML = cityValue + " 📍";
            date.innerHTML = today;
            temperature.innerHTML = "Average " + degrees + "°C 🌡️";
            console.log(today);
            

            // TOMORROW
            let tomorrow = new Date(weatherData["list"][5]["dt"]*1000);

            
            let statusValue2 = weatherData["list"][5]["weather"][0]["description"];
            let tempValue2 = weatherData["list"][5]["main"]["temp"];

            degrees2 = Math.round(tempValue2-273);

            status2.innerHTML = statusValue2;
            date2.innerHTML = tomorrow;
            temperature2.innerHTML = "Average " + degrees2 + "°C 🌡️";
            //document.querySelector(".date2").innerHTML = tomorrow.setDate(today.getDate() + 1);
            // document.querySelector(".status2").innerHTML = status2;
            console.log(tomorrow);



            // DAY 3
            let day3 = new Date(weatherData["list"][13]["dt"]*1000);

            let statusValue3 = weatherData["list"][13]["weather"][0]["description"];
            let tempValue3 = weatherData["list"][13]["main"]["temp"];

            degrees3 = Math.round(tempValue3-273);

            status3.innerHTML = statusValue3;
            date3.innerHTML = day3;
            temperature3.innerHTML = "Average " + degrees3 + "°C 🌡️";
            // document.querySelector(".status3").innerHTML = status3;
            console.log(day3);



            // DAY 4
            let day4 = new Date(weatherData["list"][21]["dt"]*1000);

            let statusValue4 = weatherData["list"][21]["weather"][0]["description"];
            let tempValue4 = weatherData["list"][21]["main"]["temp"];

            degrees4 = Math.round(tempValue4-273);

            status4.innerHTML = statusValue4;
            date4.innerHTML = day4;
            temperature4.innerHTML = "Average " + degrees4 + "°C 🌡️";
            // document.querySelector(".status4").innerHTML = status4;
            console.log(day4);



            // DAY 5
            let day5 = new Date(weatherData["list"][29]["dt"]*1000);

            let statusValue5 = weatherData["list"][29]["weather"][0]["description"];
            let tempValue5 = weatherData["list"][29]["main"]["temp"];

            degrees5 = Math.round(tempValue5-273);

            status5.innerHTML = statusValue5;
            date5.innerHTML = day5;
            temperature5.innerHTML = "Average " + degrees5 + "°C 🌡️";
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

