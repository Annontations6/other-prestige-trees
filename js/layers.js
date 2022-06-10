addLayer("🥰", {
    name: "smiles", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🥰", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        {key: "s", description: "S: Reset for smile points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Smile gain",
    		description: "add for 1.5 gain",
    		cost: new Decimal(1),
        },
		12: {
			title: "Smile triple",
    		description: "wow this powerful!",
    		cost: new Decimal(2),
        },
		13: {
			title: "10 gain",
    		description: "ever more",
    		cost: new Decimal(15),
        },
		14: {
			title: "buyable unlock",
    		description: "what",
    		cost: new Decimal(15),
        },
    },
    buyables: {
        11: {
            title: "Smile Buyable",
            unlocked() {
                return hasUpgrade('🥰', 14)
            },
            cost(x) {
                return new Decimal(400).mul(Decimal.pow(2, 1.5)).mul(Decimal.pow(1.1, Decimal.pow(1.09, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " smiles" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let expo = new Decimal(1)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
})
