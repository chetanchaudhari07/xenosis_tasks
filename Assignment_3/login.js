
document.querySelector('form').addEventListener("submit",loginpage)


function loginpage(event){
    event.preventDefault();

    var loguser = document.getElementById("loguser").value;
    var logpass = document.getElementById("logpass").value;
    console.log(loguser,logpass)

   


var storelogdata = JSON.parse(localStorage.getItem("user"));


    if (storelogdata.username === loguser && storelogdata.pass === logpass) {
        window.location.href="Dashboard.html";
    } else {
        window.alert("User does not exist or incorrect password");
    }
} 



