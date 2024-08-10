const cartlist = document.getElementById("cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCart = () => {
    cartlist.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - $${item.price.toFixed(2)}`;

        const itemdelete = document.createElement("button");
        itemdelete.textContent = "Remove";

        itemdelete.addEventListener("click", () => {
          removeItem(index);
        })

        cartlist.append(li,itemdelete)
    })




}

const removeItem =(index)=>{
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
}



updateCart();