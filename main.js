// test task 1
let color = "red"
color = "blue"
let newColor = color
console.log(newColor)

// test task 2
let message = prompt("Write a Number of the Month")
if (12 == message || message == 2|| message == 1) {
    console.log('Winter') 
}
else if (3 == message || message == 4 || message == 5) {
    console.log('Spring')  
}
else if (6 == message || message == 7 || message == 8) {
    console.log('Summer')
}
else if (9 == message || message == 10 || message == 11) {
    console.log('Autumn')    
}
else {
    console.log('This season does not exist :(')
}
    
// test task 3
for (let i = 1000; i <= 10000; i += 5) {
    console.log(i)
} 
 
// test task 4
document.getElementById("box").style.height = "200px"
document.getElementById("box").style.width = "200px"
document.getElementById("box").style.border = "2px solid black"
document.getElementById("box").style.background = "red"
