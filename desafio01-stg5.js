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
let numberDarkMode = document.querySelector(".timer")
let fillPlay = document.querySelector(".fillPlay")
let fillStop = document.querySelector(".fillStop")
let fillPlus = document.querySelector(".fillPlus")
let fillLess = document.querySelector(".fillLess")

// let florestaCard1 = document.querySelector(".florestaCard1")
// let florestaCard2 = document.querySelector(".florestaCard2")
// let chuvaCard1 = document.querySelector(".chuvaCard1")
// let chuvaCard2 = document.querySelector(".chuvaCard2")
// let cafeteriaCard1 = document.querySelector(".cafeteriaCard1")
// let cafeteriaCard2 = document.querySelector(".cafeteriaCard2")
// let lareiraCard1 = document.querySelector(".lareiraCard1")
// let lareiraCard2 = document.querySelector(".lareiraCard2")


let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let putMinutes = Number(minutesDisplay.textContent)

function updateTime(putMinutes, putSeconds){
    minutesDisplay.textContent = String(putMinutes).padStart(2,"0")
    secondsDisplay.textContent = String(putSeconds).padStart(2,"0")
}
    
function countdown(fromButtonClick) {

    if (fromButtonClick) {
        putMinutes = prompt("Qual o tempo que você deseja colocar? Digite apenas números") || 0
        updateTime(putMinutes, 0)
    }
    
    timerTimeOut = setTimeout(function() {
        let setseconds = Number(secondsDisplay.textContent)
        let setminutes = Number(minutesDisplay.textContent)
        
        if (setminutes <=0 && setseconds <=0){ 
            window.alert("O tempo acabou")
            return
            
        }

        if (setseconds <= 0){
            setseconds = 5
            minutesDisplay.textContent = String(setminutes -1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(setseconds -1).padStart(2, "0")
        
        countdown(false)
    
    }, 1000)
}

buttonPlay.addEventListener('click', () => countdown(true))
    

buttonStop.addEventListener('click', function() {
    let agree = confirm("Tem certeza que deseja finalizar o Timer?")

    if (agree) {
        updateTime (0, 0)
    }
    else {
        clearTimeout(timerTimeOut)
        countdown()
    }
})

buttonPlus.addEventListener('click', function() {
    updateTime(Number(minutesDisplay.textContent) +5, 0)
})

buttonLess.addEventListener('click', function() {
    updateTime(Number(minutesDisplay.textContent) -5, 0)
})

// const cardFlorestaAudio = new Audio ("Floresta.wav")
// const cardChuvaAudio = new Audio ("Chuva.wav")
// const cardCafeteriaAudio = new Audio ("Cafeteria.wav")
// const cardLareiraAudio = new Audio ("Lareira.wav")


let audio = new Audio("floresta.wav")
let card = 'floresta'

cardFloresta.addEventListener('click', function(){
    playMusic("floresta")
    changeColor('floresta')
})

cardChuva.addEventListener('click', function(){
    playMusic("chuva")
    changeColor('chuva')
})

cardCafeteria.addEventListener('click', function(){
    playMusic("cafeteria")
    changeColor('cafeteria')
})

cardLareira.addEventListener('click', function(){
    playMusic("lareira")
    changeColor('lareira')
})

function playMusic (name){
    const mapa = {
        floresta: "Floresta.wav",
        chuva: "Chuva.wav",
        cafeteria: "Cafeteria.wav",
        lareira: "Lareira.wav",
    }
    audio.pause()
    audio = new Audio (mapa[name])
    audio.play()
}


function changeColor (name){
    document.querySelector(`.${card}Card1`).setAttribute("fill", "#E1E1E6")
    document.querySelector(`.${card}Card2`).setAttribute("fill", "#323238")

    card = name
    document.querySelector(`.${name}Card1`).setAttribute("fill", "#02799D")
    document.querySelector(`.${name}Card2`).setAttribute("fill", "white")
    document.querySelector(`.${name}Vol1`).setAttribute("fill", "white")
    document.querySelector(`.${name}Vol2`).setAttribute("fill", "white")
}

buttonSunMode.addEventListener('click', function(){
    changeBackgroundcolor('black')
    buttonSunMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    darkmode('floresta', "white", "#29292E")
    darkmode('chuva', "white","#29292E")
    darkmode('cafeteria', "white","#29292E")
    darkmode('lareira', "white", "#29292E")
    controlsdDarkMode('numberDarkMode')
 

})

function darkmode(name, color, bgcolor){
    card = name
    document.querySelector(`.${name}Card1`).setAttribute("fill", `${bgcolor}`)
    document.querySelector(`.${name}Card2`).setAttribute("fill", `${color}`)
    document.querySelector(`.${name}Vol1`).setAttribute("fill", `${color}`)
    document.querySelector(`.${name}Vol2`).setAttribute("fill", `${color}`)
}

function changeBackgroundcolor (color){
    body.style.backgroundColor = `${color}`
    main.style.backgroundColor = `${color}`
    sectionRight.style.backgroundColor = `${color}`
}

function controlsdDarkMode (buttonClass){
        numberDarkMode.classList.add(`${buttonClass}`)
        fillPlay.classList.add(`${buttonClass}`)
        fillStop.classList.add(`${buttonClass}`)
        fillPlus.classList.add(`${buttonClass}`)
        fillLess.classList.add(`${buttonClass}`)
}

function controlsSunMode (buttonClass){
    numberDarkMode.classList.remove(`${buttonClass}`)
        fillPlay.classList.remove(`${buttonClass}`)
        fillStop.classList.remove(`${buttonClass}`)
        fillPlus.classList.remove(`${buttonClass}`)
        fillLess.classList.remove(`${buttonClass}`)
}

buttonDarkMode.addEventListener('click', function(){
    controlsSunMode('numberDarkMode')
    changeBackgroundcolor('white')
    body.style.backgroundColor = '#E5E5E5'
    buttonSunMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    darkmode('floresta', "#323238", '#E5E5E5')
    darkmode('chuva', "#323238", '#E5E5E5')
    darkmode('cafeteria', "#323238", '#E5E5E5')
    darkmode('lareira', "#323238", '#E5E5E5')
})

let rects = document.querySelectorAll('rect');
for (var i = 0; i < rects.length; i++) {
    rects[i].addEventListener('mousedown', mousedown);
}

shape.onmousedown = function(evt) {
    var evt = evt || window.event;
    ddData.element = evt.target || evt.srcElement;
    ddData.initialX = evt.clientX;
    ddData.initialY = evt.clientY;
    ddData.originalX = parseFloat(
        ddData.element.getAttributeNS(null, "cx"));
    ddData.originalY = parseFloat(
        ddData.element.getAttributeNS(null, "cy"));
};