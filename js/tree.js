var layoutInfo = {
    startTab: "none",
    startNavTab: "yet-another-merge-game",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

var points = new Decimal(0)

addLayer("yet-another-merge-game", {
    tabFormat: [
        "blank",
        ["display-text",
            function() { return 'You have ' + points + " Points!" },
            { "color": "blue", "font-size": "29px", "font-family": "Comic Sans MS" }],
        "buyables"
    ],
    buyables: {
        11: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B1" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B2" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B3" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        21: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B4" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        22: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B5" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        23: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B6" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        31: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B7" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        32: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B8" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        33: {
            cost(x) { return new Decimal.pow(5, x).mul(5) },
            display() { return "B9" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    }
}
)
