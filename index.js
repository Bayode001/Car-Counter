// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camel case
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEL.textContent = count
}


// create a function save(), which logs out the count when it is called
function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
}








// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen to click on increment button
// increment the count variable when the button is clicked











