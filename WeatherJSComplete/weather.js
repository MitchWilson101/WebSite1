class Weather{
    constructor(postCode){
 this.apiKey = '29c105619a5a457e9c2194357190712';
 this.city = postCode;
 
    }
    //Fetch weather from API
    async getWeather(){
        
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
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