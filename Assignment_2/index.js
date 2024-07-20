let count = 0;
let time =null ;

document.getElementById("start").addEventListener("click",function(){
 if(time == null){
    time =  setInterval(() => {
        count++;
        document.querySelector("h1").textContent = count
    }, 1000);

 }
})

document.getElementById("increment").addEventListener("click",function(){
    if (time !== null) {
        clearInterval(time);
        time = null;
    }
    count++;
    document.querySelector("h1").textContent = count
        document.querySelector("h1").textContent = count
    
})

document.getElementById("decrement").addEventListener("click",function(){
    if (time !== null) {
        clearInterval(time);
        time = null;
    }
    count--;
    document.querySelector("h1").textContent = count
})

document.getElementById("reset").addEventListener("click",function(){
    if (time !== null){
    clearInterval(time);
    time = null;
    }
    count = 0;
    document.querySelector("h1").textContent = count
})