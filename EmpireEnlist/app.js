let cards = [
    {
        name: "Accuser",
        power: 7,
        armory:5,
        hiperspeed:4,
        description: "Imperial-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//accuser.gif"
    },
    {
        name: "Avenger",
        power: 8,
        armory: 6,
        hiperspeed: 3,
        description: "Imperial-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Avenger.jpg"
    },
    {
        name: "Chimaera",
        power: 8,
        armory: 6,
        hiperspeed: 3,
        description: "Imperial-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Chimmera.jpg"
    },
    {
        name: "Executor",
        power: 12,
        armory: 12,
        hiperspeed:2,
        description: "Super-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//flagshipexecutor.gif"
    },
    {
        name: "Predator",
        power: 13,
        armory: 13,
        hiperspeed: 2,
        description: "Palleon-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//flagshipPredator.jpg"
    },
    {
        name: "Golan 1",
        power: 7,
        armory: 8,
        hiperspeed: 0,
        description: "StarBase-Golan Class",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Golan1.jpg"
    },
    {
        name: "Devastator",
        power: 9,
        armory: 6,
        hiperspeed: 3,
        description: "Imperial-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//devastator.gif"
    },
    {
        name: "Vengeance",
        power: 8,
        armory: 6,
        hiperspeed: 3,
        description: "Imperial-Class Star Destroyer",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//vengance.jpg"
    },
    {
        name: "Katana",
        power: 5,
        armory: 4,
        hiperspeed: 3,
        description: "Dreagnaught-Class Heavy Cruiser",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//katana.gif"
    },
    {
        name: "Onyx 1",
        power: 3,
        armory: 4,
        hiperspeed: 3,
        description: "Starfighter: TIE Defender",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//TIE Defender.jpg"
    },
    {
        name: "Black 11",
        power: 1,
        armory: 3,
        hiperspeed: 0,
        description: "Starfighter: TIE/LN",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//TIE.gif"
    },
    {
        name: "TIE Bomber",
        power: 1,
        armory: 2,
        hiperspeed: 0,
        description: "Starfighter: TIE/SA",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Tie bomber.gif"
    },
    {
        name: "TIE Interceptor",
        power:3,
        armory: 4,
        hiperspeed: 0,
        description: "Starfighter: TIE Interceptor",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Tie interceptor.jpg"
    },
    {
        name: "TIE Scout",
        power: 1,
        armory: 1,
        hiperspeed: 5,
        description: "Starfighter: TIE/SR",
        image: "C://Users//Jon//Pictures//Cuadros//Star Wars//Tie scout.jpg"
    }
    
];

/*primera parte del ejercicio*/

//for (let i = 0; i < cards.lenght; i++) {
//    console.log(cards[i].name);
//}

/* o */

//cards.forEach(function (card) {
//    console.log(card.name);
//});

//const cardToShow = 3;
//for (let i = 0; i < ccardToShow; i++) {
//    console.log(cards[i].name);
//}

/*2a parte*/
//const cardToShow = 3;
//for (let i = 0; i < cardToShow; i++) {
//    document.getElementById("cards").innerHTML += "<li>" + cards[i].name + "</li>";
//}


//const cardToShow = 3;
//let cardsAtText = "";
//for (let i = 0; i < cardToShow; i++) {
//    cardsAtText += "<li>";
//    cardsAtText += "<h1>" + cards[i].name + "</h1>";
//    cardsAtText += "<h2>" + cards[i].power + "</h2>";
//    cardsAtText += "<p>" + cards[i].description + "</p>";
//    cardsAtText += "<img src='" + cards[i].image + "'/>";
//    cardsAtText+="</li>";
//}
//document.getElementById("cards").innerHTML += cardsAtText;

/*3a parte*/

//console.log(Math.random()*15);
//console.log(Math.floor(3.999999));
//console.log(Math.ceil(3.999999));

//console.log();

//const cardToShow = 3;
//let cardsAtText = "";
//let posOfCardAleat;
//let cardsUse = [];
//let posAleat;
//let index;
//for (let i = 0; i < cardToShow; i++) {
//    do {
//        posAleat = Math.floor(Math.random() * cards.length);
//        index = cardsUse.indexOf(posAleat);
//    } while (index !== -1);
//    cardsUse.push(posAleat);

//    cardsAtText += "<li>";
//    cardsAtText += "<h1>" + cards[posOfCardAleat].name + "</h1>";
//    cardsAtText += "<h2>" + cards[posOfCardAleat].power + "</h2>";
//    cardsAtText += "<p>" + cards[posOfCardAleat].description + "</p>";
//    cardsAtText += "<img src='" + cards[posOfCardAleat].image + "'/>";
//    cardsAtText += "</li>";
//}
//document.getElementById("cards").innerHTML += cardsAtText;

/* 8a Parte*/
(function AppCardEmpire() {
    /*se añade la funcion para que no se observen las cartas en si*/


    const cardToShow = 3;
    let cardsAtText = "";
    let posOfCardAleat;
    let cardsUse = [];
    let posAleat;
    let index;
    for (let i = 0; i < cardToShow; i++) {
        do {
            posAleat = Math.floor(Math.random() * cards.length);
            index = cardsUse.indexOf(posAleat);
        } while (index !== -1);
        cardsUse.push(posAleat);

        cardsAtText += "<li>";
        cardsAtText += "<h1>" + cards[posAleat].name + "</h1>";
        cardsAtText += "<h2>" + cards[posAleat].power + "</h2>";
        cardsAtText += "<h2>" + cards[posAleat].armory + "</h2>";
        cardsAtText += "<p>" + cards[posAleat].description + "</p>";
        cardsAtText += "<img src='" + cards[posAleat].image + "'/><br>";
        cardsAtText += "<input type='button' value='Play Card' onclick='alert(\"Has jugado la carta " + cards[posAleat].name + "\")'/>";
        cardsAtText += "</li>";
    }
    document.getElementById("cards").innerHTML += cardsAtText;
} ());
/*de est forma creamos la función y la ejecutamos de la misma, pero se necesita todo entre ()*/


/* 9a Parte*/
