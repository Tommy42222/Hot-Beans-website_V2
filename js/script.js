document.getElementById("apply-button").addEventListener("click", openform);
function openform() {
    document.getElementById("apply-form-container").style.display = "block";
    document.getElementById("apply-button").style.display = "none"
    document.getElementById("close-button").style.display = "block"
}

document.getElementById("close-button").addEventListener("click", closeform);
function closeform() {
    document.getElementById("apply-form-container").style.display = "none"
    document.getElementById("apply-button").style.display = "block"
    document.getElementById("close-button").style.display = "none"
}
