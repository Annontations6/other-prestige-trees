var t = new Decimal(125)

addLayer("b", {
    name: "balance", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "balance points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    automate() {
        // VARIABLE DESCREASING
        if (t.gte(1)) {
            t = t.sub(1)
        } else {
            // when
        }
    },
    passiveGeneration() {
        let passivebase = 0
        if (hasUpgrade('b', 12)) passivebase = 1
        return passivebase
    },
    clickables: {
        11: {
            display() {return "Adjust T"},
            canClick() {return true},
            onClick() {
                t = new Decimal(125)
            }
        }
    },
    upgrades: {
        11: {
            title:"Double gain",
            description: "Double your point gain.",
            cost: new Decimal(1),
        },
        12: {
            title:"Passivebase",
            description: "triple gain and gained per second.",
            cost: new Decimal(5),
        },
        13: {
            title:"Boost gain",
            description: "Boost your point gain.",
            cost: new Decimal(100),
        },
    }
})
