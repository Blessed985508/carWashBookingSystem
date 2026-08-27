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

            async function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                try {

                    // Convert coordinates into an actual address
                    const response = await fetch(
                        "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="
                        + latitude
                        + "&lon="
                        + longitude
                    );

                    if (!response.ok) {
                        throw new Error("Address lookup failed");
                    }

                    const data = await response.json();

                    // Put actual address into location field
                    if (data.display_name) {

                        locationInput.value = data.display_name;

                        locationStatus.textContent =
                            "✓ Current location detected";

                    } else {

                        locationInput.value =
                            latitude + ", " + longitude;

                        locationStatus.textContent =
                            "✓ Location detected, but address could not be found.";
                    }

                    // Create Google Maps link
                    const mapsLink =
                        "https://www.google.com/maps?q="
                        + latitude + ","
                        + longitude;

                    // Store Google Maps link
                    locationInput.dataset.mapsLink = mapsLink;

                } catch (error) {

                    console.error(error);

                    // If address lookup fails, keep coordinates as backup
                    locationInput.value =
                        latitude + ", " + longitude;

                    locationStatus.textContent =
                        "✓ Location detected, but address could not be found.";
                }

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


// ================= MOBILE MENU =================

function toggleMenu() {

    const navbar = document.getElementById("navbar");
    const menuButton = document.querySelector(".menu-button i");

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-xmark");

    } else {

        menuButton.classList.remove("fa-xmark");
        menuButton.classList.add("fa-bars");

    }

}

// Close mobile menu after clicking a navigation link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar = document.getElementById("navbar");
        const menuButton = document.querySelector(".menu-button i");

        navbar.classList.remove("active");

        menuButton.classList.remove("fa-xmark");
        menuButton.classList.add("fa-bars");

    });

});