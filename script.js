// Show the booking form
function showBookingForm(packageName) {

    const modal = document.getElementById("booking-modal");

    const packageInput = document.getElementById("selected-package");

    packageInput.value = packageName || "Not selected";

    modal.style.display = "flex";
}


// Close the booking form
function closeBookingForm() {

    const modal = document.getElementById("booking-modal");

    modal.style.display = "none";
}


// Get customer's current location
function getCurrentLocation() {

    const locationInput = document.getElementById("location");
    const locationStatus = document.getElementById("location-status");

    if (navigator.geolocation) {

        locationStatus.textContent = "Getting your location...";

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Put coordinates into location field
                locationInput.value =
                    latitude + ", " + longitude;

                // Create Google Maps link
                const mapsLink =
                    "https://www.google.com/maps?q="
                    + latitude + ","
                    + longitude;

                // Store Google Maps link
                locationInput.dataset.mapsLink = mapsLink;

                locationStatus.textContent =
                    "✓ Current location detected";

            },

            function (error) {

                locationStatus.textContent =
                    "Unable to get your location. Please enter it manually.";

            }
        );

    } else {

        locationStatus.textContent =
            "Location services are not supported by your browser.";

    }
}


// Send booking to WhatsApp
function sendToWhatsApp(event) {

    event.preventDefault();

    const form = document.getElementById("booking-form");

    const name =
        form.elements["name"].value;

    const phone =
        form.elements["phone"].value;

    const vehicle =
        form.elements["vehicle"].value;

    const packageName =
        form.elements["package"].value;

    const locationInput =
        document.getElementById("location");

    const location =
        locationInput.value;

    const mapsLink =
        locationInput.dataset.mapsLink || "No GPS location provided";

    const date =
        form.elements["date"].value;

    const time =
        form.elements["time"].value;


    const message =
        " *NEW CAR WASH BOOKING*%0A%0A" +

        " *Name:* " + name + "%0A" +

        " *Phone:* " + phone + "%0A" +

        " *Vehicle:* " + vehicle + "%0A" +

        " *Package:* " + packageName + "%0A" +

        " *Location:* " + location + "%0A" +

        " *Google Maps:* " + mapsLink + "%0A" +

        " *Date:* " + date + "%0A" +

        " *Time:* " + time;


    // YOUR WHATSAPP NUMBER
    const whatsappNumber = "27797777469";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    window.open(whatsappURL, "_blank");
}