const rgb5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// rgb(000,000,000)
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    let rgbColor = `rgb`
    let rgb1 = ""
    for (let i = 0; i < 3; i++) {
        rgb1 += rgb5[randomNo()]
    }

    let rgb2 = ""
    for (let i = 0; i < 3; i++) {
        rgb2 += rgb5[randomNo()]
    }
    let rgb3 = ""
    for (let i = 0; i < 3; i++) {
        rgb3 += rgb5[randomNo()]
    }
    rgbColor = `rgb(${rgb1},${rgb2},${rgb3})`
    color.textContent = rgbColor
    document.body.style.background = rgbColor
})


function randomNo() {
    return Math.floor(Math.random() * rgb5.length)
}
btn.addEventListener("click", function() {

    if (btn.classList.contains("black")) {
        btn.classList.remove("black")

    } else {

        btn.classList.add("black")
    }
})