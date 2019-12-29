class GetAPI{
    constructor(){
        this.apiKey = 'LoX2jNfgmeRQeVsPvve2ku3Dv6pGTs0DS901gNOG';
        this.url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`
    }
    async getApi(){
        
       const  apiInfo = await fetch(this.url);
      const   proInfo = await apiInfo.json();
      //console.log(proInfo);
      return proInfo;
    }
}