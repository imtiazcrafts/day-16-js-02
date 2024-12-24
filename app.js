let onBtn = document.querySelector('.on');

let image = document.querySelector('.img');

onBtn.addEventListener('click', function(){

image.src = "https://www.w3schools.com/js/pic_bulbon.gif"


})

let off = document.querySelector('.off');

off.addEventListener('click', function(){
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})

let color = document.querySelector('#color');
let btn = document.querySelector('#color');

btn.addEventListener('click', function(){

let red =(Math.round(Math.random() * 255));
let green =(Math.round(Math.random() * 255));
let blue =(Math.round(Math.random() * 255));


    color.style.background = `rgb(${red}, ${green}, ${blue})`
    document.querySelector('h2').innerText = `rgb(${red}, ${green}, ${blue})`
})




