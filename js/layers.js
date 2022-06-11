addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
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
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Add 1",
    		description: "you have",
    		cost: new Decimal(1),
        },
		12: {
			title: "Add 5",
    		description: "you have",
    		cost: new Decimal(2),
        },
		13: {
			title: "idk",
    		description: "i something times 2",
    		cost: new Decimal(10),
        },
		14: {
			title: "yes of",
    		description: "this add aaaaa",
    		cost: new Decimal(25),
        },
		15: {
			title: "of do",
    		description: "times 3",
    		cost: new Decimal(100),
        },
		16: {
			title: "thousand gain",
    		description: "h",
    		cost: new Decimal(500),
        },
		21: {
			title: "yes",
    		description: "cool tree",
    		cost: new Decimal(1500),
        },
		22: {
			title: "while",
    		description: "yes of yes",
    		cost: new Decimal(10000),
        },
		23: {
			title: "mulit 10",
    		description: "hi",
    		cost: new Decimal(30000),
        },
		31: {
			title: "yes",
    		description: "what",
    		cost: new Decimal(90000),
        },
		32: {
			title: "Gemotry Dash",
    		description: "where",
    		cost: new Decimal(300000),
        },
		33: {
			title: "mulit 10",
    		description: "hi",
    		cost: new Decimal(3e6),
        },
		34: {
			title: "mulit 10",
    		description: "what",
    		cost: new Decimal(3e7),
        },
		35: {
			title: "mulit 1000",
    		description: "oh",
    		cost: new Decimal(1e9),
        },
    },
})
