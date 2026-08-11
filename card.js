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
    // If a card has a color indicator, store it here
    if (typeLine.startsWith("Color Indicator:")) {
        this.colorIndicator = typeLine.replace("Color Indicator: ", "");
        typeLine = rulesText.slice(0, rulesText.indexOf("\n"));
        rulesText = rulesText.slice(rulesText.indexOf("\n") + 1);
    }
    else {
        this.colorIndicator = "None";
    }
    // I'm leaving the em dash in the type section cause it really doesn't matter (it'll be useful for formatting regardless)
    this.types = typeLine.split(" ");

    // if this card should have power/toughness, give it 
    if (typeLine.includes("Creature") || typeLine.includes("Spacecraft") || typeLine.includes("Vehicle")) {
        this.power_toughness = rulesText.slice(rulesText.lastIndexOf("\n") + 1);
        rulesText = rulesText.slice(0, rulesText.lastIndexOf("\n"));
    }
    else {
        this.power_toughness = "None"
    }

    // everything else left in the rules text gets output here
    this.rulesText = rulesText;

    /**
     * @returns a mildly formatted set of all variables in Card
     * can't get the jsDoc to work on this, oh well
     */
    this.output = function () {
        return "title: " + this.title + "\nmana cost: " + this.manaCost + "\ncolor indicator: " + this.colorIndicator
            + "\ntypes: " + this.types + "\nrules text: " + this.rulesText + "\npower/toughness: " + this.power_toughness;
    }
}

// image size should be 672 x 936