// TODO: user enter city of choice

// TODO: click submit weather for the next 5 days

// TODO: responsive and mobile friendly

// TODO: 

// TODO get information from OpenWeather
let city = document.querySelector(".nameCity");
let inputCity = document.querySelector(".inputCity");

// TODO: date of today

var date = new Date();
var hour = date.getHours();

document.getElementById("submit").addEventListener("click", function(){

    // TODO async method
    async function weatherAllData(){

        try{
        let data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=68d5f1c6c15d8ca90e89bd90e1f55dc6");
        let weather = await data.json();
        }
        catch(error){
            alert("Wrong name... please write the correct city name")
        }
        console.log(weather);
        console.log(Object.keys(weather));
        console.log(Object.values(weather));
    }
});

