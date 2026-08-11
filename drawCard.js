const cardCanvas = document.getElementById("cardCanvas");
const context = cardCanvas.getContext("2d");
const width = 672;
const height = 936;

context.fillStyle = "rgb(0 0 0)";
context.strokeRect(0, 0, width, height);

/**
 * draws the card onto cardCanvas using data from card.js
 */
function drawCard() {
    if (cards.length > 0) {
        context.font = "36px serif";
        context.fillText(cards[0].title, 50, 50);
    }
}