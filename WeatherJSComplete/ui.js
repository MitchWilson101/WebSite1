class UI {
    constructor(){
        //Location h1 header top
        this.location = document.getElementById('w-location');
        //short description of the weather 
        this.desc = document.getElementById('w-desc');
        //current tem large at top
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        //weather icon
        this.icon = document.getElementById('w-icon');
        // Humidity 
        this.humidity = document.getElementById('w-humidity');
        //Feels like 
        this.feelsLike = document.getElementById('w-feels-like');
        //current wind speed.
        this.wind = document.getElementById('w-wind');
        //surface pressure
        this.pressure = document.getElementById('w-pressure');

        

        
    }
    paint(weather){
        

        //Location H1 header top
        this.location.textContent = weather.location.name;
        // Short description of the weather.
         
        this.desc.textContent = weather.current.condition.text;
        // current temp large at top degrees \u00B0C
        this.string.textContent = `${weather.current.temp_c}\u00B0C (${weather.current.temp_f})\u00B0F`;
        //Icon depicting  the current weather.
        this.icon.setAttribute('src',weather.current.condition.icon);
        //Humidtiy
        this.humidity.textContent = `Relative humidity: ${weather.current.humidity}% `;
        //current wind speed.
        this.wind.textContent = `Wind speed: ${weather.current.wind_kph}  kph/ Gusts: ${weather.current.gust_kph} kph`;
        // Feels like. 
        this.feelsLike.textContent =`Feels like: ${weather.current.feelslike_c}\u00B0C` ;


        this.pressure.textContent =`Surface pressure: ${weather.current.pressure_mb} mb` ;
        //this.details.textContent = 'testing'
        
    }
}
