document.querySelector("form").addEventListener("submit",displaydata);


function displaydata(event){
    event.preventDefault();

    var storelogdata = JSON.parse(localStorage.getItem("user"));
    console.log(storelogdata)
    
 var usernum =    document.getElementById("usernum").value;
    console.log(usernum)

    
    if (storelogdata.Number === usernum) {
        window.alert(`Username: ${storelogdata.username}
            Email: ${storelogdata.email}
            Password: ${storelogdata.pass}
            Phone Number: ${storelogdata.Number}`);
    } else {
        window.alert("User does not exist or incorrect password");
    }

}