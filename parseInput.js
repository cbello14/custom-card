/**
 * Splits the text in the input field (designed for a single card to be input)
 */
function splitInput() {
    const plaintext = document.getElementById("plaintext");
    const text = plaintext.value;
    const separateCards = text.split("\n----\n");
    const cards = [];
    for (let card of separateCards) {
        // remove whitespace in case of formatting errors
        card = card.trim();
        let temp = card.split("\n");
        // recombine the last lines of card into the full rules text
        for (let i = 3; i < temp.length; i++) {
            temp[2] = temp[2] + "\n" + temp[i];
        }
        // create a Card object for each face/adventure/prepared spell/whatever the fuck
        cards.push(new Card(temp[0], temp[1], temp[2]));
    }
    // temporary output
    for (const card of cards) {
        document.getElementById("tempOutput").innerHTML += card.output();
        document.getElementById("tempOutput").innerHTML += "\n----\n";
    }
}