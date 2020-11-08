window.addEventListener('DOMContentLoaded', function () {
  //execute after loading the page
});

let dealer = document.getElementById('dealer-hand');
let hand = document.getElementById('player-hand');

const suits = ['clubs', 'diamonds', 'heart', 'spades'];
const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

class Card {
  constructor(points, suit) {
    this.points = points;
    this.suit = suit;
    this.imageUrl = '<img src = "images/' + points + '_of_' + suit + '.png">';
  }
}
let deck = [];
function buildDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      deck.push(new Card(values[x], suits[i]));
    }
  }
}

// twoClubs = new Card(2, 'clubs');
buildDeck();
console.log(deck);
//button.addEventListener('click')