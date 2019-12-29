// init storage

const storage = new Storage();
// Get stored location data

const weatherLocation = storage.getLocationData();
console.log(weatherLocation.postCode);
// init weather object

const weather = new Weather(weatherLocation.postCode);

//weather.changeLocation('ky7')

//INIT UI
const ui = new UI();



// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);
// Change location event
document.querySelector('#w-change-btn').addEventListener('click',(e)=>{
    const postCode = document.getElementById('PostCode').value;

// document.querySelector('.body').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         console.log(e.key);
//         const postCode = document.getElementById('PostCode').value;
//     } else{
//         console.log('getting there');
//     }
// });
    //Change location 
    weather.changeLocation(postCode)
    
    // Set location in local storage.
    storage.setLocationData(postCode);

    // Get and display weather for new location.
    getWeather();
    //Close modal (jquery not pure javascript)
    $('#locModal').modal('hide');
});


function getWeather(){
weather.getWeather()
.then(results =>{
    ui.paint(results);
})
.catch(err => console.log(err));
}