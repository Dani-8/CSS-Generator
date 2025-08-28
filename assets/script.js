// ALL NAVBAR LINK
let boxShadowLink = document.getElementById("box-shadow");
let textShadowLink = document.getElementById("text-shadow");
let borderRadiusLink = document.getElementById("border-radius");
let linearGradientLink = document.getElementById("linear-gradient");
let animationLink = document.getElementById("animation");

// ALL CONTROLS VARIABLES
let sectionControl = document.querySelectorAll(".section-control");
let sectionContent = document.querySelectorAll(".section-content");


// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------


// FUNCTION FOR SHOW THE SELECTED CONTROLS & CONTENT SECTION
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








// FUNCTION TO UPDATE THE BOX SHADOW PREVIEW & CODE
let horiShadowRange = document.getElementById("box-shadow-horizontal-range")
let vertiShadowRange = document.getElementById("box-shadow-vertical-range")
let blurShadowRange = document.getElementById("box-shadow-blur-range")
let spreadShadowRange = document.getElementById("box-shadow-spread-range")
let boxShadowColor = document.getElementById("box-shadow-color")
let boxShadowInset = document.getElementById("box-shadow-inset-check")

let boxShadowBox = document.getElementById("box-shadow-box")
let boxShadowCode = document.getElementById("box-shadow-code")

function updateBoxShadow() {
    // GET VALUES 
    let x = horiShadowRange.value
    let y = vertiShadowRange.value
    let b = blurShadowRange.value
    let s = spreadShadowRange.value
    let color = boxShadowColor.value
    let inset = boxShadowInset.checked


    let boxShadowCodeValue = boxShadowBox.style.boxShadow = `${x}px ${y}px ${b}px ${s}px ${color}80 ${inset ? 'inset' : ''}`

    //CSS_CODE: box-shadow: 0px 0px 30px rgba(0,0,0);
    boxShadowCode.textContent = `box-shadow: ${boxShadowCodeValue};`
    
    // UPDATE THE DISPLAY VALUES
    document.getElementById("box-shadow-horizontal-value").textContent = x
    document.getElementById("box-shadow-vertical-value").textContent = y
    document.getElementById("box-shadow-blur-value").textContent = b
    document.getElementById("box-shadow-spread-value").textContent = s
}

horiShadowRange.addEventListener("input", updateBoxShadow)
vertiShadowRange.addEventListener("input", updateBoxShadow)
blurShadowRange.addEventListener("input", updateBoxShadow)
spreadShadowRange.addEventListener("input", updateBoxShadow)
boxShadowColor.addEventListener("input", updateBoxShadow)
boxShadowInset.addEventListener("input", updateBoxShadow)


// -----------------------------------------------------------------------------------------

// FUNCTION TO UPDATE TEXT SHADOW PREVIEW & CODE
let textHoriShadowRange = document.getElementById("text-shadow-horizontal-range")
let textVertiShadowRange = document.getElementById("text-shadow-vertical-range")
let textBlurShadowRange = document.getElementById("text-shadow-blur-range")
let textShadowColor = document.getElementById("text-shadow-color")
let textInput = document.getElementById("text-input");

let textShadowBox = document.getElementById("text-shadow-box")
let textShadowCode = document.getElementById("text-shadow-code")

function updateTextShadow() {
    // GET VALUES
    textShadowBox.textContent = textInput.value;
    let x = textHoriShadowRange.value
    let y = textVertiShadowRange.value
    let b = textBlurShadowRange.value
    let color = textShadowColor.value

    let textShadowCodeValue = textShadowBox.style.textShadow = `${x}px ${y}px ${b}px ${color}80`

    //CSS_CODE: text-shadow: 0px 0px 30px rgba(0,0,0);
    textShadowCode.textContent = `text-shadow: ${textShadowCodeValue};`

    // UPDATE THE DISPLAY VALUES
    document.getElementById("text-shadow-horizontal-value").textContent = x
    document.getElementById("text-shadow-vertical-value").textContent = y
    document.getElementById("text-shadow-blur-value").textContent = b
}

textHoriShadowRange.addEventListener("input", updateTextShadow)
textVertiShadowRange.addEventListener("input", updateTextShadow)
textBlurShadowRange.addEventListener("input", updateTextShadow)
textShadowColor.addEventListener("input", updateTextShadow)
textInput.addEventListener("input", updateTextShadow);


// -----------------------------------------------------------------------------------------

// FUNCTION TO UPDATE BORDER RADIUS PREVIEW & CODE
let borderSize = document.getElementById("border-range")
let borderType = document.getElementById("border-type-select")
let borderColor = document.getElementById("border-color")

