
// init getAPI.js 
const apiGet = new GetAPI();
//console.log(apiGet);

// init ui.js   

const ui = new UI();
//ui.paint(apiGet.getApi());

getAPI();

function getAPI(){
    apiGet.getApi()
    .then(results =>{
        
        ui.paint(results);
    })
    .catch(err => console.log(err));
    }