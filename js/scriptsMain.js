import {imgActiviti, eventFavorite, findActiveUserFavorite, addFromCardBtn} from "../js/modalWindows.js";
import { itemList, usersList, switchAccount } from "../js/object.js";

const page = document.getElementById("product-view");
let sortItemList = itemList;
let favoriteItemsList;

let addCardBtnActiviti = function(){
    for(let counter = 0; counter < document.querySelectorAll(".btn-card").length; counter++){
         document.querySelectorAll(".btn-card")[counter].addEventListener('click', () => {addFromCardBtn(document.querySelectorAll(".btn-card")[counter])});
    }
}
export let pageOn = function() {
    favoriteItemsList = findActiveUserFavorite("favoriteItems");
    page.innerHTML = "";
    for(let b = sortItemList.length - 1; b > -1; b--){
        let rateColor = "rate-color";
        let favoriteBtn = "../img/free-icon-star-126482.png"
        if (sortItemList[b].rate > 4.5){
            rateColor = "rate-good"
        }
        if (sortItemList[b].rate <= 3.5){
            rateColor = "rate-bad"
        }
        for(let counter = 0; counter < favoriteItemsList.length; counter++){
            if (sortItemList[b].name == favoriteItemsList[counter]){
                favoriteBtn = "../img/active-star.png";
            }
        }
        page.insertAdjacentHTML("afterbegin", `<li>
        <div class="product-card">
            <div class="favorite-button"> <img src="${favoriteBtn}" alt=""> </div>
            <img class="main-card-img-2" src="${itemList[b].mainImg2}" alt="">
            <img class="main-card-img" src="${itemList[b].mainImg}" alt="">
            <h3>${sortItemList[b].name}</h3>
            <div class="card-inf">
                <div class="more-inf-card">
                    <div class="price">
                        <h4>Цена:</h4>
                        <h4 class="price-color">${sortItemList[b].price}р</h4>
                        <h4 class="price-old">${sortItemList[b].oldprice}р</h4>
                    </div>
                        <div class="rate-inf">
                            <div class="rate">
                                <h4>Рейтинг:</h4>
                                <h4 class="${rateColor}">${sortItemList[b].rate}</h4>
                            </div>
                            <h5>Oценок: ${sortItemList[b].rates} </h5>
                        </div>
                </div>
            </div>
            <button class="btn-card">В корзину</button>
        </div>
    </li>`);
    }
    imgActiviti();
    eventFavorite();
    addCardBtnActiviti();
};
pageOn();

let clickFilterBtn = function(idName){
    let clickedButton = document.getElementById(`${idName}`);
        if (idName == "filterLowestRate"){
        filteredHigestOrLowestPage("Lowest", "rate");
        }
        if (idName == "filterHigehstRate"){
        filteredHigestOrLowestPage("Highest", "rate");
        }
        if (idName == "filterLowestPrice"){
        filteredHigestOrLowestPage("Lowest", "price");
        }
        if (idName == "filterHigehstPrice"){
        filteredHigestOrLowestPage("Highest", "price");
        }
    }

document.getElementById("filterLowestPrice").addEventListener('click', () => {clickFilterBtn(document.getElementById("filterLowestPrice").id)});
document.getElementById("filterHigehstPrice").addEventListener('click', () => {clickFilterBtn(document.getElementById("filterHigehstPrice").id)});
document.getElementById("filterLowestRate").addEventListener('click', () => {
    clickFilterBtn(document.getElementById("filterLowestRate").id);
    

});


let lastToOneInfInObject = function(timedItem, counter){
    timedItem = sortItemList[counter];
    sortItemList[counter] = sortItemList[0];
    sortItemList[0] = timedItem;
    return;
}

let toggleInfInObject = function(timedItem, counter){
    timedItem = sortItemList[counter];
    sortItemList[counter] = sortItemList[counter + 1];
    sortItemList[counter + 1] = timedItem;
    return;
}

let seeObjectItems = function(Item0, Item1, Item2, Item3, sortItemList, counter, timedItem){
    if (counter + 1 == sortItemList.length){
        if( Item0 < Item1){
            lastToOneInfInObject(undefined, counter);
            return 0;
        }
        return counter + 1;
    }
    if(Item2 > Item3){
        toggleInfInObject(undefined, counter);
        return 0;
    }
    return counter + 1;
}

let filteredHigestOrLowestPage = function(optionSelected, needAtribute){
    let timedItem;
    let counter = 0;
    if(optionSelected == "Highest"){
        while(counter < sortItemList.length){
            if(counter + 1 == sortItemList.length) {counter = seeObjectItems(sortItemList[counter][needAtribute], sortItemList[0][needAtribute], undefined, sortItemList[counter][needAtribute], sortItemList, counter,  undefined)}
            else {counter = seeObjectItems(sortItemList[counter][needAtribute], sortItemList[0][needAtribute], sortItemList[counter][needAtribute], sortItemList[counter + 1][needAtribute], sortItemList, counter, undefined)}
        }
    }
    if(optionSelected == "Lowest"){
        while(counter < sortItemList.length){
                if(counter + 1 == sortItemList.length) {counter = seeObjectItems(sortItemList[0][needAtribute], sortItemList[counter][needAtribute], sortItemList[counter][needAtribute], undefined, sortItemList, counter)}
                else {counter = seeObjectItems(sortItemList[0][needAtribute], sortItemList[counter][needAtribute], sortItemList[counter + 1][needAtribute], sortItemList[counter][needAtribute], sortItemList, counter)}
            }
    }
        page.innerHTML = "";
        for(let b = sortItemList.length - 1; b > -1; b--){
        let rateColor = "rate-color";
        let favoriteBtn = "../img/free-icon-star-126482.png"
        if (itemList[b].rate > 4.5){
            rateColor = "rate-good"
        }
        if (itemList[b].rate <= 3.5){
            rateColor = "rate-bad"
        }
        for(let counter = 0; counter < favoriteItemsList.length; counter++){
            if (sortItemList[b].name == favoriteItemsList[counter]){
                favoriteBtn = "../img/active-star.png";
            }
        }
        page.insertAdjacentHTML("afterbegin", `<li>
        <div class="product-card">
            <div class="favorite-button"> <img src="${favoriteBtn}" alt=""> </div>
            <img class="main-card-img-2" src="${itemList[b].mainImg2}" alt="">
            <img class="main-card-img" src="${itemList[b].mainImg}" alt="">
            <h3>${sortItemList[b].name}</h3>
            <div class="card-inf">
                <div class="more-inf-card">
                    <div class="price">
                        <h4>Цена:</h4>
                        <h4 class="price-color">${sortItemList[b].price}р</h4>
                        <h4 class="price-old">${sortItemList[b].oldprice}р</h4>
                    </div>
                        <div class="rate-inf">
                            <div class="rate">
                                <h4>Рейтинг:</h4>
                                <h4 class="${rateColor}">${sortItemList[b].rate}</h4>
                            </div>
                            <h5>Oценок: ${sortItemList[b].rates} </h5>
                        </div>
                </div>
            </div>
            <button class="btn-card">В корзину</button>
        </div>
    </li>`);
    }
    imgActiviti();
    eventFavorite();
    addCardBtnActiviti();
}










