
document.querySelectorAll("#nav-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("check").checked = false;
    })


})



function displayData() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = "";

    comments.forEach((comment, index) => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const h3 = document.createElement("h3");
        h3.textContent = comment.name;

        const p = document.createElement("p");
        p.textContent = comment.message;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Cancle Membership";
        deleteBtn.onclick = function () {
            const userEmail = prompt("Please enter your email to delete this comment:")
            if (userEmail === comment.email || userEmail === "chetancdi077@gmail.com") {
                deleteComment(index);
            } else {
                alert("You can only Cancle your Membership.")
            }


        };

        commentDiv.append(h3, p, deleteBtn);
        commentsDiv.append(commentDiv);
    });
}

function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    displayData();
}

if (!localStorage.getItem("comments")) {
    const initialComments = [
        { name: "John Doe", message: "This is a comment." },
        { name: "Jane Smith", message: "Another comment." }
    ];
    localStorage.setItem("comments", JSON.stringify(initialComments));
}


window.onload = displayData;