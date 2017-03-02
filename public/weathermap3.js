    'use strict';
    
    console.log("JS working UDIGG");

// Get Weather

    function findWeather (lati, long) {

        console.log('Map App Working UDIGG');

        console.log("Printing latitude...")
        console.log(lati);
        console.log("Printing longitude...")
        console.log(long);


        var $weatherID = '7f8e3aa0aad113510e0c1eaafd1c17b8';
        var $weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily'
        var $location = $('#place');
        var $panel0 = $('#panel1');
        var $panel1 = $('#panel2');
        var $panel2 = $('#panel3');
        var panelList = [$panel0, $panel1, $panel2];

        $.get($weatherUrl, {
            APPID: $weatherID,
            // q: 'San Antonio, TX',
            units: 'Imperial',
            lat: lati,
            lon: long,
            cnt: 3
            
        }).done(function(data) {
            console.log(data);
           
            $location.html("");
            $location.append(data.city.name + " " + "<span class='coordinants'>Latitude: " + data.city.coord.lat + "</span><span class='coordinants'>Longitude: " + data.city.coord.lon +"</span>");

            //forEach loop to iterate over each day of forcast (3 days total)
            data.list.forEach(function(element, index, array) {
                var content = "";
                var currentPanel = panelList[index];
                currentPanel.html("");
                console.log(currentPanel);

            
                var temprature = parseInt(element.temp.max) + "&deg;" + "/" + parseInt(element.temp.min) + "&deg;";
                var iconUrl = "http://openweathermap.org/img/w/" + element.weather[0].icon +".png";
                var conditions = "<strong>" + element.weather[0].main + "</strong>" + ": " + element.weather[0].description;
                var humidity = "<strong>Humidity</strong>" + ": " +  element.humidity + "%";
                var windSpeed = "<strong>Wind</strong>" + ": " + parseInt(element.speed) + " mph";
                var pressure = "<strong>Pressure</strong>" + ": " + parseInt(element.pressure) + " mb";
                content += "<h3>" + "Day " + (index+1) + "</h3>";
                content += "<h3>" + temprature + "</h3>";
                content += "<img src=" + iconUrl + ">";
                content += "<p>" + conditions + "</p>";
                content += "<p>" + humidity + "</p>";
                content += "<p>" + windSpeed + "</p>";
                content += "<p class='last'>" + pressure + "</p>";

              
                currentPanel.append(content);
            });
        }).fail(function() {
            console.log('EPIC FAIL.');
        });
    }

// Button and Input Fields

function buttonFunctionality () {

    console.log("button function working gangsta");

    
    var sum = 0;
    $('.inputField').each(function() {
        sum += parseFloat(this.value);
    });

    if (isNaN(sum) == false) {
        var $latitude = $('#latitude').val();
        var $longitude = $('#longitude').val();

        findWeather($latitude, $longitude);
    }

}
// GoogleMap

    // Map Options
    var mapOptions = {
        
        zoom: 4,

        center: {
            lat:  29.428070695992464,
            lng:  -98.4891371968231
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var i = 0;

    console.log(mapOptions);

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    // Add marker

    var currentPosition = {lat: 29.428070695992464, lng: -98.4891371968231 }

    var marker = new google.maps.Marker({
        position: currentPosition,
        map: map,
        draggable:true,
        title:"Drag me g!"
    });


    google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latitude").value = this.getPosition().lat();
        document.getElementById("longitude").value = this.getPosition().lng();
        buttonFunctionality();
    });

 
//Button Procedure

    
    $('#updateButton').click(function() {
        console.log('Button click worked fine pimp')
        buttonFunctionality();
    });

    
    buttonFunctionality();
    
    
    
 