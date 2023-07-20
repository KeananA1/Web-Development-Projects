let colors =["green", "red", "blue", "cyan", "aquamarine", "brown", "orange"]

const changer = document.getElementById("changer")
const color = document.querySelector(".color")
let headingEl = document.getElementById("heading-el")

changer.addEventListener("click", function(){
    const randomNum = getRandomColor()
    document.body.style.backgroundColor = colors[randomNum]
})




function getRandomColor(){
    return Math.floor(Math.random()*colors.length)

}


