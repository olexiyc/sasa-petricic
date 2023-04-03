function changeBg(){
    const images = [
    'url("./images/sasha1.jpg")',  
    'url("./images/sasha2.jpg")',
    'url("./images/sasha3.jpg")',
    'url(".images/sasha4.jpg")',
    'url("./images/sasha5.jpg")',
    'url("./images/sasha6.jpg")',
    'url("./images/sasha7.jpg")',
    'url("./images/sasha8.jpg")',
]

const section = document.querySelector('section');
const bg = images[Math.floor(Math.random() * images.length)];
section.style.backgroundImage = bg;

}
setInterval(changeBg, 2500);


