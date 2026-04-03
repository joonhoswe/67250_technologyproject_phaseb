var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello";
var B = "World";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var sum = x1 + x2;
    console.log(sum);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
    if (C.length < z) {
        console.log(z);
    }
}
else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

const greetingElement = document.getElementById("greeting");

function greeting(currentHour) {
    if (!greetingElement) {
        return;
    }

    if (currentHour < 5 || currentHour >= 20) {
        greetingElement.innerHTML = "Good night!";
    }
    else if (currentHour < 12) {
        greetingElement.innerHTML = "Good morning!";
    }
    else if (currentHour < 18) {
        greetingElement.innerHTML = "Good afternoon!";
    }
    else {
        greetingElement.innerHTML = "Good evening!";
    }
}

greeting(new Date().getHours());

function addYear() {
    const copyYear = document.getElementById("copyYear");

    if (!copyYear) {
        return;
    }

    copyYear.innerHTML = new Date().getFullYear() + " MonoMuse. All rights reserved.";
}

function ActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function(link) {
        const href = link.getAttribute("href");

        if (!href || href.indexOf("javascript:") === 0) {
            return;
        }

        const linkPage = href.split("/").pop();

        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

function initializeMap() {
    const mapElement = document.getElementById("map");

    if (!mapElement || !window.L) {
        return;
    }

    var lat = 40.443527;
    var lng = -79.949979;
    var zoom = 16;
    var map = L.map("map").setView([lat, lng], zoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);
}

initializeMap();

if (window.jQuery) {
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}

function createPlaceholderImage(label) {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 360'><rect width='600' height='360' fill='#D9D9D9'/><text x='300' y='180' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='28' fill='#111111'>" + label + "</text></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
}

function setFallbackImage(imageId, label) {
    const image = document.getElementById(imageId);

    if (!image) {
        return;
    }

    const placeholderImage = createPlaceholderImage(label);

    image.addEventListener("error", function() {
        image.src = placeholderImage;
    });

    if (!image.getAttribute("src")) {
        image.src = placeholderImage;
    }

    if (image.complete && image.naturalWidth === 0) {
        image.src = placeholderImage;
    }
}

setFallbackImage("logo", "MonoMuse Logo");
setFallbackImage("exploreImage", "Museum Image Placeholder");

const gallerySlides = [
    {
        src: "../static/images/museum1.jpg",
        alt: "Museum gallery image 1",
        caption: "Exterior"
    },
    {
        src: "../static/images/museum2.jpeg",
        alt: "Museum gallery image 2",
        caption: "Famous Statues"
    },
    {
        src: "../static/images/museum3.jpeg",
        alt: "Museum gallery image 3",
        caption: "Famous Paintings"
    }
];

function setGalleryImageSource(imageElement, imagePath) {
    imageElement.onerror = null;
    imageElement.src = imagePath;
}

function initSlideshow() {
    const galleryImage = document.getElementById("galleryImage");
    const galleryCaption = document.getElementById("galleryCaption");
    const previousButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    if (!galleryImage || !galleryCaption || !previousButton || !nextButton) {
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {
        const currentImage = gallerySlides[index];

        setGalleryImageSource(galleryImage, currentImage.src);
        galleryImage.alt = currentImage.alt;
        galleryCaption.innerHTML = currentImage.caption;
    }

    previousButton.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % gallerySlides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

initSlideshow();

function startCheckout(selectedDate) {
    window.location.href = "checkout.html?date=" + encodeURIComponent(selectedDate);
}

function updateCheckoutTotal() {
    const quantityInput = document.getElementById("quantity");
    const totalOutput = document.getElementById("orderTotal");

    if (!quantityInput || !totalOutput) {
        return;
    }

    let quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
    }

    totalOutput.innerHTML = "$" + (quantity * 18).toFixed(2);
}

function initCheckoutForm() {
    const checkoutForm = document.getElementById("checkoutForm");

    if (!checkoutForm) {
        return;
    }

    const visitDate = document.getElementById("visitDate");
    const ticketType = document.getElementById("ticketType");
    const quantity = document.getElementById("quantity");
    const email = document.getElementById("email");
    const zip = document.getElementById("zip");
    const checkoutError = document.getElementById("checkoutError");
    const pageParams = new URLSearchParams(window.location.search);
    const savedDate = pageParams.get("date");

    if (savedDate) {
        visitDate.value = savedDate;
    }

    quantity.addEventListener("input", updateCheckoutTotal);
    ticketType.addEventListener("change", updateCheckoutTotal);
    updateCheckoutTotal();

    checkoutForm.addEventListener("submit", function(event) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const zipPattern = /^\d{5}$/;
        const ticketQuantity = parseInt(quantity.value, 10);

        event.preventDefault();
        checkoutError.innerHTML = "";

        if (!visitDate.value) {
            checkoutError.innerHTML = "Please select a visit date.";
            return;
        }

        if (!ticketType.value) {
            checkoutError.innerHTML = "Please select a ticket type.";
            return;
        }

        if (isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 10) {
            checkoutError.innerHTML = "Please enter a ticket quantity from 1 to 10.";
            return;
        }

        if (!emailPattern.test(email.value)) {
            checkoutError.innerHTML = "Please enter a valid email address.";
            return;
        }

        if (zip.value !== "" && !zipPattern.test(zip.value)) {
            checkoutError.innerHTML = "Zip code must be five digits.";
            return;
        }

        const total = (ticketQuantity * 18).toFixed(2);
        const confirmationParams = new URLSearchParams({
            confirmation: "1",
            date: visitDate.value,
            type: ticketType.value,
            quantity: ticketQuantity,
            total: total
        });

        window.location.href = "tickets.html?" + confirmationParams.toString();
    });
}

initCheckoutForm();

function formatDisplayDate(dateValue) {
    if (!dateValue) {
        return "";
    }

    const formattedDate = new Date(dateValue + "T12:00:00");

    if (isNaN(formattedDate.getTime())) {
        return dateValue;
    }

    return formattedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

function showConfirmation() {
    const confirmationSection = document.getElementById("confirmationSection");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmationTotal = document.getElementById("confirmationTotal");

    if (!confirmationSection || !confirmationMessage || !confirmationTotal) {
        return;
    }

    const pageParams = new URLSearchParams(window.location.search);

    if (pageParams.get("confirmation") !== "1") {
        return;
    }

    const date = formatDisplayDate(pageParams.get("date"));
    const type = pageParams.get("type") || "general";
    const quantity = pageParams.get("quantity") || "1";
    const total = pageParams.get("total") || "18.00";
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    confirmationSection.style.display = "block";
    confirmationMessage.innerHTML = "Your order has been placed for " + quantity + " " + capitalizedType + " ticket(s) on " + date + ".";
    confirmationTotal.innerHTML = "Total cost: $" + total;
}

showConfirmation();

function toggleNav() {
    var x = document.querySelector(".nav_bar");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } else {
        x.className = "nav_bar";
    }
}

