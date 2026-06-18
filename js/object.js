export const itemList = [
    {   
        mainImg: "./img/Republic Jaggernaut main.jpg",
        mainImg2: "./img/Republic Jaggernaut main-2.jpg",
        img3: "./img/Republic Jaggernaut.jpg",
        price: 12999,
        oldprice: 15999,
        rate: "4.5",
        rates: "10",
        name: "Republic Jaggernaut (75413)",
        articul: "10000",
        numParts: "813",
        numMinFigur: 8,
        ageOfGo: "2025"
    },
    {   
        mainImg: "./img/Venator-Class Attack Cruiser main.jpg",
        mainImg2: "./img/Venator-Class Attack Cruiser main2.jpg",
        img3: "./img/Venator-Class Attack Cruiser.jpg",
        price: 3999,
        oldprice: 5999,
        rate: "5.0",
        rates: "2",
        name: "Venator-Class Attack Cruiser (75441)",
        articul: "10001",
        numParts: "643",
        numMinFigur: 0,
        ageOfGo: "2026"
    },
    {   
        mainImg: "./img/Siege of Mandalore Battle Pack main.jpg",
        mainImg2: "./img/Siege of Mandalore Battle Pack main2.jpg",
        img3: "./img/Siege of Mandalore Battle Pack.jpg",
        price: 3499,
        oldprice: 4999,
        rate: "4.7",
        rates: "7",
        name: "Siege of Mandalore Battle Pack (75449)",
        articul: "10002",
        numParts: "116",
        numMinFigur: 4,
        ageOfGo: "2026"
    },
    {   
        mainImg: "./img/Battle Droid with STAP main.jpg",
        mainImg2: "./img/Battle Droid with STAP main2.jpg",
        img3: "./img/Battle Droid with STAP.jpg",
        price: 8999,
        oldprice: 10999,
        rate: "4.0",
        rates: "20",
        name: "Battle Droid with STAP (75428)",
        articul: "10003",
        numParts: "1088",
        numMinFigur: 1,
        ageOfGo: "2025"
    },
    {   
        mainImg: "./img/327th Star Corps Clone Troopers Battle Pack main.jpg",
        mainImg2: "./img/327th Star Corps Clone Troopers Battle Pack main2.jpg",
        img3: "./img/327th Star Corps Clone Troopers Battle Pack.jpg",
        price: 4499,
        oldprice: 6499,
        rate: "5.0",
        rates: "30",
        name: "327th Star Corps Clone Troopers Battle Pack (75431)",
        articul: "10004",
        numParts: "258",
        numMinFigur: 7,
        ageOfGo: "2025"
    },
    {   
        mainImg: "./img/Battle of Felucia Separatist MTT main.jpg",
        mainImg2: "./img/Battle of Felucia Separatist MTT main2.jpg",
        img3: "./img/Battle of Felucia Separatist MTT.jpg",
        price: 13999,
        oldprice: 16999,
        rate: "4.9",
        rates: "19",
        name: "Battle of Felucia Separatist MTT (75435)",
        articul: "10005",
        numParts: "976",
        numMinFigur: 12,
        ageOfGo: "2025"
    },
    {   
        mainImg: "./img/Trade Federation Troop Carrier main.jpg",
        mainImg2: "./img/Trade Federation Troop Carrier main2.jpg",
        img3: "./img/Trade Federation Troop Carrier.jpg",
        price: 5999,
        oldprice: "7999",
        rate: "3.3",
        rates: "3",
        name: "Trade Federation Troop Carrier (40686)",
        articul: "10006",
        numParts: "262",
        numMinFigur: 8,
        ageOfGo: "2024"
    },
    {   
        mainImg: "./img/Clone Trooper & Battle Droid Battle Pack main.jpg",
        mainImg2: "./img/Clone Trooper & Battle Droid Battle Pack main2.jpg",
        img3: "./img/Clone Trooper & Battle Droid Battle Pack.jpg",
        price: 2999,
        oldprice: "3999",
        rate: "5.0",
        rates: "40",
        name: "Clone Trooper & Battle Droid Battle Pack (75372)",
        articul: "10007",
        numParts: "215",
        numMinFigur: 9,
        ageOfGo: "2024"
    },
    {   
        mainImg: "./img/Coruscant Guard Gunship main.jpg",
        mainImg2: "./img/Coruscant Guard Gunship main2.jpg",
        img3: "./img/Coruscant Guard Gunship.jpg",
        price: 15999,
        oldprice: "20999",
        rate: "4.8",
        rates: "7",
        name: "Coruscant Guard Gunship (75354)",
        articul: "10008",
        numParts: "1083",
        numMinFigur: 5,
        ageOfGo: "2023"
    },
    {   
        mainImg: "./img/AT-TE Walker main.jpg",
        mainImg2: "./img/AT-TE Walker main2.jpg",
        img3: "./img/AT-TE Walker.jpg",
        price: 11999,
        oldprice: "14999",
        rate: "5.0",
        rates: "20",
        name: "AT-TE Walker (75337)",
        articul: "10009",
        numParts: "1082",
        numMinFigur: 9,
        ageOfGo: "2022"
    },
]

export const usersList = [
    {
        userName: "Guest",
        password: "",
        favoriteItems: [],
        active: true,
        shoppingСart: []
    },
    {
        userName: "TestUser",
        password: "123321",
        favoriteItems: ["AT-TE Walker (75337)", "Coruscant Guard Gunship (75354)", "Battle of Felucia Separatist MTT (75435)"],
        active: false,
        shoppingСart: []
    }
]
export function switchAccount(oldacc, newacc){
    usersList[oldacc].active = false;
    usersList[newacc].active = true;
};





