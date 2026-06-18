import { itemList } from "js/object.js";
import { usersList, switchAccount } from "js/object.js";
import { pageOn } from "js/scriptsMain.js";

export let findActiveUserFavorite = function(option){
    for(let counter = 0; counter < usersList.length; counter++){
        if (usersList[counter].active == true){
            return usersList[counter][option];
        }
    }
} 
let cartList = findActiveUserFavorite("shoppingСart");
let favoriteItemsList = findActiveUserFavorite("favoriteItems");
let intervalId;
let modulBG = document.getElementById("modal-window-bg");
let modulMin = document.getElementById("modal-window-min");
let modulMax = document.getElementById("modal-window-max");

for(let counter = 0; counter< document.querySelectorAll(".header-section-img").length; counter++)
{
    document.querySelectorAll(".header-section-img")[counter].addEventListener('click', () => {
        btnHeaderlicked(document.querySelectorAll(".header-section-img")[counter].id);
    });
};

export let eventFavorite = function(){
    for(let counter = 0; counter< document.querySelectorAll(".favorite-button").length; counter++)
    {
        document.querySelectorAll(".favorite-button")[counter].addEventListener('click', () => {
            let noInFav = true;
            for(let counter2 = 0; counter2 < favoriteItemsList.length; counter2++){
                if(document.querySelectorAll(".favorite-button")[counter].parentElement.children[3].textContent == favoriteItemsList[counter2]){
                    document.querySelectorAll(".favorite-button")[counter].children[0].src = "../img/free-icon-star-126482.png";
                    noInFav = false;
                    favoriteItemsList.splice(counter2, 1);
                }
            }
            if (noInFav == true){
                document.querySelectorAll(".favorite-button")[counter].children[0].src = "../img/active-star.png";
                favoriteItemsList.push(document.querySelectorAll(".favorite-button")[counter].parentElement.children[3].textContent);
                console.log(favoriteItemsList);
            }
        });
    };
}

let clickedImgModal = function(nameImg){
    document.getElementById("seeImg").style.display = "flex";
    document.getElementById("seeImg").innerHTML = `<img class="Clicked-see-Img" src="${nameImg}" alt="">`;
    document.getElementById("seeImg").addEventListener('click', () => {document.getElementById("seeImg").style.display = "none";})
};

let closeModulWindow = function(){
    modulMin.innerHTML = "";
    modulMax.innerHTML = "";
    modulMin.style.display = "none";
    modulMax.style.display = "none";
    modulBG.style.display = "none";
    clearInterval(intervalId);
};


export let addFromCardBtn = function(object) {
    for(let counter = 0; counter < cartList.length; counter++){
        if(cartList[counter].name == object.parentElement.children[3].textContent)
        {
            addOrDeletItem("plus", cartList[counter].name, false)
            return;
        }
    }
    let newCartItem = {
        name: object.parentElement.children[3].textContent,
        price: Number(object.parentElement.children[4].children[0].children[0].children[1].textContent.slice(0, -1)),
        count: 1
    };
    cartList.push(newCartItem);
    console.log(cartList);
}

let addOrDeletItem = function(option, object, openModel){
    for(let counter = 0; counter < cartList.length; counter++){
        if(option == "plus")
        {
            if(openModel == false && cartList[counter].name == object){
                cartList[counter].count += 1;
            }
            if ( openModel == undefined && cartList[counter].name == object.parentElement.parentElement.children[0].children[1].children[0].textContent)
            {
                cartList[counter].count += 1;
                openModulWindow(modulMin, "shopping-cart");
            }
        }
        else
        {
            if (cartList[counter].name == object.parentElement.parentElement.children[0].children[1].children[0].textContent)
            {
                if(cartList[counter].count == 1)
                {
                    cartList.splice(counter, 1);
                    openModulWindow(modulMin, "shopping-cart");
                }
                else
                {
                    cartList[counter].count -= 1;
                    openModulWindow(modulMin, "shopping-cart");
                }
                
            }
        }
    }
    
};

