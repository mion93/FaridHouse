// Index Gallery Carousel

$('.carousel').carousel({
	interval: 2000
})


// SCROLL TOP BUTTON


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Toggle Animation for each kind of massages, that shows description and prices. 
$(document).ready(function(){
  $('.blockquote-footer').hide(0); 
  $('.myButton2').click(function(){
     $('.blockquote-footer').toggle();

  });
});




// Alert Modal in Navbar that shows Covid-19 Informations
var modal = document.getElementById("myModal");

var btn = document.getElementById("myMod");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// EMAIL API, once the form is submitted an Email is received to Email.js and an alert will show up.

function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
             alert('Your enquiry was sent, thank you!');
             console.log("SUCCESS", response);
               
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}








// GOOGLE MAPS API


function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 51.504140, 
      lng: -0.104861,
    },
  });
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var locations = [
    { lat: 51.504140, lng: -0.104861 },
    { lat: 51.516268, lng: -0.130071 },
  
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
