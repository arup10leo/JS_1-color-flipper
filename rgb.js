const rgb7 = [0, 1, 2, 3, 4, 5]

// rgb(000,000,000)
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    let rgbColor = `rgb`
    let rgb1 = ""
    let rgb4 = ""
    for (let a = 0; a < 1; a++) {
        rgb4 += rgb7[randomNo1()]
    }
    for (let i = 0; i < 2; i++) {
        rgb1 += rgb7[randomNo()]
    }


    let rgb2 = ""
    let rgb5 = ""
    for (let a = 0; a < 1; a++) {
        rgb5 += rgb7[randomNo1()]
    }
    for (let i = 0; i < 2; i++) {
        rgb2 += rgb7[randomNo()]
    }
    let rgb3 = ""
    let rgb6 = ""
    for (let a = 0; a < 1; a++) {
        rgb6 += rgb7[randomNo1()]
    }
    for (let i = 0; i < 2; i++) {
        rgb3 += rgb7[randomNo()]
    }
    rgbColor = `rgb(${rgb4}${rgb1},${rgb5}${rgb2},${rgb6}${rgb3})`
    color.textContent = rgbColor
    document.body.style.background = rgbColor
})


function randomNo() {
    return Math.floor(Math.random() * rgb7.length)
}

function randomNo1() {
    return Math.floor(Math.random() * 3)
}
btn.addEventListener("click", function() {

    if (btn.classList.contains("black")) {
        btn.classList.remove("black")

    } else {

        btn.classList.add("black")
    }
})
