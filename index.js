const guitarNeck = document.getElementById("guitarNeck")
const fretbox = document.querySelectorAll("div")



function makeFrets() {
    for (i=0; i<12;i++) {
       let strings = createElement("div")
       holder.appendChild(strings)
    }
}



function makeGuitarNeck() {

    for (let i = 0; i< 6; i++) {
 let frets = document.createElement('div')
 frets.innerText = "test" 
 frets.className = "holder"
 guitarNeck.appendChild(frets)


    }
}

makeGuitarNeck()



///verry faulty rush code idea change at later date