let addClickToBtnCart = function(nameOfclass){
    for(let counter = 0; counter < document.querySelectorAll(nameOfclass).length; counter++)
    {
        document.querySelectorAll(nameOfclass)[counter].addEventListener('click', () =>{
            if (nameOfclass == ".plusItem"){
                addOrDeletItem("plus", document.querySelectorAll(nameOfclass)[counter])
            }
            else
            {
                addOrDeletItem("del", document.querySelectorAll(nameOfclass)[counter])
            }
        });
    };
};

let addCardBtnActiviti = function(object){
     for(let counter = 0; counter < cartList.length; counter++){
        if(cartList[counter].name == object.parentElement.children[0].children[0].textContent)
        {
            addOrDeletItem("plus", cartList[counter].name, false)
            return;
        }
    }
    let newCartItem = {
        name: object.parentElement.children[0].children[0].textContent,
        price: Number(object.parentElement.children[0].children[5].children[1].textContent.slice(0, object.parentElement.children[0].children[5].children[1].textContent.length)),
        count: 1
    };
    cartList.push(newCartItem);
    console.log(cartList);
};

let openModulWindow = function(option, nameCard){
    modulBG.style.display = "flex";
    option.style.display = "flex";
    if (option == modulMax){
        for(let counter = 0; counter < itemList.length; counter++)
        {   
            if (nameCard == itemList[counter].name){
                console.log(itemList[counter].mainImg)
                modulMax.innerHTML = `
        <img id="close-modal-window" src="../img/close.png" alt="">
        <div id="seeImg"></div>
        <div id="card-item-imgs">
                    <div id="card-item-img-1" class="card-item-styles"><img class="modal-card-img" src="${itemList[counter].mainImg}" alt=""></div>
                    <div id="card-item-img-2" class="card-item-styles"><img class="modal-card-img" src="${itemList[counter].mainImg2}" alt=""></div>
                    <div id="card-item-img-3" class="card-item-styles"><img class="modal-card-img" src="${itemList[counter].img3}" alt=""></div>
                </div>
                <div class="modal-card-inf">
                    <div>
                        <h1 class="modal-window-text-card-no-margin">${itemList[counter].name}</h1>
                        <p>Артикул: ${itemList[counter].articul}</p>
                        <h3>Год выпуска: ${itemList[counter].ageOfGo}</h3>
                        <h3>Кол-минифиг.: ${itemList[counter].numMinFigur}</h3>
                        <h3>Кол-деталей: ${itemList[counter].numParts}</h3>
                        <div class="price">
                            <h2>Цена: </h2>
                            <h2 class="price-color">${itemList[counter].price}</h2>
                        </div>
                        <div class="rate">
                            <h3 class="modal-window-text-card-no-margin">Рейтинг:</h3>
                            <h3 class="rate-good">${itemList[counter].rate}</h3>
                        </div>
                        <p>См. Отзывы</p>
                    </div>
                    <button class="btn-card modal-card">В корзину</button>
        </div>
        `
            }
        }
        document.getElementById("close-modal-window").addEventListener('click', ()=> {closeModulWindow();});
        document.getElementById("card-item-img-1").addEventListener('click', () => {clickedImgModal(document.getElementById("card-item-img-1").children[0].src);});
        document.getElementById("card-item-img-2").addEventListener('click', () => {clickedImgModal(document.getElementById("card-item-img-2").children[0].src);});
        document.getElementById("card-item-img-3").addEventListener('click', () => {clickedImgModal(document.getElementById("card-item-img-3").children[0].src);});
        for(let counter = 0; counter < document.querySelectorAll(".modal-card").length; counter++){
            document.querySelectorAll(".modal-card")[counter].addEventListener('click', () => {
                addCardBtnActiviti(document.querySelectorAll(".modal-card")[counter]);
            })
        }

    
    }
    if(option == modulMin){
        if (nameCard == "header-acc-img"){
            let IndexUser
            let activeUser;
            for(let counter = 0; counter < usersList.length; counter++){
                if (usersList[counter].active == true){
                    activeUser = usersList[counter].userName;
                    IndexUser = counter;
                    break;
                }
            }
        if(activeUser == "Guest"){
            modulMin.innerHTML = `
            <img id="close-modal-window" src="../img/close.png" alt="">
            <h1>Аккаунт</h1>
            <div class="account-modal">
                <h3>Имя пользователя</h3>
                <textarea name="" rows="1" id="area-name"></textarea>
                <div class="line-reg pos-name"></div>
                <h3>Пароль</h3>
                <textarea name="" rows="1" id="area-password"></textarea>
                <div class="line-reg"></div>
                <button id="loginBtn" class="btn-card btn-acc-sized">Войти</button>
            </div>
            `;
            document.getElementById("loginBtn").addEventListener('click', () => {checkTextAreaLogin()});
        }
        else{
            modulMin.innerHTML = `
                <img id="close-modal-window" src="../img/close.png" alt="">
                <h1>Аккаунт</h1>
                <div class="account-modal">
                    <div class="account-modal-img"><img  src="img/account.png" alt=""></div>
                    <h2>${activeUser}</h2>
                    <h3 id="exit-account">Выйти из аккаунта</h3>
                <div>
            `;
            document.getElementById("exit-account").addEventListener('click', () => {exitAccount(IndexUser)});
        }
        }
        if(nameCard == "shopping-cart")
        {
            let totalPrice = 0;
             modulMin.innerHTML = `
                <img id="close-modal-window" src="../img/close.png" alt="">
                <h1>Корзина</h1>
                <div id="favorite-items-grid"></div>
            `;
            for(let counter = 0; counter < cartList.length; counter++){
                totalPrice = totalPrice + cartList[counter].count * cartList[counter].price;
                for(let counter2 = 0; counter2 < itemList.length; counter2++){
                    if(cartList[counter].name == itemList[counter2].name){
                        document.getElementById("favorite-items-grid").insertAdjacentHTML("afterbegin", `
                            <div class="favorite-min-card">
                                <div class="modal-min-card-inf">
                                    <div class="min-modal-card-img"><img src="${itemList[counter2].mainImg}" alt=""></div>
                                    <div>
                                        <h1>${itemList[counter2].name}</h1>
                                            <div class="price">
                                            <h2>Цена: </h2>
                                            <h2 class="price-color">${itemList[counter2].price}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons-card-cart">
                                    <button class="btn-min-card btn-card plusItem">+</button>
                                    <h1>${cartList[counter].count}</h1>
                                    <button class="btn-min-card btn-card minusItem">-</button>
                                </div>
                            </div>
                        `);
                    }
                }
            }
            document.getElementById("favorite-items-grid").insertAdjacentHTML("afterbegin", `
            <h1>Полная стоимость корзины: ${totalPrice}р</h1>    
            `);
            addClickToBtnCart(".plusItem");
            addClickToBtnCart(".minusItem");
        }
        if (nameCard == "favorite-cart")
        {
        modulMin.innerHTML = `
            <img id="close-modal-window" src="../img/close.png" alt="">
                <h1>Избранные товары</h1>
                <div id="favorite-items-grid"></div>
        `;
        for(let counter = 0; counter < favoriteItemsList.length; counter++)
            {
                for(let counter2 = 0; counter2 < itemList.length; counter2++){
                    if(favoriteItemsList[counter] == itemList[counter2].name){
                        document.getElementById("favorite-items-grid").insertAdjacentHTML("afterbegin", `
                            <div class="favorite-min-card">
                                <div class="modal-min-card-inf">
                                    <div class="min-modal-card-img"><img src="${itemList[counter2].mainImg}" alt=""></div>
                                    <div>
                                        <h1>${itemList[counter2].name}</h1>
                                            <div class="price">
                                            <h2>Цена: </h2>
                                            <h2 class="price-color">${itemList[counter2].price}</h2>
                                        </div>
                                    </div>
                                </div>
                            <button class="btn-min-card btn-card">В корзину</button>
                            </div>
                        `);
                    }
                }
            }
        }
        document.getElementById("close-modal-window").addEventListener('click', ()=> {closeModulWindow();});
    }
};

