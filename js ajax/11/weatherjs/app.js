// Init Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// Init UI object

const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event 
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    weather.changeLocation(city, state);
    
    // Get and display weather 
    getWeather();
    storage.setLocationData(city, state);
    $('#locModal').modal('hide');
});


function getWeather() {
    
    weather.getWeather()
    .then(data =>{
        ui.paint(data);
    }).catch(err => {
        console.log(err)
    })
}
