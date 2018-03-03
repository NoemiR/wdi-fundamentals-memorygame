console.log("Up and Running");

var cards = [
{
	rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
}, 
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{ 
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png" 
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
};
}
];
var cardsInPlay = [];

var checkForMatch = function(){

}
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
};

if (cardsInPlay.length === 2) {
	checkForMatch();

var flipCard = function() {
	var cardId =
	this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
};

checkForMatch();
};
var createBoard = function () {
	for (var i = createBoard.length - 1; i >= 0; i--) {
		createBoard[i]
		var newListItem = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-Board'.appendChild(cardElement);
	}
	};
	createBoard();
}
