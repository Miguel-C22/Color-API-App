const mode = document.getElementById("mode")
const colorInput = document.getElementById("colorInput")
const getColor = document.getElementById("getColor")
const displayColors = document.getElementById("displayColors")
const displayHexValues = document.getElementById("displayHexValues")
const body = document.querySelector('body')

fetch(`https://www.thecolorapi.com/scheme?hex=000000&mode=triad&count=5`)
.then(response => response.json())
.then(data => {
    let hex = data.colors.map(a => a.hex.value)
    displayColors.innerHTML =`
    <img src="${data.image.bare}" alt=""></img>
    `
    displayHexValues.innerHTML = `
    <p>${hex.join(" ")}</p>
    `
    colorPicked()
})

function colorPicked(){
    getColor.addEventListener('click', function(){
        let a = colorInput.value
        let b = a[1]+ a[2] +a[3]+ a[4]+ a[5] +a[6]
        console.log(b)
        fetch(`https://www.thecolorapi.com/scheme?hex=${b}&mode=${mode.value}&count=5`)
        .then(response => response.json())
        .then(data => {
            let hex = data.colors.map(a => a.hex.value)
            console.log(hex)

            displayColors.innerHTML = `
            <img src="${data.image.bare}" alt=""></img>
            `
            displayHexValues.innerHTML = `
            <p>${hex.join(" ")}</p>
            `
            body.style.background = `linear-gradient(${hex[4]}, ${hex[3]}, ${hex[2]},${hex[1]},${hex[0]})`

        })
     })
}




