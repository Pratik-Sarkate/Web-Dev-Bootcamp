let num1 = Math.floor(6*Math.random()) + 1;
let num2 = Math.floor(6*Math.random()) + 1;
// console.log(num);
document.querySelector(".img1").setAttribute("src",`images/dice${num1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${num2}.png`);

if(num1>num2){
    document.querySelector(".container h1").textContent = "Player 1 is the winner"
}else if(num1<num2){
    document.querySelector(".container h1").textContent = "Player 2 is the winner"
}else{
    document.querySelector(".container h1").textContent = "Game draw"
}