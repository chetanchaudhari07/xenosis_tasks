var localst = JSON.parse(localStorage.getItem("user"));
   
    var name = document.querySelector("h1").textContent = localst.username
    console.log(name);