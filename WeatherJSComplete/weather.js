class Weather{
    constructor(postCode){
 this.apiKey = '851bbfc86b714fdf98680509201201';
 this.city = postCode;
 
    }
    //Fetch weather from API
    async getWeather(){
        
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        const responseData = await response.json();
       //console.log(responseData);
        return responseData;
    }
   //Change weather location
   changeLocation(postCode){
       this.city = postCode;
       
   }
}

// https://cors-anywhere.herokuapp.com/ this stops the cors error.
