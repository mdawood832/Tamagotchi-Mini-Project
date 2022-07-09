class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 9
        this.sleepiness = 1
        this.boredom = 9
        this.age = 0
    }

 
}

// ------------------------------------------------------------------------------>
// waiting for user to look at screen for 5 seconds before asking for the name of 
// their tamagotchi
function greeting() {
    alert("Tamagotchi is a digital pet that was created in Japan")
}
setTimeout(greeting,5000)

let character = new Tamagotchi (prompt ("Name your Tamagotchi")) 
// ------------------------------------------------------------------------------>
// display name underneath welcome

let nameOfTamagotchi = document.querySelector('.nameOfTamagotchi')
nameOfTamagotchi.innerHTML = `${character.name}`

// ------------------------------------------------------------------------------>
// FEEDING PET 
function feedPet () {
    character.hunger <10
    let hunger = document.querySelector('#hunger')
    hunger.innerHTML = `Hunger: ${character.hunger--}`
}
// ------------------------------------------------------------------------------>
// PLAYING WITH PET 
function playWithTamaGotchi () {
    let boredom = document.querySelector('#boredom')
    boredom.innerHTML = `Boredom: ${character.boredom--}`
}

// ------------------------------------------------------------------------------>
// age the tamagotchi
function growingUpBaby () {
    // let age = document.querySelector('#age')
    // age.innerHTML = `Age: ${character.age + 5}`
    document.querySelector('.egg').src = 'baby-tamagotchi.png'

}
setTimeout (growing,10000)




// ------------------------------------------------------------------------------>


const nav = document.getElementsByTagName('nav')
const egg = document.querySelector('.egg')
const metrics  = document.querySelector('#metrics')

// ------------------------------------------------------------------------------>
// LIGHT MODE / DARK MODE 
function lightMode () {
    document.body.style.backgroundColor = '#FF69B4'
    document.body.style.color = '#FFC0CB'
    let sleepiness = document.querySelector('#sleepiness')
    sleepiness.innerHTML = `Sleepiness: ${character.sleepiness++}`
}

function darkMode () {
    document.body.style.backgroundColor = '#C71585'
    document.body.style.color = 'white'
    let sleepiness = document.querySelector('#sleepiness')
    sleepiness.innerHTML = `Sleepiness: ${character.sleepiness--}`
}


