// ALL NAVBAR LINK
let boxShadowLink = document.getElementById("box-shadow");
let textShadowLink = document.getElementById("text-shadow");
let borderRadiusLink = document.getElementById("border-radius");
let linearGradientLink = document.getElementById("linear-gradient");
let animationLink = document.getElementById("animation");



// ALL CONTROLS VARIABLES
let sectionControl = document.querySelectorAll(".section-control");

let boxShadowControl = document.getElementById("box-shadow-control")





// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------


function showSection(sectionId){
    // Hide all section controls
    sectionControl.forEach(section => {
        section.classList.remove("active");
    });


    // Show the selected section control
    const selectedControl = document.getElementById(`${sectionId}-control`);
    if (selectedControl) {
        selectedControl.classList.add("active");
    }

// --------------------------------------------------------------------------------

    // NVBAR LINK ACTIVE OR NOT
    const newActiveLink = document.getElementById(sectionId);
    if (newActiveLink) {
        newActiveLink.classList.add("active");
    }

    const activeLink = document.querySelector(".navbar li.active");
    if (activeLink) {
        activeLink.classList.remove("active");
    }
}














































