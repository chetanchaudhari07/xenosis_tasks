document.querySelector("form").addEventListener("submit", getData)



function getData(event){
    event.preventDefault();
    
    var username = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var num = document.getElementById("number").value;

console.log(username,email,pass,num);


var userData = {
    username : username,
    mail : email ,
    pass : pass,
    Number : num

};



localStorage.setItem("user",JSON.stringify(userData));


}





    
   