class UI {
    constructor(){
        this.mainTitle = document.querySelector('.title-main')
        this.title = document.querySelector('.title-header')
        this.desc = document.querySelector('#i-desctiption')
        this.test = document.querySelector('body')
        this.date = document.querySelector('#i-date')
        this.footer = document.querySelector('#i-footer')
        
    }

 paint(info){
     this.mainTitle.textContent = info.title;
     this.title.innerHTML = `<img  src=${info.hdurl} alt="nasa pix"> `;
     this.desc.textContent = info.explanation;
     let fDate = new Date(info.date);
     
     this.date.textContent = moment(fDate).format('dddd MMMM D Y');

     this.footer.innerHTML = `<p>NASA ${info.copyright} &copy;</p>`;
     
     console.log(info.copyright);

 }
}

// var date = new Date(2013, 1, 12);
// console.log(moment(date).format('dddd MMMM D Y'));