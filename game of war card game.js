alert('War!');
 
 //class to create cards
class Card {
    constructor(name, cardValue, cardSuit) {
        this.name = name;
        this.cardValue = cardValue;
        this.cardSuit = cardSuit;
    }
}

//class to create a deck of 52 cards put into an array with a loop to randomize the elements in that array
//and another loop to distribute the first element to one array and the next element to another array
class Deck { 
    constructor() { 
        this.cards = [];
    };

    createDeck() {
        let names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
        let cardSuits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
        let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < cardSuits.length; i++) {
            for (let x = 0; x < names.length; x++) {
                this.cards.push(new Card(names[x], cardValues[x], cardSuits[i]));
            };
        };
    };

    shuffleDeck() {
        for(let i = this.cards.length - 1; i >= 1; i--) {
            let x = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[x];
            this.cards[x] = this.cards[i];
            this.cards[i] = temp;
       };
    };

    dealDeck() {
        for (let i = 0; i < 52; i += 2) {
            let dealCard1 = this.cards.shift();
            player1.playerHand.push(dealCard1);
            let dealCard2 = this.cards.shift();
            player2.playerHand.push(dealCard2);
        };
    };
};


//class to hold player names, with an array for player hand, and to start player score at zero
class Player { 
    constructor(playerName) {
        this.playerName = playerName;
        this.playerHand = [];
        this.playerScore = 0;
    };

    newRound() {
        this.playerHand = [];
        this.playerScore = 0;
    };
};

const player1 = new Player('Player One');
const player2 = new Player('Player Two');

//class to initiate a new deck with a loop to increment rounds with randomized first element of playerHand array
//and a if/else statement to increment player score by round
class Play { 
    start() { 
        player1.newRound();
        player2.newRound();
        const myDeck = new Deck();
        myDeck.createDeck();
        myDeck.shuffleDeck();
        myDeck.dealDeck();
        this.rounds();
        this.scoring();
    };

    rounds() {
        for (let round = 0; round < 26; round++) {
            let playerHand1 = player1.playerHand.shift();
            let playerHand2 = player2.playerHand.shift();
            alert(`Round ${round + 1}
${player1.playerName} has a ${playerHand1.name} of ${playerHand1.cardSuit}.
${player2.playerName} has a ${playerHand2.name} of ${playerHand2.cardSuit}.`);
            if (playerHand1.cardValue > playerHand2.cardValue) {
                player1.playerScore += 1;
                alert(`The winner of round ${round + 1} is ${player1.playerName}. 1 point awarded.
The score is ${player1.playerName} ${player1.playerScore} - ${player2.playerName} ${player2.playerScore}`);
            } else if (playerHand2.cardValue > playerHand1.cardValue) {
                player2.playerScore += 1;
                alert(`The winner of round ${round + 1} is ${player2.playerName}. 1 point awarded.
The score is ${player1.playerName} ${player1.playerScore} - ${player2.playerName} ${player2.playerScore}`);
            } else {
                player1.playerScore === 0;
                player2.playerScore === 0;
                alert(`Round ${round + 1} is a tie. Zero points awarded.
The score remains ${player1.playerName} ${player1.playerScore} - ${player2.playerName} ${player2.playerScore}`);
            };
        };
    };  

//if/else statement to display final score
    scoring() { 
        if (player1.playerScore > player2.playerScore) {
            alert(`The final score for ${player1.playerName} is ${player1.playerScore}.
The final score for ${player2.playerName} is ${player2.playerScore}.
${player1.playerName} is the winner!`);
        } else if (player1.playerScore < player2.playerScore) {
            alert(`The final score for ${player1.playerName} is ${player1.playerScore}.
The final score for ${player2.playerName} is ${player2.playerScore}.
${player2.playerName} is the winner!`);
        } else {
            alert('The game is tied!');
        };
    };
};

//Instance to instantiate the start application method
let newPlay = new Play(); 
newPlay.start();
    