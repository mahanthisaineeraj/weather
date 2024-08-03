let inputEl=document.getElementById("input");
let buttonEl=document.getElementById("button");
let spanEl=document.getElementById("span");
let conditionsEl=document.getElementById("conditions");
let temperatureEl=document.getElementById("temperature");
let windSpeedEl=document.getElementById("windSpeed");
let containerEl = document.getElementById("containerEl");
windSpeedEl.style.marginBottom="20px";
let apik="75f5b42f3aa458b177367a02bfcba1d3";

function convertion(val){
    return (val-273).toFixed(3);
}


let options={
    method:"GET"
}

let temperature = null;

buttonEl.addEventListener("click",function(){
    let resultsContainerEl=document.getElementById("resultsContainer");
    resultsContainerEl.style.display="block";
    let url='https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid='+apik;
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spanEl.textContent=jsonData['name'];
        conditionsEl.textContent=jsonData['weather']['0']['description'];
        temperatureEl.textContent=convertion(jsonData['main']['temp'])+" C";
        temperature = parseFloat(convertion(jsonData['main']['temp']));
        if(temperature>=27 & temperature<=35)
            {
                containerEl.style.backgroundImage = "url('https://www.reallusion.com/ContentStore/CTA/Pack/G3-Animation-Suite-Weather-Maker/images/sunny.jpg')";
            }
        if(temperature>=18 & temperature<=26)
            {
                containerEl.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/cartoon-clouds-evening-sky-vector-600nw-1174942900.jpg')";
            }
        if(temperature<18)
            {
                containerEl.style.backgroundImage = "url('https://img.freepik.com/free-vector/nature-raining-scene_1308-22369.jpg')";
            }
            
        windSpeedEl.textContent=jsonData['wind']['speed']+" Km/h";
    })
    .catch(err => alert("You entered Wrong city name"))
});
