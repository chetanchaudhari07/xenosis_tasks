

document.querySelectorAll("#nav-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("check").checked = false;
    })


})

document.getElementById("visitform").addEventListener("submit", function (event) {
    event.preventDefault();
    addComment();
    document.getElementById("visitform").reset();



});


function getData() {
    const name = document.getElementById("name").value
    const message = document.getElementById("message").value
    const email = document.getElementById("email").value;
    return { name, email, message };

}



function addComment() {
    const { name, message, email } = getData();
    if (!name || !message || !email) {
        alert("plese fill out all fields");
        return
    }

    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name, message, email });
    localStorage.setItem("comments", JSON.stringify(comments));


}

function checkMembership() {
    const email = prompt("Please enter your email to check membership status:");

    if (email) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const isMember = comments.some(comment => comment.email === email);

        if (isMember) {
            alert("Your membership is confirmed!");
        } else {
            alert("You are not a member yet. Please fill out the membership form.");
            document.getElementById("visitform").style.display = "block";
        }
    } else {
        alert("Email is required to check membership.");
    }
}

function bookShedule() {
    const email = prompt("plese enter your email to check membership status:");

    if (email) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const isMember = comments.some(comment => comment.email === email);

        if (isMember) {
            alert("You are a confirmed member. Please proceed to book your schedule.");
            document.getElementById("calenderModal").style.display = "block";
        } else {
            alert("You are not a member yet. Please join the membership to book a schedule.");
        }
    } else {
        alert("Email is required to check membership.");
    }



}

function confirmBooking() {
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;

    if (date && time) {
        alert(`Your schedule is booked for ${date} at ${time}.`);
        document.getElementById("calendarModal").style.display = "none";
    } else {
        alert("Please select a date and time for your appointment.");
    }
}


