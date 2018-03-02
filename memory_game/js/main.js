console.log("Up and Running");

var cards = ["queen", "king", "queen", "king"];
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

var flipCard = function(cardId) {
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};
flipCard(0);
flipCard(2);
checkForMatch();

