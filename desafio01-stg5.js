let buttonPlay = document.querySelector(".play")
let buttonStop = document.querySelector(".stop")
let buttonPlus = document.querySelector(".plus")
let buttonLess = document.querySelector(".less")
let cardFloresta = document.querySelector(".floresta")
let cardChuva = document.querySelector(".chuva")
let cardCafeteria = document.querySelector(".cafeteria")
let cardLareira = document.querySelector(".lareira")
let body = document.querySelector("body")
let main = document.querySelector("main")
let buttonSunMode = document.querySelector(".sunMode")
let buttonDarkMode = document.querySelector(".darkMode")
let sectionRight = document.querySelector(".right")
let timer = document.querySelector(".timer")
let fillPlay = document.querySelector(".fillPlay")
let fillStop = document.querySelector(".fillStop")
let fillPlus = document.querySelector(".fillPlus")
let fillLess = document.querySelector(".fillLess")
let cardVolume = document.querySelector(".cardVolume")


let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let putMinutes = Number(minutesDisplay.textContent)

function updateTime(putMinutes, putSeconds) {
    minutesDisplay.textContent = String(putMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(putSeconds).padStart(2, "0")
}

function countdown(fromButtonClick) {

    if (fromButtonClick) {
        putMinutes = prompt("Qual o tempo que você deseja colocar? Digite apenas números") || 0
        updateTime(putMinutes, 0)
    }

    timerTimeOut = setTimeout(function () {
        let setseconds = Number(secondsDisplay.textContent)
        let setminutes = Number(minutesDisplay.textContent)

        if (setminutes <= 0 && setseconds <= 0) {
            window.alert("O tempo acabou")
            return

        }

        if (setseconds <= 0) {
            setseconds = 5
            minutesDisplay.textContent = String(setminutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(setseconds - 1).padStart(2, "0")

        countdown(false)

    }, 1000)
}

buttonPlay.addEventListener('click', () => countdown(true))


buttonStop.addEventListener('click', function () {
    let agree = confirm("Tem certeza que deseja finalizar o Timer?")

    if (agree) {
        updateTime(0, 0)
    }
    else {
        clearTimeout(timerTimeOut)
        countdown()
    }
})

buttonPlus.addEventListener('click', function () {
    updateTime(Number(minutesDisplay.textContent) + 5, 0)
})

buttonLess.addEventListener('click', function () {
    updateTime(Number(minutesDisplay.textContent) - 5, 0)
})

let audio = new Audio('')
let card = 'floresta'

cardFloresta.addEventListener('click', function () {
    playMusic("floresta")
    changeColor("floresta")
})

cardChuva.addEventListener('click', function () {
    playMusic("chuva")
    changeColor('chuva')
})

cardCafeteria.addEventListener('click', function () {
    playMusic("cafeteria")
    changeColor('cafeteria')
})

cardLareira.addEventListener('click', function () {
    playMusic("lareira")
    changeColor('lareira')
})

function playMusic(name) {
    const mapa = {
        floresta: "Floresta.wav",
        chuva: "Chuva.wav",
        cafeteria: "Cafeteria.wav",
        lareira: "Lareira.wav",
    }
    audio.src = mapa[name]
    audio.play()
}

function changeColor (namecard) {
    document.querySelector('.floresta').classList.remove('clicked')
    document.querySelector('.chuva').classList.remove('clicked')
    document.querySelector('.cafeteria').classList.remove('clicked')
    document.querySelector('.lareira').classList.remove('clicked')

    document.querySelector(`.${namecard}`).classList.add('clicked')
}

buttonSunMode.addEventListener('click', function () {
    changeBackgroundcolor('black')
    buttonSunMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    controlsdDarkMode('numberDarkMode')
    darkmode()
})

function darkmode() {
    const cards = document.querySelectorAll(".card")

    for (const card of cards) {
        card.classList.add("dark")
    }

    const cardsVolume = document.querySelectorAll(".cardVolume")

    for( const cardVolume of cardsVolume){
        cardVolume.classList.add("dark")
    }

    const buttonControlsDark = document.querySelectorAll(".buttonControls > button")

    for( const buttonControls of buttonControlsDark){
        buttonControls.classList.add("numberDarkMode")
    }
}

function lightmode() {
    const cards = document.querySelectorAll(".card")

    for (const card of cards) {
        card.classList.remove("dark")
    }

    const cardsVolume = document.querySelectorAll(".cardVolume")

    for( const cardVolume of cardsVolume){
        cardVolume.classList.remove("dark")
    }

    const buttonControlsDark = document.querySelectorAll(".buttonControls > button")

    for( const buttonControls of buttonControlsDark){
        buttonControls.classList.remove("numberDarkMode")
    }
}

function changeBackgroundcolor(color) {
    body.style.backgroundColor = `${color}`
    main.style.backgroundColor = `${color}`
    sectionRight.style.backgroundColor = `${color}`
}

function controlsdDarkMode(buttonClass) {
    timer.classList.add(`${buttonClass}`)
}

function controlsSunMode(buttonClass) {
    timer.classList.remove(`${buttonClass}`)
}

buttonDarkMode.addEventListener('click', function () {
    controlsSunMode('numberDarkMode')
    changeBackgroundcolor('white')
    body.style.backgroundColor = '#E5E5E5'
    buttonSunMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    lightmode()
})

function changeVolume(value){
    audio.volume = parseFloat(value)
}