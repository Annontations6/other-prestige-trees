addLayer("M", {
    name: "minutes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "m", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(60), // Can be a function that takes requirement increases into account
    resource: "minutes points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for minute points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Minute Production",
    		description: "this game for minute.",
    		cost: new Decimal(1),
        },
		12: {
			title: "Feel Minute Tract",
    		description: "tracting...",
    		cost: new Decimal(3),
        },
		13: {
			title: "Feel Minutes Tract",
    		description: "tracting...",
    		cost: new Decimal(7),
        },
		21: {
			title: "Feel Minute what Tract",
    		description: "tracting...",
    		cost: new Decimal(20),
        },
		22: {
			title: "Feel Minute while Tract",
    		description: "tracting...",
    		cost: new Decimal(60),
        },
    },
})

addLayer("D", {
    name: "days", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "d", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(86400), // Can be a function that takes requirement increases into account
    resource: "days points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
