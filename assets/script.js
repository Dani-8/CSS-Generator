// ALL NAVBAR LINK
let boxShadowLink = document.getElementById("box-shadow");
let textShadowLink = document.getElementById("text-shadow");
let borderRadiusLink = document.getElementById("border-radius");
let linearGradientLink = document.getElementById("linear-gradient");
let animationLink = document.getElementById("animation");



// ALL CONTROLS VARIABLES
let sectionControl = document.querySelectorAll(".section-control");
let sectionContent = document.querySelectorAll(".section-content");

let boxShadowControl = document.getElementById("box-shadow-control")





// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------


function showSection(sectionId){
    // Hide all section control/content
    sectionControl.forEach(control => {
        control.classList.remove("active");
    });
    sectionContent.forEach(content => {
        content.classList.remove("active");
    });


    // Show the selected section control/content
    const selectedControl = document.getElementById(`${sectionId}-control`);
    if (selectedControl) {
        selectedControl.classList.add("active");
    }
    const selectedContent = document.getElementById(`${sectionId}-content`);
    if (selectedContent) {
        selectedContent.classList.add("active");
    }

// --------------------------------------------------------------------------------

    // NAVBAR LINK ACTIVE OR NOT
    // Remove .active from all navbar li
    document.querySelectorAll('.navbar ul li').forEach(li => li.classList.remove('active'));
    // Add .active to the clicked li
    document.getElementById(sectionId).classList.add('active');
}














































