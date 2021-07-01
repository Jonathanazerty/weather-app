
let inputCity = document.querySelector(".inputCity");
let button = document.querySelector(".button");

let status = document.querySelector(".status");
let place = document.querySelector(".place");
let date = document.querySelector(".date");
let temperature = document.querySelector(".temperature");

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

            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            let today = new Date();
            let month = today.getMonth();
            let datee = today.getDate();
            let day = today.getDay();
            let year = today.getFullYear();

            newdate = days[day] + ", " + datee+ " " + months[month] + " " + year;

            status.innerHTML = statusValue;
            place.innerHTML = cityValue + " 📍";
            date.innerHTML = newdate;
            temperature.innerHTML = degrees + "°C 🌡️";
            console.log(today);
            

            // TOMORROW
            let tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            let month2 = tomorrow.getMonth();
            let datee2 = tomorrow.getDate();
            let day2 = tomorrow.getDay();
            let year2 = tomorrow.getFullYear();

            newdate2 = days[day2] + ", " + datee2+ " " + months[month2] + " " + year2;
            
            let statusValue2 = weatherData["list"][5]["weather"][0]["description"];
            let tempValue2 = weatherData["list"][5]["main"]["temp"];

            degrees2 = Math.round(tempValue2-273);

            status2.innerHTML = statusValue2;
            date2.innerHTML = newdate2;
            temperature2.innerHTML = degrees2 + "°C 🌡️";
            console.log(tomorrow);



            // DAY 3
            let day3 = new Date();
            day3.setDate(today.getDate() + 2);

            let month3 = day3.getMonth();
            let datee3 = day3.getDate();
            let daythree = day3.getDay();
            let year3 = day3.getFullYear();

            newdate3 = days[daythree] + ", " + datee3+ " " + months[month3] + " " + year3;

            let statusValue3 = weatherData["list"][13]["weather"][0]["description"];
            let tempValue3 = weatherData["list"][13]["main"]["temp"];

            degrees3 = Math.round(tempValue3-273);

            status3.innerHTML = statusValue3;
            date3.innerHTML = newdate3;
            temperature3.innerHTML = degrees3 + "°C 🌡️";
            console.log(day3);



            // DAY 4
            let day4 = new Date();
            day4.setDate(today.getDate() + 3);

            let month4 = day4.getMonth();
            let datee4 = day4.getDate();
            let dayfour = day4.getDay();
            let year4 = day4.getFullYear();

            newdate3 = days[dayfour] + ", " + datee4+ " " + months[month4] + " " + year4;

            let statusValue4 = weatherData["list"][21]["weather"][0]["description"];
            let tempValue4 = weatherData["list"][21]["main"]["temp"];

            degrees4 = Math.round(tempValue4-273);

            status4.innerHTML = statusValue4;
            date4.innerHTML = newdate3;
            temperature4.innerHTML = degrees4 + "°C 🌡️";
            console.log(day4);



            // DAY 5
            let day5 = new Date();
            day5.setDate(today.getDate() + 4);

            let month5 = day5.getMonth();
            let datee5 = day5.getDate();
            let dayfive = day5.getDay();
            let year5 = day5.getFullYear();

            newdate3 = days[dayfive] + ", " + datee5+ " " + months[month5] + " " + year5;

            let statusValue5 = weatherData["list"][29]["weather"][0]["description"];
            let tempValue5 = weatherData["list"][29]["main"]["temp"];

            degrees5 = Math.round(tempValue5-273);

            status5.innerHTML = statusValue5;
            date5.innerHTML = newdate3;
            temperature5.innerHTML = degrees5 + "°C 🌡️";
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

