document.querySelectorAll("#nav-menu ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("check").checked = false;
    })


})