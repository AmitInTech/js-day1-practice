let count= 0;


let countDisplay= document.getElementById("count");
let incBtn= document.getElementById("increase");
let decBtn= document.getElementById("decrease");
let resetBtn= document.getElementById("reset");


incBtn.addEventListener("click", function(){
    count++;
    countDisplay.innerText=count;
});
decBtn.addEventListener("click", function(){
    count--;
    countDisplay.innerText=count;
});
resetBtn.addEventListener("click", function(){
    count=0;
    countDisplay.innerText=count;
})