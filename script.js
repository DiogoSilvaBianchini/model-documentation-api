document.getElementsByClassName("card")[0].addEventListener("mouseenter", (e) => {
    e.target.children[0].style.display = "none"
    e.target.children[1].style.display = "flex"
})

document.getElementsByClassName("card")[0].addEventListener("mouseleave", (e) => {
    e.target.children[0].style.display = "flex"
    e.target.children[1].style.display = "none"
})

document.getElementsByClassName("card")[1].addEventListener("mouseenter", (e) => {
    e.target.children[0].style.display = "none"
    e.target.children[1].style.display = "flex"
})

document.getElementsByClassName("card")[1].addEventListener("mouseleave", (e) => {
    e.target.children[0].style.display = "flex"
    e.target.children[1].style.display = "none"
})

document.getElementsByClassName("card")[2].addEventListener("mouseenter", (e) => {
    e.target.children[0].style.display = "none"
    e.target.children[1].style.display = "flex"
})

document.getElementsByClassName("card")[2].addEventListener("mouseleave", (e) => {
    e.target.children[0].style.display = "flex"
    e.target.children[1].style.display = "none"
})

document.getElementsByClassName("card")[3].addEventListener("mouseenter", (e) => {
    e.target.children[0].style.display = "none"
    e.target.children[1].style.display = "flex"
})

document.getElementsByClassName("card")[3].addEventListener("mouseleave", (e) => {
    e.target.children[0].style.display = "flex"
    e.target.children[1].style.display = "none"
})


const getRoutes = async () => {
    const req = await fetch("./routes.json")
    const json = await req.json()
    return json.routes
}

const constuctCards = async (method) => {
    const urls = await getRoutes()
    const products = urls.products

    const container = document.querySelector("#cardContainerDescribe")
    container.classList.remove("block")
    

    switch(method){
        case "get":
            for(let i = 0; i < products.get.length; i++){
                const template = `
                <div class="cardUrl">
                    <h2>${products.get[i].title}</h2>
                    <span>${products.get[i].url}</span>
                </div>
            `
                container.innerHTML += template
            }
            break
        case "post":
            for(let i = 0; i < products.post.length; i++){
                const template = `
                <div class="cardUrl">
                    <h2>${products.post[i].title}</h2>
                    <span>${products.post[i].url}</span>
                </div>
            `
                container.innerHTML += template
            }
            break
        case "put":
            for(let i = 0; i < products.put.length; i++){
                const template = `
                <div class="cardUrl">
                    <h2>${products.put[i].title}</h2>
                    <span>${products.put[i].url}</span>
                </div>
            `
                container.innerHTML += template
            }
            break
        case "delete":
            for(let i = 0; i < products.delete.length; i++){
                const template = `
                <div class="cardUrl">
                    <h2>${products.delete[i].title}</h2>
                    <span>${products.delete[i].url}</span>
                </div>
            `
                container.innerHTML += template
            }
            break
    }
    document.querySelector("#buttonClose").classList.remove("block")
    document.querySelector(".cards").classList.add("block")
}

const returnCards = () => {
    document.querySelector("#cardContainerDescribe").classList.add("block")
    document.querySelector(".cards").classList.remove("block")
    document.querySelector("#buttonClose").classList.add("block")

    const container = document.querySelector("#cardContainerDescribe")
    container.innerHTML = ""
}