let btnCardClicked = function(nameCard){
    openModulWindow(modulMax, nameCard);
    intervalStart();
};
let btnHeaderlicked = function(srcName){
    console.log(srcName);
    openModulWindow(modulMin, srcName);
};

export function imgActiviti() {
    for(let counter = 0; counter < document.querySelectorAll(".main-card-img").length; counter++){
        document.querySelectorAll(".main-card-img")[counter].addEventListener('click', () => {btnCardClicked(document.querySelectorAll(".btn-card")[counter].parentElement.children[3].textContent);});
    }
}

let imgFlip = function(arrayOfImgs) {
    let timedItem = arrayOfImgs[0];
    arrayOfImgs[0] = arrayOfImgs[1];
    arrayOfImgs[1] = arrayOfImgs[2];
    arrayOfImgs[2] = timedItem;
    for(let counter = 0; counter < 3; counter++){
        document.querySelectorAll(".modal-card-img")[counter].style.opacity = "0";
        console.log(document.querySelectorAll(".modal-card-img")[counter]);
    }
    setTimeout(() => {
        document.getElementById("card-item-imgs").style.gridTemplateAreas = `
        "${arrayOfImgs[0]} ${arrayOfImgs[0]}"
        "${arrayOfImgs[0]} ${arrayOfImgs[0]}"
        "${arrayOfImgs[1]} ${arrayOfImgs[2]}"`;
        for(let counter = 0; counter < 3; counter++){
        document.querySelectorAll(".modal-card-img")[counter].style.opacity = "100";
    }
    },500);
    return arrayOfImgs
};

