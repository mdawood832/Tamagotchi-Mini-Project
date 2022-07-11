class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }

}

// ------------------------------------------------------------------------------>
// waiting for user to look at screen for 5 seconds before asking for the name of 
// their tamagotchi
let character = new Tamagotchi (prompt ("Name your Tamagotchi")) 

// ------------------------------------------------------------------------------>
// display name on top of metrics list 
let nameOfTamagotchi = document.querySelector('.nameOfTamagotchi')
nameOfTamagotchi.innerHTML = `${character.name}`

// ------------------------------------------------------------------------------>
// FEEDING PET- onclick function, when clicked decrease hunger
function feedPet () {
    character.hunger <= 10
    let hunger = document.querySelector('#hunger')
    hunger.innerHTML = `Hunger: ${character.hunger--}`
}

// feeding the tamagotchi, if it reaches ten the timer stops and 
// the tamagotchi goes to heaven 
function increaseHunger () {
    character.hunger++
    hunger.innerHTML = `Hunger: ${character.hunger}`
    if (character.hunger === 10 ) {
        alert("Your Tamagotchi has gone to heaven")
        clearInterval(hungerInterval)
    }

    if(character.boredom === 10 || character.sleepiness === 10 ){
        clearInterval(hungerInterval)
        //if the other intervals reach ten before 
        // hunger, then stop hunger 
    }
}
const hungerInterval = setInterval(increaseHunger,2000)
// ------------------------------------------------------------------------------>
// PLAYING WITH PET 
function playWithTamaGotchi () {
    character.boredom<=10
    let boredom = document.querySelector('#boredom')
    boredom.innerHTML = `Boredom: ${character.boredom--}`
}

function increaseBoredom () {
    character.boredom++
    boredom.innerHTML=`Boredom: ${character.boredom}`

    if (character.boredom === 10){
        alert("Your Tamagotchi has gone to heaven")
        clearInterval(playInterval)
    }

    if(character.hunger === 10 || character.sleepiness === 10 ){
        clearInterval(playInterval)
        //if the other intervals reach ten before 
        // hunger, then stop hunger 
    }

}

const playInterval = setInterval(increaseBoredom,2000)
// ------------------------------------------------------------------------------>
// age the tamagotchi
function growingUp () {
    let age = document.querySelector('#age')
    age.innerHTML = `Age: ${character.age++}`

    if(character.hunger === 10 || character.boredom === 10 || character.sleepiness === 10 ){
        clearInterval(ageInterval)
    }
}
const ageInterval = setInterval(growingUp,4000)


function growingUpBaby () {
    if (character.age < 4){
        document.querySelector('.egg').src = 'baby-tamagotchi.png'
    }
    // document.querySelector('.egg').src = 'baby-tamagotchi.png'
    if (character.age === 4){
        document.querySelector('.egg').src = 'growntama.png'
        // alert('Your Tamagotchi has grown again ')
        //insert image through dom manipulation 
    }

    if(character.age === 6) {
        // alert('Your Tamagotchi has grown again')
        //insert image through dom manipulation
    }

    if(character.hunger === 10 || character.boredom === 10 || character.sleepiness === 10 ){
        document.querySelector('.egg').src = 'deadtama.png'
    }

}
const agingInterval = setInterval(growingUpBaby,4000)


// ------------------------------------------------------------------------------>
const nav = document.getElementsByTagName('nav')
const egg = document.querySelector('.egg')
const metrics  = document.querySelector('#metrics')

// ------------------------------------------------------------------------------>
// LIGHT MODE / DARK MODE 
// When Tamagotchi starts, it orginally has these settings 
// below 
let body = document.querySelector('body')
body.style.backgroundColor = '#FF69B4'
//it starts with the same colors as light mode 

function lightMode () { //this just turns on lightmode and displays sleepiness
    // document.body.style.backgroundColor = '#FF69B4'
    // document.body.style.color = '#FFC0CB'
    let sleepiness = document.querySelector('#sleepiness')
    sleepiness.innerHTML = `Sleepiness: ${character.sleepiness++}`
    if(character.sleepiness === 10){
        clearInterval(upSleepiness)
        alert('Your Tamagotchi has gone to heaven')
    }     
}
//anonymous function increase sleepiness in set interval, should handle the conditional in line 128
const upSleepiness = setInterval(lightMode, 2000)
//so I can call clear interval

// function increaseSleepiness (){ //this increases the sleepingess rader
//     // once light mode is clicked and tamagotchi faints when 
//     // the interval reaches ten
//     character.sleepiness++
//     let sleepiness = document.querySelector('#sleepiness')
//     sleepiness.innerHTML = `Sleepiness: ${character.sleepiness}`

//     if(character.sleepiness === 10){
//         clearInterval(upSleepiness)
//         alert('Your Tamagotchi has gone to heaven')
//     }
// }


function darkMode () {
    document.body.style.backgroundColor = '#C71585'
    document.body.style.color = 'white'
    let sleepiness = document.querySelector('#sleepiness')
    sleepiness.innerHTML = `Sleepiness: ${character.sleepiness--}`
    // if(character.sleepiness === 0){
    //     clearInterval(downSleepiness)
    // }
}

// function decreaseSleepiness (){ //this decreases the sleepingess rader
//     if (document.body.querySelector('.darkMode').clicked === true){
//     c
//     // once dark mode is clicked 
//     // let sleepiness = document.querySelector('#sleepiness')
//     character.sleepiness--
//     let decreaseSleepy = document.body.querySelector('#sleepiness')
//     decreaseSleepy.innerHTML = `${character.sleepiness}`
//     // sleepiness.innerHTML = `Sleepiness: ${character.sleepiness}`

//     if(character.sleepiness === 0){
//         clearInterval(downSleepiness)
//     }
// }



// const downSleepiness = setInterval(darkMode,2000)
// ------------------------------------------------------------------------------>
// feeding the tamagotchi, if it reaches ten the timer stops and 
// the tamagotchi goes to heaven 
// function increaseHunger () {
//     character.hunger++
//     hunger.innerHTML = `Hunger: ${character.hunger}`
//     if (character.hunger === 10 ) {
//         alert("Your Tamagotchi has gone to heaven")
//         clearInterval(hungerInterval)
//     }
// }
// const hungerInterval = setInterval(increaseHunger,1000)
// ------------------------------------------------------------------------------>
