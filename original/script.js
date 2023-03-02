console.log("hello world!");

//booster fun

// getRandCardData();
async function getRandCardData() {
    var response = await fetch("https://api.scryfall.com/cards/random")

    var randCard = await response.json();
    console.log(randCard.name);
}


// get rand card by set

// get 15 rand cards from same set

// get all pertinent data from card

//war power v toughness
// 2 arrays of random creatures of mono color each 


const currentGame = {
    playerOne: {
        deck: [],
        life: 20,
        inPlay: {}
    },
    playerTwo: {
        deck: [],
        life: 20,
        inPlay: {}
    }
}

// var color = [w, u, b, r, g]
async function genCreatureDeck(color) {
    var creatureDeck = [];
    var i = 0;
    while(i < 3) {
        var response = await fetch(`https://api.scryfall.com/cards/random?q=t%3Acreature%20c%3A${color}`)
        .then( response => response.json())
        .then(resJSON => {
            creatureDeck.push(resJSON);
        })

        console.log(creatureDeck[i].name + " power: " + creatureDeck[i].power + 
        " toughness: " + creatureDeck[i].toughness);

        i++;
    }
    // console.log("!!!!!!!!!!! THE FIRST CREATURE IS: " + creatureDeck[0].name)
    return creatureDeck;
}


async function startGame() {

    // ************ This would typically be a constructor for a class ****************

    // player 1 start stats
    await genCreatureDeck("w").then(deckOne => currentGame.playerOne.deck = deckOne).then(() => console.log(currentGame.playerOne.deck[0]));
    // currentGame.playerOne.deck = currentGame.playerOne.deck.push( await genCreatureDeck("w"));
    currentGame.playerOne.life = 20;
    currentGame.playerOne.inPlay = {};
    console.log("!!!!!!!!!!!!!!!!!!!! PLAYER ONE DECK");
    
    
    // player 2 start stats
    await genCreatureDeck("r").then(deckTwo => currentGame.playerTwo.deck = deckTwo).then(() => console.log(currentGame.playerTwo.deck[0]));
    // currentGame.playerOne.deck = currentGame.playerOne.deck.push( await genCreatureDeck("w"));
    currentGame.playerTwo.life = 20;
    currentGame.playerTwo.inPlay = {};
    console.log("!!!!!!!!!!!!!!!!!!!! PLAYER TWO DECK");

}


// ******************* RENDER TO DOM ************************
var p1Card = document.querySelector("#p1Card"); 
var p2Card = document.querySelector("#p2Card");

// function p1Draw() {
//     //loop thru deck to draw cards
//     //check if there's already a card displayed and swap it
//     //else first card
//     // p1Card.innerText = currentGame.playerOne.deck[0].name + currentGame.playerOne.deck[0].power;

//     // for mana cost symbols make an api call to api.scryfall.com/symbology and then put mana_cost in as a variable. will need a loop to look up each symbol.
//     p1Card.innerHTML = `<div class="card-container">
//     <div class="content-container">
            
//             <div class="text-bar">
//                 <h4> ${currentGame.playerOne.deck[0].name}</h4>
                
//                     ${currentGame.playerOne.deck[0].mana_cost}
                
//             </div>
//             <div class="img-wrapper">
//                 <img src="${currentGame.playerOne.deck[0].image_uris.art_crop}" alt="image for ${currentGame.playerOne.deck[0].name}" />
//             </div>

//             <h4 class="text-bar ctype"> ${currentGame.playerOne.deck[0].type_line}</h4>

//             <p>
//                 ${currentGame.playerOne.deck[0].oracle_text}
//             </p>
//         <hr>
//         <div class="stats">
//             ${currentGame.playerOne.deck[0].power} / ${currentGame.playerOne.deck[0].toughness}
//         </div>
//     </div> <!-- end of content-container -->
// </div> <!-- end of card-container  this is just for style -->`
// }

// function p2Draw() {
//     p2Card.innerText = currentGame.playerTwo.deck[0].name;
// }

function draw(player, divID) {
    console.log(` Draw button clicked for ${player}`);
    if(divID == 'p1') {
        divID = p1Card;
    } else {
        divID = p2Card;
    }
    //loop thru deck to draw cards
    //check if there's already a card displayed and swap it
    //else first card
    // p1Card.innerText = currentGame.playerOne.deck[0].name + currentGame.playerOne.deck[0].power;

    // for mana cost symbols make an api call to api.scryfall.com/symbology and then put mana_cost in as a variable. will need a loop to look up each symbol.
    for(var j = 0; j <= player.deck.length -1; j++) {
        console.log(`PLAYER . DECK . LENGTH - 1 = ${player.deck.length-1}`)
        
        divID.innerHTML = `
        <div class="card-container">
            <div class="content-container">
                
                <div class="text-bar">
                    <h4> ${player.deck[j].name}</h4>
                    
                        ${player.deck[j].mana_cost}
                    
                </div>
                <div class="img-wrapper">
                    <img src="${player.deck[j].image_uris.art_crop}" alt="image for ${player.deck[j].name}" />
                </div>
    
                <h4 class="text-bar ctype"> ${player.deck[j].type_line}</h4>
    
                <p>
                    ${player.deck[j].oracle_text}
                </p>

            <div class="stats">
                ${player.deck[j].power} / ${player.deck[j].toughness}
            </div>
        </div> <!-- end of content-container -->
    </div> <!-- end of card-container  this is just for style -->`
    
    }
}