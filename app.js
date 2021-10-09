const colors = ["green", "red", "pink", "cyan", "violet", "purple", "orange", "brown", "grey", "gold", "yellow", "maroon"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    console.log(document.body)

    //get random number between 0-3
    const randomNumber = getRandomNum()
    console.log(randomNumber)
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRandomNum() {
    let col = Math.random() * colors.length
    return Math.floor(col)
}

btn.addEventListener("click", function() {

    if (btn.classList.contains("black")) {
        btn.classList.remove("black")

    } else {

        btn.classList.add("black")
    }
})