let borderRadiusAllCorners = document.getElementById("border-radius-all-corners")
let borderRadiusTopLeft = document.getElementById("border-radius-top-left")
let borderRadiusTopRight = document.getElementById("border-radius-top-right")
let borderRadiusBottomRight = document.getElementById("border-radius-bottom-right")
let borderRadiusBottomLeft = document.getElementById("border-radius-bottom-left")

let borderBox = document.getElementById("border-box")
let borderCode = document.getElementById("border-code")

function updateBorder() {
    // GET VALUES
    let size = borderSize.value
    let type = borderType.value
    let color = borderColor.value

    let allCorners = borderRadiusAllCorners.value
    let topLeft = borderRadiusTopLeft.value
    let topRight = borderRadiusTopRight.value
    let bottomRight = borderRadiusBottomRight.value
    let bottomLeft = borderRadiusBottomLeft.value



    let borderCodeValue = borderBox.style.border = `${size}px ${type} ${color}80`


    const finalBorderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
    borderBox.style.borderRadius = finalBorderRadius;

    //CSS_CODE: border: 1px solid rgba(0,0,0);
    borderCode.innerHTML = `border: ${borderCodeValue}; <br> border-radius: ${finalBorderRadius};`



    // UPDATE THE DISPLAY VALUES
    document.getElementById("border-value").textContent = size + "px"

    document.getElementById("border-radius-all-corners-values").textContent = allCorners + "px"
    document.getElementById("border-radius-top-left-value").textContent = topLeft + "px"
    document.getElementById("border-radius-top-right-value").textContent = topRight + "px"
    document.getElementById("border-radius-bottom-right-value").textContent = bottomRight + "px"
    document.getElementById("border-radius-bottom-left-value").textContent = bottomLeft + "px"
}

borderSize.addEventListener("input", updateBorder)
borderType.addEventListener("input", updateBorder)
borderColor.addEventListener("input", updateBorder)

borderRadiusAllCorners.addEventListener("input", () => {
    const val = borderRadiusAllCorners.value;

    borderRadiusTopLeft.value = val;
    borderRadiusTopRight.value = val;
    borderRadiusBottomRight.value = val;
    borderRadiusBottomLeft.value = val;
    updateBorder();
});
borderRadiusTopLeft.addEventListener("input", updateBorder)
borderRadiusTopRight.addEventListener("input", updateBorder)
borderRadiusBottomRight.addEventListener("input", updateBorder)
borderRadiusBottomLeft.addEventListener("input", updateBorder)


// -----------------------------------------------------------------------------------------

// FUNCTION TO UPDATE LINEAR GRADIENT PREVIEW & CODE
let gradientAngle = document.getElementById("linear-gradient-angle")
let gradientColor1 = document.getElementById("linear-gradient-color-1")
let gradientColor2 = document.getElementById("linear-gradient-color-2")

let linearGradientBox = document.getElementById("linear-gradient-box")
let linearGradientCode = document.getElementById("linear-gradient-code")

function updateLinearGradient() {
    // GET VALUES
    let angle = gradientAngle.value
    let color1 = gradientColor1.value
    let color2 = gradientColor2.value

    // UPDATE PREVIEW BOX
    linearGradientBox.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`

    // UPDATE CODE
    linearGradientCode.innerHTML = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`

    // DISPLAY ANGLE VALUE
    document.getElementById("linear-gradient-angle-value").textContent = angle + "deg"
}

gradientAngle.addEventListener("input", updateLinearGradient)
gradientColor1.addEventListener("input", updateLinearGradient)
gradientColor2.addEventListener("input", updateLinearGradient)


// -----------------------------------------------------------------------------------------

// FUNCTION TO UPDATE ANIMATION PREVIEW & CODE
let animationDuration = document.getElementById("animation-duration")
let animationTimingFunction = document.getElementById("animation-timing-function")
let animationIterationCount = document.getElementById("animation-iteration-count")

let animationBox = document.getElementById("animation-box")
let animationCode = document.getElementById("animation-code")

function updateAnimation() {
    // GET VALUES
    let duration = animationDuration.value
    let timingFunction = animationTimingFunction.value
    let iterationCount = animationIterationCount.value

    // UPDATE PREVIEW BOX
    animationBox.style.animation = `example ${duration}s ${timingFunction} ${iterationCount}`

    // UPDATE CODE
    animationCode.innerHTML = `animation: example ${duration}s ${timingFunction} ${iterationCount};`
}

animationDuration.addEventListener("input", updateAnimation)
animationTimingFunction.addEventListener("input", updateAnimation)
animationIterationCount.addEventListener("input", updateAnimation)











