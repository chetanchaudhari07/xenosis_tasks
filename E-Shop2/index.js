
let  image = [ './71_PC._CB568307876_.jpg',
    './611xsDgQ9DL._SX3000_.jpg',
    './D151005745_IN_WLA_AugART24_Gateway_PC_Hero_3000x1200._CB566514818_.jpg',
    './Main-event_V1_Travel_PC_Hero_3000x1200._CB566455694_.jpg',

]

let currentIndex = 0;
let interval;
const slideshow = document.getElementById("slideshow");


function showImage(index){
    slideshow.src = image[index];
}

function nextImage(){
    currentIndex = (currentIndex +1)%image.length;
    showImage(currentIndex);
}

function preImage(){
    currentIndex = (currentIndex -1 + image.length)%image.length;
    showImage(currentIndex);
}


function startSlideshow(){
    interval = setInterval(nextImage, 2000);
}

document.getElementById("next").addEventListener("click",()=>{
    nextImage();
    clearInterval(interval);
    startSlideshow();
});

document.getElementById("previous").addEventListener("click",()=>{
    preImage();
    clearInterval(interval);
    startSlideshow();
})

showImage(currentIndex);
startSlideshow();


let url = 'https://fakestoreapi.com/products'




document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcons = document.querySelector('.menu-icons');
  const navCenter = document.getElementById('nav-center');

  menuToggle.addEventListener('click', () => {
      menuIcons.classList.toggle('show');
      navCenter.classList.toggle('show');
  });
});

const contanier = document.getElementById("container")
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displaydata = (data)=>{
 
    contanier.innerHTML = ""
    data.forEach((ele) => {

       
        
        let box = document.createElement("div")

        // let num = document.createElement("p")
        // num.textContent=ele.id


       

        let image1 = document.createElement("img")
        image1.src = ele.image

       

        let price1 = document.createElement("h2")
        price1.textContent=ele.price

        let des1 = document.createElement("p")
        des1.textContent = ele.description

        let rating1 = document.createElement("p")
        rating1.textContent=ele.rating

        let title1  = document.createElement("h2")
        title1.textContent=ele.title

        const cartbtn = document.createElement("button")
        cartbtn.textContent = "Add-To-cart";
        cartbtn.addEventListener("click",()=>{
          alert(`${ele.title} added to cart`);
          addTocart(ele);
        })

        box.append(image1,price1,des1,rating1,title1,cartbtn)
        contanier.append(box)
        


    });



}

const addTocart = (product)=>{
  cart.push(product);
  localStorage.setItem("cart",JSON.stringify(cart));
}



const getdata= async(url)=>{
  try {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

   
    displaydata(data)
  } catch (error) {
    console.log(error)
    
  }
}


getdata(url)

document.getElementById("product").addEventListener("change", ()=>{
    let sortValue = document.getElementById("product").value
    console.log(sortValue);

    let sortedUrl;
    if (sortValue === 'ince') {
        sortedUrl = `${url}?sort=asc`;
    } else if (sortValue === 'desc') {
        sortedUrl = `${url}?sort=desc`;
    } else {
        sortedUrl = url;
    }

    getdata(sortedUrl);
});

