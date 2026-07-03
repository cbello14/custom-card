/**
 * Represents a card
 * NOTE: battles don't work
 * @constructor
 * @param {string} titleLine
 * @param {string} typeLine
 * @param {string} rulesText
 */
function Card(titleLine, typeLine, rulesText) {
    // if card has a mana value, parse that
    if (titleLine.includes("{")) {
        this.title = titleLine.slice(0, titleLine.indexOf("{") - 1);
        this.manaCost = titleLine.slice(titleLine.indexOf("{"));
    }
    // otherwise say "None"
    else {
        this.title = titleLine;
        this.manaCost = "None";
    }
    // I'm leaving the em dash in the type section cause it really doesn't matter (it'll be useful for formatting regardless)
    this.types = typeLine.split(" ");
    this.rulesText = rulesText;

    /**
     * @returns a mildly formatted set of all variables in Card
     * can't get the jsDoc to work on this, oh well
     */
    this.output = function () {
        return "title: " + this.title + "\nmana cost: " + this.manaCost + "\ntypes: " + this.types + "\nrules text: " + this.rulesText;
    }
}

// spacecraft, vehicle <- non-creature types with power/toughness