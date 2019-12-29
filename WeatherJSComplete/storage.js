class Storage {
    constructor(params) {
        this.postCode;
        this.defaultPostCode = 'ky7';

    }
    getLocationData(){
        if(localStorage.getItem('postCode')===null){
          this.postCode = this.defaultPostCode;
        }else {
           this.postCode = localStorage.getItem('postCode');
        }
      return { postCode: this.postCode}
    }
    setLocationData(postCode){
          localStorage.setItem('postCode',postCode);
    }
}