addLayer("α", {
    name: "aplha", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "α", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF00FF",
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
        {key: "a", description: "A: Reset for aplha points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Aplha gain",
    		description: "+1 aplha",
    		cost: new Decimal(3),
        },
		12: {
			title: "2x5",
    		description: "ten TEN ten per second",
    		cost: new Decimal(3),
        },
		13: {
			title: "eighth",
    		description: "2x5x8",
    		cost: new Decimal(50),
        },
		21: {
			title: "times five",
    		description: "2x5x8x5",
    		cost: new Decimal(1000),
        },
		22: {
			title: "times five another",
    		description: "2x5x8x5x5",
    		cost: new Decimal(7500),
        },
    },
})

addLayer("β", {
    name: "beta", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "β", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#1E2048",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "beta", // Name of prestige currency
    baseResource: "aplha", // Name of resource prestige is based on
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "b: Reset for beta", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "ever triple",
    		description: "x9",
    		cost: new Decimal(2),
        },
		12: {
			title: "x10 gain",
    		description: "9x10",
    		cost: new Decimal(69),
        },
		13: {
			title: "x10 gain",
    		description: "9x10x10",
    		cost: new Decimal(696),
        },
    },
})

addLayer("γ", {
    name: "gamma", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "γ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#808080",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "gamma", // Name of prestige currency
    baseResource: "beta", // Name of resource prestige is based on
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
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "y", description: "Y: Reset for gamma", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "NICE",
    		description: "x15",
    		cost: new Decimal(2),
        },
		12: {
			title: "KOLAK",
    		description: "15x10",
    		cost: new Decimal(30),
        },
		13: {
			title: "Triple gain",
    		description: "15x10x3",
    		cost: new Decimal(100),
        },
    },
})
