const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
const bodyCarousel = document.getElementById("carousel-img");
const navBard = document.getElementById("navigation-bars");
let carouselContent = [
    {
        img: "img/CaruselContent-1.jpg",
        id: 1
    },
    {
        img: "img/CaruselContent-2.jpg",
        id: 2
    },
    {
        img: "img/CaruselContent-3.jpg",
        id: 3
    },
    {
        img: "img/CaruselContent-3.jpg",
        id: 4
    },
    {
        img: "img/CaruselContent-3.jpg",
        id: 5
    },
    {
        img: "img/CaruselContent-2.jpg",
        id: 6
    }
]
for(let counter = 0; counter < carouselContent.length; counter++){
    if(counter == 0) { 
        bodyCarousel.insertAdjacentHTML("afterbegin", `<img id="img${carouselContent[counter].id}" class="img-content-carousel" src=${carouselContent[counter].img} alt="">`)
        continue;
    }
    if(counter + 1 == carouselContent.length) { 
        bodyCarousel.insertAdjacentHTML("afterbegin", `<img id="img${carouselContent[counter].id}" class="img-content-carousel-last" src=${carouselContent[counter].img} alt="">`) 
        continue;
    }
    bodyCarousel.insertAdjacentHTML("afterbegin", `<img id="img${carouselContent[counter].id}" class="img-content-carousel-next" src=${carouselContent[counter].img} alt="">`)
}
for(let counter = carouselContent.length; counter > 0; counter-- ){
    navBard.insertAdjacentHTML("afterbegin", `
        <li id="bar${counter}" class="nav-bar" onclick="barClicked(this.id)"></li>`);
}
document.getElementById("bar1").classList.add("nav-bar-active");

let getPrewImg = function(option){
    return document.getElementById(option);
};
let goingRight = function() {
let prewImg;
    let imgMove = document.querySelector(".img-content-carousel");
    let nextImg = document.querySelector(".img-content-carousel-last");
    console.log(imgMove);
    if(Number(imgMove.id.substring(3)) == 1){
        prewImg = getPrewImg(`img${carouselContent.length - 1}`);
    }
    if(Number(imgMove.id.substring(3)) == 2){
        prewImg = getPrewImg(`img${carouselContent.length}`);
    }
    if(Number(imgMove.id.substring(3)) > 2){
        prewImg = getPrewImg(`img${Number(imgMove.id.substring(3)) - 2}`);
    }
    console.log(prewImg)
    imgMove.style.transition = "0.3s";
    nextImg.style.transition = "0.3s";
    nextImg.classList.remove("img-content-carousel-last");
    nextImg.classList.add("img-content-carousel");
    imgMove.classList.remove("img-content-carousel");
    imgMove.classList.add("img-content-carousel-next");
    prewImg.classList.remove("img-content-carousel-next");
    prewImg.classList.add("img-content-carousel-last");
    document.getElementById(`bar${Number(imgMove.id.substring(3))}`).classList.toggle("nav-bar-active");
    document.getElementById(`bar${Number(nextImg.id.substring(3))}`).classList.toggle("nav-bar-active");

    setTimeout(() => {
            imgMove.style.transition = "0s";
            nextImg.style.transition = "0s";
        }, 300)
};
let goingLeft = function() {
    let nextImg
    let imgMove = document.querySelector(".img-content-carousel");
    let prewImg = document.querySelector(".img-content-carousel-last");
    if(Number(imgMove.id.substring(3)) == carouselContent.length){
        nextImg = document.getElementById(`img1`);
    }
    else{
        nextImg = document.getElementById(`img${Number(imgMove.id.substring(3)) + 1}`);
    }
    prewImg.style.transition = "0s"
    imgMove.style.transition = "0.3s";
    nextImg.style.transition = "0.3s";
    imgMove.classList.remove("img-content-carousel");
    imgMove.classList.add("img-content-carousel-last");
    prewImg.classList.remove("img-content-carousel-last");
    prewImg.classList.add("img-content-carousel-next");
    nextImg.classList.remove("img-content-carousel-next");
    nextImg.classList.add("img-content-carousel");
    document.getElementById(`bar${Number(imgMove.id.substring(3))}`).classList.toggle("nav-bar-active");
    document.getElementById(`bar${Number(nextImg.id.substring(3))}`).classList.toggle("nav-bar-active");
    setTimeout(() => {
            imgMove.style.transition = "0s";
            nextImg.style.transition = "0s";
        }, 300)
};

leftArrow.addEventListener('click', () => {
    
    goingRight();
});
rightArrow.addEventListener('click', () => {
    goingLeft();
});

let barClicked = async function(idName){
    console.log(Number(document.querySelector(".img-content-carousel").id.substring(3)));
    console.log(Number(idName.substring(3)));

    if(Number(document.querySelector(".img-content-carousel").id.substring(3)) > Number(idName.substring(3))){
        console.log("here1")
        for(let eterations = Number(document.querySelector(".img-content-carousel").id.substring(3)) - Number(idName.substring(3)); eterations > 0; eterations--){
            await new Promise(resolve => setTimeout(resolve, 300));
            goingRight();
        }
    }
    else{
        console.log("here2")
       for(let eterations = Number(idName.substring(3)) - Number(document.querySelector(".img-content-carousel").id.substring(3)); eterations > 0; eterations--){
        await new Promise(resolve => setTimeout(resolve, 300));
            goingLeft();
        }
    }
    
}