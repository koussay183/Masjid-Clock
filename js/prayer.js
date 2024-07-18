function myFunction(x) {
    x.classList.toggle("change");
    if (x.classList.contains("change")) {
        openDrawer();
    } else {
        closeDrawer();

    }

}

function openDrawer() {
    document.getElementById("myDrawer").style.left = "auto";
    // document.getElementById("mainContent").style.marginLeft = "250px"; // Adjust this value to match the width of the drawer
}

function closeDrawer() {
    document.getElementById("myDrawer").style.left = "-150px"; // Adjust this value to match the width of the drawer
    // document.getElementById("mainContent").style.marginLeft = "0";
}


function makeAd() {
    document.getElementById('adLabel').innerHTML = document.getElementById('adField').value;
}

function $(id) {
    return document.getElementById(id);
}

function signoutClick() {
    window.location.href = 'index.html';
}

// // Function to show password input
// function showPasswordInput() {
//     document.getElementById("passwordInput").style.display = "block";
// }

// // Function to verify password and enable drawer content
// function verifyPassword() {
//     var password = document.getElementById("passwordField").value;

//     // You can replace 'yourPassword' with the correct password
//     if (password === "1234") {
//         enableDrawer();
//     } else {
//         alert("Incorrect password");
//     }
// }

// Function to disable drawer content
// function disableDrawer() {
//     var elements = document.getElementsByClassName("doundo");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].setAttribute('disabled', 'true');
//     }
//     document.getElementById("enableButton").removeAttribute('disabled');
//     document.getElementById("disableButton").setAttribute('disabled', 'true');
//     document.getElementById("passwordField").value = "";
// }

// // Function to enable drawer content
// function enableDrawer() {
//     var elements = document.getElementsByClassName("doundo");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].removeAttribute("disabled");
//     }
//     document.getElementById("disableButton").removeAttribute('disabled');
//     document.getElementById("enableButton").setAttribute('disabled', 'true');
//     document.getElementById("passwordInput").style.display = "none";

// }