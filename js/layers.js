addLayer("dα", {
    name:"digit alpha",
    symbol:"dα",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(1),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#808080",                       // The color for this layer, which affects many elements.
    resource: "digit alpha",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "digit",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1);
        if (hasUpgrade('dα', 31)) mult = mult.times(1.69)
        return mult;              // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1);
        if (hasUpgrade('dα', 31)) exp = exp.add(0.02)
        return exp;
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)

    layerShown(){return true},
	upgrades: {
		11: {
			title: "Digit Alpha Better Formula",
    		description: "use for sqrt:√dα",
    		cost: new Decimal(2),
        },
        12: {
			title: "Digit Alpha Better Formula II",
    		description: "use for sqrt:√dα",
    		cost: new Decimal(5),
        },
        13: {
			title: "Digit Alpha Better Formula III",
    		description: "use for logratim ten:log10(dα)",
    		cost: new Decimal(100),
        },
        14: {
			title: "Digit Alpha Better Formula IV",
    		description: "use for sqrt:√dα",
    		cost: new Decimal(500),
        },
        15: {
			title: "Buyable",
    		description: "Unlock New Buyable.",
    		cost: new Decimal(20000),
        },
        21: {
			title: "Digit Alpha Better Formula V",
    		description: "use for logratim ten:log10(dα)",
    		cost: new Decimal(90000),
        },
        22: {
			title: "Digit Alpha Better Formula VI",
    		description: "use for logratim ten:log10(dα)",
    		cost: new Decimal(300000),
        },
        23: {
			title: "Digit Alpha Better Formula VII",
    		description: "use for sqrt:√dα",
    		cost: new Decimal(1e6),
        },
        24: {
			title: "Digit Alpha Better Formula VIII",
    		description: "use for sqrt:√dα",
    		cost: new Decimal(1e7),
        },
        25: {
			title: "Buyable Generator",
    		description: "buyable mulitipler better mulitipler",
    		cost: new Decimal(5e8),
        },
        31: {
			title: "Digit Alpha Better Formula IX",
    		description: "use for logratim ten:log10(dα)",
    		cost: new Decimal(4e9),
        },
        32: {
			title: "Unicode Are Fix",
    		description: "use 69% mulit for digit alpha, expontent by 0.02 and unlock new layer.",
    		cost: new Decimal(4e9),
        },
    },
    buyables: {
        11: {
            title: "Point Buyable",
            unlocked() {
                return hasUpgrade('dα', 15)
            },
            cost(x) {
                return new Decimal(1e5).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " zeros" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                let base1 = new Decimal(2.5)
                let base2 = x
                if(hasUpgrade('dα', 21)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
})

addLayer("dβ", {
    name:"digit beta",
    symbol:"dβ",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#333333",                       // The color for this layer, which affects many elements.
    resource: "digit alpha",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "digit alpha",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.dα.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.1,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1);
        return mult;              // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1);
        return exp;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)

    layerShown(){return true}
})

addLayer("dγ", {
    name:"digit gamma",
    symbol:"dγ",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#dffdff",                       // The color for this layer, which affects many elements.
    resource: "digit beta",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.dβ.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e13),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.15,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)

    layerShown(){return true}
})
