let counterEl = document.querySelector("#counter-el")
let counter = 0
let colors = ["green", "red", "black"]

const decreaseBtn = document.querySelector("#decrease-btn")
decreaseBtn.addEventListener("click", function(){
    counter -= 1
    counterEl.textContent = counter

    render()
})

const resetBtn = document.querySelector("#reset-btn")
resetBtn.addEventListener("click", function(){
    counter = 0
    counterEl.textContent = counter

    render()
})

const increaseBtn = document.querySelector("#increase-btn")
increaseBtn.addEventListener("click", function(){
    counter += 1
    counterEl.textContent = counter

    render()
})


function render(){
    if(counter>0){
        counterEl.style.color = colors[0]
    }

    else if(counter<0){
        counterEl.style.color = "red"
    }

    else{
        counterEl.style.color = "black"
    }
}
