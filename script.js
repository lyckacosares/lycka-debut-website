const debutDate = new Date("August 10, 2026 17:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = debutDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   if (distance <= 0) {

    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";

} else {

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

},1000);

let currentPerson = "";

function openLetter(name,id){

    document.getElementById("letterPopup").style.display="flex";

    document.getElementById("personName").innerHTML=name;

    currentPerson=id;

    document.querySelector(".password-box").style.display="block";

    document.getElementById("letterContent").style.display="none";

    document.getElementById("passwordInput").value="";

}

function unlockLetter() {

    const password = document.getElementById("passwordInput").value;

    const person = letters[currentPerson];

    if (!person) {
        alert("Letter not found.");
        return;
    }

    if (password !== person.password) {
        alert("Incorrect password.");
        return;
    }

    // Hide password box
    document.querySelector(".password-box").style.display = "none";

    // Show letter
    document.getElementById("letterContent").style.display = "block";

    document.getElementById("letterName").textContent = person.name;

    document.getElementById("letterText").textContent = person.letter;

}


// Close popup when clicking X
const closeBtn = document.querySelector(".close");

if (closeBtn) {
    closeBtn.onclick = function () {
        document.getElementById("letterPopup").style.display = "none";
    }
}
// Close popup when clicking outside
window.onclick = function(event){

    const popup = document.getElementById("letterPopup");

    if(event.target == popup){

        popup.style.display = "none";

    }

}

console.log("THIS IS THE NEW SCRIPT");

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(

".countdown, .details, .program, .eighteen-card, .venue, .wish-container, footer"

);

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

function sendReply() {

    const person = letters[currentPerson];

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeiO2r01Y12-HV4tkrcfjASZ6pfYaull-rLdt9lacO1yu7XUw/viewform?usp=pp_url&entry.1279032423=" + encodeURIComponent(person.name);

    window.open(formURL, "_blank");

}