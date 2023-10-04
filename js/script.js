$(document).ready(function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var accuracy = position.coords.accuracy;
            
         
            var locationText = "Latitude: " + latitude + ", Longitude: " + longitude + ", Accuracy: " + accuracy + " meters";
            document.getElementById("locationhere").textContent = locationText;
            
          
            checkLocalStorage(latitude, longitude);
        }, function(error) {
            if (error.code === 1) {
                alert("Please allow geolocation to use this application.");
            } else {
                alert("Geolocation is not available on your device.");
            }
        });
    } else {
        alert("Geolocation is not available in your browser.");
    }
    
    function checkLocalStorage(latitude, longitude) {
        var storedLocation = localStorage.getItem("location");
        
        if (storedLocation) {
            var newTag = document.createElement("p");
            newTag.textContent = "Stored Location: " + storedLocation;
            document.body.appendChild(newTag);
            
            var welcomeHeader = document.createElement("h2");
            welcomeHeader.textContent = "Welcome back to the page!";
            document.body.appendChild(welcomeHeader);
            
            var distance = calculateDistance(storedLocation, latitude, longitude);
            
            var distanceMessage = document.createElement("p");
            distanceMessage.textContent = "You traveled " + distance + " since your last visit.";
            document.body.appendChild(distanceMessage);
        } else {
            var welcomeHeader = document.createElement("h1");
            welcomeHeader.textContent = "Welcome to the page for the first time!";
            document.body.appendChild(welcomeHeader);
        }
        
        localStorage.setItem("location", latitude + ", " + longitude);
    }
    
    function calculateDistance(storedLocation, latitude, longitude) {
        var storedCoords = storedLocation.split(', ');
        var storedLat = parseFloat(storedCoords[0]);
        var storedLon = parseFloat(storedCoords[1]);
        
        var distanceMeters = calcDistanceBetweenPoints(storedLat, storedLon, latitude, longitude);
        
        var distanceKilometers = (distanceMeters / 1000).toFixed(2); 
        return distanceKilometers + " km";
    }
    
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; 
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});
