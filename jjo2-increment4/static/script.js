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

// function findTheBanana(arr) {
//     // for (const elem of arr) {
//     //     if (elem == "Banana") {
//     //         alert("Found!");
//     //     }
//     // }
//     arr.forEach(element => {
//         if (element == "Banana") {
//             alert("Found!");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

const now = new Date();
const hour = now.getHours();
const greetingElement = document.getElementById("greeting");

function greeting(x) {
    if (!greetingElement) {
        return;
    }

    if (x < 5 || x >= 20) {
        greetingElement.innerHTML = "Good night";
    }
    else if (x < 12) {
        greetingElement.innerHTML = "Good morning";
    }
    else if (x < 18) {
        greetingElement.innerHTML = "Good afternoon";
    }
    else {
        greetingElement.innerHTML = "Good evening";
    }
}

greeting(hour);

function addYear() {
    const copyYear = document.getElementById("copyYear");

    if (!copyYear) {
        return;
    }

    copyYear.innerHTML = new Date().getFullYear() + " MonoMuse. All rights reserved.";
}

function ActiveNav() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

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

function showPurchaseForm(selectedDate) {
    const purchaseForm = document.getElementById("purchaseForm");
    const selectedDateInput = document.getElementById("selectedDate");

    if (purchaseForm) {
        purchaseForm.style.display = "block";
    }

    if (selectedDateInput) {
        selectedDateInput.value = selectedDate;
    }
}

function redirectToPayment() {
    alert("Redirecting to payment system.");
}

