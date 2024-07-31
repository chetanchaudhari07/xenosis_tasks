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

