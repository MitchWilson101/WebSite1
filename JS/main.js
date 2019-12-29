

//Initialize and add the map

var map;
      function initMap() {
          //Your location.
          var loc = {lat:56.191071 , lng:-3.217415};
          //centerd map on location
       var  map = new google.maps.Map(document.querySelector('.map'), {
         zoom: 4, center: loc});

          
      
           //The marker, position at locaton
           var marker = new google.maps.Marker({position: loc, map:
        map});
      }

     // Sticky menu background

      window.addEventListener('scroll',function() {

          if(window.scrollY > 150) {
              document.querySelector('#navbar').style.opacity = 0.9;
          } else {
              document.querySelector('#navbar').style.opacity = 1;
          }
      });

      //Smooth scrolling

      $('#navbar a').on('click',function(event){
          
        if (this.hash != ''){

         event.preventDefault();
         const hash = this.hash;

         $('html, body').animate(
           {
               scrollTop: $(hash).offset().top - 100
           },
           1000
         );
        }
   });