let intervalStart = function(arrayOfImgs) {
    arrayOfImgs = ["item-1", "item-2", "item-3"];
    intervalId = setInterval(function() {
    arrayOfImgs = imgFlip(arrayOfImgs);
  }, 7000);
};


let checkTextAreaLogin = function(){
    let nameInBox = document.getElementById("area-name").value;
    let passwordInBox = document.getElementById("area-password").value;
    for(let counter = 0; counter < usersList.length; counter++){
        if(nameInBox == usersList[counter].userName){
            if(passwordInBox == usersList[counter].password)
            {
                switchAccount(0, counter);
                openModulWindow(modulMin, "header-acc-img");
                favoriteItemsList = findActiveUserFavorite("favoriteItems");
                cartList = findActiveUserFavorite("shoppingСart");
                pageOn();
                break;
            }
        }
    };
}

let exitAccount = function(activeUser){
    usersList[activeUser].favoriteItems = favoriteItemsList;
    usersList[activeUser].shoppingСart = cartList;
    switchAccount(activeUser, 0);
    openModulWindow(modulMin, "header-acc-img");
    cartList = [];
    favoriteItemsList = findActiveUserFavorite("favoriteItems");
    pageOn();
}

/*
<img id="close-modal-window" src="/img/close.png" alt="">
<h1>Аккаунт</h1>
<div class="account-modal">
    <div class="account-modal-img"><img  src="/img/account.png" alt=""></div>
    <h2>Имя</h2>
    <h3 id="exit-account">Выйти из аккаунта</h3>
div>

<img id="close-modal-window" src="/img/close.png" alt="">
<h1>Аккаунт</h1>
<div class="account-modal">
    <h3>Имя пользователя</h3>
    <textarea name="" rows="1" id="area-name"></textarea>
    <div class="line-reg pos-name"></div>
    <h3>Пароль</h3>
    <textarea name="" rows="1" id="area-password"></textarea>
    <div class="line-reg"></div>
    <button class="btn-card btn-acc-sized">Войти</button>
</div>
*/ 
