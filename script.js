// Sample hospital data
const hospitals = [
          { name: 'Osmania General Hospital', lat: 17.3898, lng: 78.4864 },
          { name: 'Medicover Hospitals, Hitec City', lat: 17.4474, lng: 78.3804 },
          { name: 'Star Hospitals, Banjara Hills', lat: 17.4104, lng: 78.4396 },
          { name: 'Care Hospitals, Banjara Hills', lat: 17.4170, lng: 78.4394 },
          { name: 'Sunshine Hospitals, Secunderabad', lat: 17.4454, lng: 78.4987 },
          { name: 'Virinchi Hospitals, Banjara Hills', lat: 17.4122, lng: 78.4397 },
          { name: 'Apollo Hospitals, Jubilee Hills', lat: 17.4236, lng: 78.4346 },
          { name: 'Yashoda Hospitals, Secunderabad', lat: 17.4315, lng: 78.4837 },
          { name: 'Continental Hospitals, Gachibowli', lat: 17.4349, lng: 78.3444 },
          { name: 'KIMS Hospitals, Secunderabad', lat: 17.4382, lng: 78.4982 },
          { name: 'Osmania General Hospital', lat: 17.3898, lng: 78.4864 },
          { name: 'Care Hospitals, Banjara Hills', lat: 17.4170, lng: 78.4394 },
          { name: 'Sunshine Hospitals, Secunderabad', lat: 17.4454, lng: 78.4987 },
          { name: 'Virinchi Hospitals, Banjara Hills', lat: 17.4122, lng: 78.4397 },
          { name: 'Star Hospitals, Banjara Hills', lat: 17.4104, lng: 78.4396 },
          { name: 'Medicover Hospitals, Hitec City', lat: 17.4474, lng: 78.3804 },
          { name: 'KIMS Bibi Hospital, Malakpet', lat: 17.3702, lng: 78.5016 },
          { name: 'Sunshine Hospitals, Gachibowli', lat: 17.4271, lng: 78.3505 },
          { name: 'Basavatarakam Indo-American Cancer Hospital, Banjara Hills', lat: 17.4128, lng: 78.4487 },
          { name: 'Olive Hospitals, Mehdipatnam', lat: 17.3896, lng: 78.4402 },
          { name: 'MaxCure Hospitals, Secretariat Road', lat: 17.4092, lng: 78.4639 },
          { name: 'Asian Institute of Gastroenterology (AIG), Somajiguda', lat: 17.4285, lng: 78.4552 },
          { name: 'Gleneagles Global Hospitals, Lakdi-Ka-Pul', lat: 17.4037, lng: 78.4667 },
          { name: 'Sunrise Hospitals, Secunderabad', lat: 17.4431, lng: 78.4881 },
          { name: 'Deccan Hospitals, Somajiguda', lat: 17.4262, lng: 78.4513 },
          { name: 'Hyderabad Kidney and Laparoscopic Centre, Malakpet', lat: 17.3717, lng: 78.5024 }
    // Add more hospital data as needed
];

// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 17.385044, lng: 78.486671 }, // Center the map on Hyderabad
        zoom: 12,
    });

    // Create markers for each hospital
    hospitals.forEach(hospital => {
        const marker = new google.maps.Marker({
            position: { lat: hospital.lat, lng: hospital.lng },
            map: map,
            title: hospital.name,
        });

        // Add click event listener to show ratings
        marker.addListener('click', function () {
            showInfoWindow(hospital);
        });
    });
}

// Function to show an info window with hospital ratings
function showInfoWindow(hospital) {
    const contentString = `<div>
        <h2>${hospital.name}</h2>
        <p>Rating: ${hospital.rating}</p>
    </div>`;

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    infowindow.open(map, marker);
}
