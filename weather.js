
function myFunc(){
    let searchCity = document.getElementById("city").value
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=05c901ddcec1da0cd7677c081f6ea978")
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
    console.log(data);
        temperature(data);
  })
  .catch(function() {
    // catch any errors
  });
};

  function temperature(data){
	var temp = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
    console.log(temp);
    document.getElementById('location').innerHTML = "Location:  " + data.name;
    document.getElementById('description').innerHTML = "Weather Description:  " + data.weather[0].description;
    document.getElementById('temp').innerHTML = "Temperature in Farenheit:  " + temp + '&deg;';
    


  }
   