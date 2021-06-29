

// TODO: click submit weather for the next 5 days

// TODO: responsive and mobile friendly

let status = document.querySelector(".status");
let place = document.querySelector(".place");
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

        for ( let i = 0; i < weatherData["list"].length; i++) {
            let obj = weatherData["list"][i];
            console.log(obj);
        }

        // today
        let today = new Date(weatherData["list"][0]["dt"]*1000);
        let hour1 = today.getHours(weatherData["list"][0]["dt"]%12);
        //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //var dateTime = date+' '+time;
        document.querySelector(".hourValue").innerHTML = hour1;
        console.log(today);

        // tomorrow
        let tomorrow = new Date(weatherData["list"][0]["dt"]*1000);
        tomorrow.setDate(today.getDate() + 1);
        let hour2 = tomorrow.getHours(weatherData["list"][0]["dt"]%12);
        document.querySelector(".hourValue2").innerHTML = hour2;
        console.log(tomorrow);

        // day3
        let day3 = new Date(weatherData["list"][0]["dt"]*1000);
        day3.setDate(today.getDate() + 2);
        let hour3 = day3.getHours(weatherData["list"][0]["dt"]%12);
        document.querySelector(".hourValue3").innerHTML = hour3;
        console.log(day3);

        // day4
        let day4 = new Date(weatherData["list"][0]["dt"]*1000);
        day4.setDate(today.getDate() + 3);
        let hour4 = day4.getHours(weatherData["list"][0]["dt"]%12);
        document.querySelector(".hourValue4").innerHTML = hour4;
        console.log(day4);

        // day5
        let day5 = new Date(weatherData["list"][0]["dt"]*1000);
        day5.setDate(today.getDate() + 4);
        let hour5 = day5.getHours(weatherData["list"][0]["dt"]%12);
        document.querySelector(".hourValue5").innerHTML = hour5;
        console.log(day5);

        }

            let cityValue = weatherData["name"];
            let tempValue = weatherData["list"][i]["main"]["temp"];
            let statusValue = weatherData ["list"][i]["weather"][0]["description"];

            place.innerHTML = cityValue;
            temperature.innerHTML = tempValue;
            status.innerHTML = statusValue;
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

