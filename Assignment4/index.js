let url = 'https://fakestoreapi.com/products'


const contanier = document.getElementById("container")

const displaydata = (data)=>{
 
    contanier.innerHTML = ""
    data.forEach((ele) => {

       
        
        let box = document.createElement("div")

        // let num = document.createElement("p")
        // num.textContent=ele.id


       

        let image1 = document.createElement("img")
        image1.src = ele.image

       

        let price1 = document.createElement("h1")
        price1.textContent=ele.price

        let des1 = document.createElement("p")
        des1.textContent = ele.description

        let rating1 = document.createElement("p")
        rating1.textContent=ele.rating

        let title1  = document.createElement("h")
        title1.textContent=ele.title

        box.append(image1,price1,des1,rating1,title1)
        contanier.append(box)
        


    });

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




