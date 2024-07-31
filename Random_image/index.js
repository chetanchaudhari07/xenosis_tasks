let url = "https://pixabay.com/api/?key=45143134-498fd3b648c37111ab47fec3d"

document.getElementById("btn").addEventListener("click", () => {

    getdata(url);



})


const container = document.getElementById("container")


const displaydata = (data) => {
    container.innerHTML="";
    window.imageData = data;
    data.forEach((ele) => {
        let box = document.createElement("div")

        let image1 = document.createElement("img")
        image1.src = ele.largeImageURL

        let name = document.createElement("h1")
        name.textContent = ele.user

        box.append(image1, name)
        container.append(box)
    })


}




const getdata = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        displaydata(data.hits);

    } catch (error) {
        console.log(error)
    }
}


document.getElementById("next").addEventListener("click",()=>{
   
    displayrandomeImage();
})


const displayrandomeImage = ()=>{
    const numberOfImages = 20; 
    if (window.imageData && window.imageData.length > 0) {
        container.innerHTML = "";
        let indices = [];
        
        while (indices.length < numberOfImages) {
            const randomIndex = Math.floor(Math.random() * window.imageData.length);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }

        indices.forEach(index => {
            const randomImage = window.imageData[index];
            let box = document.createElement("div")

            let image1 = document.createElement("img");
            image1.src = randomImage.largeImageURL;

            let name = document.createElement("h1");
            name.textContent = randomImage.user;

            box.append(image1, name);
            container.append(box);
        });
    }
}

