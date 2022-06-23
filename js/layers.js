addLayer("m", {
    name: "minutes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "m", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "minutes", // Name of prestige currency
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
        {key: "0", description: "0: Reset for minutes ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Nots where?",
    		description: "You do spect to game know :)",
    		cost: new Decimal(1),
        },
        12: {
			title: "Buyable",
    		description: "unlock new buyable.",
    		cost: new Decimal(9),
        },
        13: {
			title: "Buyable Generator",
    		description: "wwoowoowowowoow",
    		cost: new Decimal(150),
        },
        14: {
			title: "Triple Gain Nation?",
    		description: "use this triple gain for x1 -> x3",
    		cost: new Decimal(2000),
        },
        15: {
			title: "Tears",
    		description: "you have first hour to buy.",
    		cost: new Decimal(3600),
        },
        21: {
			title: "Four Mulitipler Gain",
    		description: "use this four mulitipler gain for x3 -> x12",
    		cost: new Decimal(9000),
        },
        22: {
			title: "Four Mulitipler Gain Another",
    		description: "use this four mulitipler gain for x12 -> x48",
    		cost: new Decimal(36000),
        },
        23: {
			title: "Buyable II",
    		description: "unlock new another buyable.",
    		cost: new Decimal(1e5),
        },
        24: {
			title: "Buyable These?",
    		description: "generation",
    		cost: new Decimal(1e7),
        },
        25: {
			title: "My Layer",
    		description: "unlock new layer.",
    		cost: new Decimal(1e7),
        },
    },
    buyables: {
        11: {
            title: "Point Buyable",
            unlocked() {
                return hasUpgrade('m', 12)
            },
            cost(x) {
                return new Decimal(10).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "minutes" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade('m', 13)) base2 = base2.mul(10)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        12: {
            title: "Point Buyable",
            unlocked() {
                return hasUpgrade('m', 23)
            },
            cost(x) {
                return new Decimal(1e4).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "minutes" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade('m', 24)) base2 = base2.mul(10)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
})

addLayer("t", {
    name: "trate", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "t", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "trate", // Name of prestige currency
    baseResource: "minutes", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
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
        {key: "1", description: "1: Reset for trates ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('m', 25)},
    upgrades: {
		11: {
			title: "You have trate buyable?",
    		description: "what",
    		cost: new Decimal(1000),
        },
        12: {
			title: "You have trate another buyable?",
    		description: "what gg",
    		cost: new Decimal(1e30),
        },
        13: {
			title: "You have trate another buyable?",
    		description: "what gg",
    		cost: new Decimal(1e130),
        },
        14: {
			title: "You have trate another buyable?",
    		description: "what gg",
    		cost: new Decimal("1e305"),
        },
    },
    milestones: {
        0: {
            requirementDescription: "20 trate",
            effectDescription: "Unlock new buyable.",
            done() { return player.t.points.gte(20) }
        },
        1: {
            requirementDescription: "1,000,000 trate",
            effectDescription: "double gain and Unlock new  another buyable.",
            done() { return player.t.points.gte(1e6) }
        },
        2: {
            requirementDescription: "666,666,666 trate",
            effectDescription: "New Buyable Generation.",
            done() { return player.t.points.gte(666666666) }
        },
        3: {
            requirementDescription: "1.00e25 trate",
            effectDescription: "Unlock new another buyable.",
            done() { return player.t.points.gte("1e25") }
        },
        4: {
            requirementDescription: "1.00e120 trate",
            effectDescription: "Unlock new another buyable.",
            done() { return player.t.points.gte("1e120") }
        },
        5: {
            requirementDescription: "1.00e280 trate",
            effectDescription: "Unlock new another buyable and unlock new layer.",
            done() { return player.t.points.gte("1e280") }
        },
    },
    buyables: {
        11: {
            title: "Point Buyable",
            unlocked() {
                return hasMilestone("t", 0)
            },
            cost(x) {
                return new Decimal(5).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "trate" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade('t', 11)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        12: {
            title: "Point Buyable",
            unlocked() {
                return hasMilestone("t", 1)
            },
            cost(x) {
                return new Decimal(69420).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "trate" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade("t", 12)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        13: {
            title: "Point Buyable",
            unlocked() {
                return hasMilestone("t", 3)
            },
            cost(x) {
                return new Decimal(69420).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "trate" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasMilestone("t", 2)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        21: {
            title: "Point Buyable",
            unlocked() {
                return hasMilestone("t", 4)
            },
            cost(x) {
                return new Decimal(1e118).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "trate" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade("t", 13)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        22: {
            title: "Point Buyable",
            unlocked() {
                return hasMilestone("t", 5)
            },
            cost(x) {
                return new Decimal(1e277).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "trate" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade("t", 13)) base2 = base2.mul(2)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
})

addLayer("fx", {
    name: "function x", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "fx", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal("1.8e308"), // Can be a function that takes requirement increases into account
    resource: "functions", // Name of prestige currency
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "2", description: "2: Reset for functions ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Variable I",
    		description: "unlock variable buyable",
    		cost: new Decimal(1),
        },
        12: {
			title: "Variable I generation",
    		description: "you do",
    		cost: new Decimal(150),
        },
    },
    buyables: {
        11: {
            title: "Point Buyable",
            unlocked() {
                return hasUpgrade('fx', 11)
            },
            cost(x) {
                return new Decimal(10).mul(Decimal.pow(2, x)).mul(Decimal.pow(1.25, Decimal.pow(x, 1.1))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + "minutes" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost point gain by x" + format(buyableEffect(this.layer, this.id))
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
                if(hasUpgrade('fx', 12)) base2 = base2.mul(10)
                let expo = new Decimal(0.6)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
})

addLayer("A1", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Achievement 1", 
    row: "side",
    achievements: {
        11: {
            name: "You Played!",
            done() {return true},
            goalTooltip: "huh",
            doneTooltip: "You started the game!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Minute wowowoowowoo",
            done() {return player.points.gte("60")},
            goalTooltip: "reach NaN seconds.",
            doneTooltip: "reach 60 seconds as 1 minute.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "COOL",
            done() {return player.points.gte("300")},
            goalTooltip: "reach (300 seconds or 5 minutes).",
            doneTooltip: "reach (300 seconds or 5 minutes) i like?",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        14: {
            name: "hour!",
            done() {return player.points.gte("3600")},
            goalTooltip: "reach 3,600 second at first hour.",
            doneTooltip: "reach 3,600 second at first hour!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        15: {
            name: "nice",
            done() {return player.points.gte("69420")},
            goalTooltip: "reach 69420 second for at 19 hours and 17 minutes.",
            doneTooltip: "reach 69420 second for at 19 hours and 17 minutes cool",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        21: {
            name: "Million seconds a lot",
            done() {return player.points.gte("1e6")},
            goalTooltip: "reach 1 million seconds for at 11 days and 13 hours and 46 minutes and 40 seconds (text gets rellay long!)",
            doneTooltip: "reach 1 million seconds for at 11 days and 13 hours and 46 minutes and 40 seconds (text gets rellay long!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        22: {
            name: "ɎɆ₳Ɽ",
            done() {return player.points.gte("31536000")},
            goalTooltip: "reach 365 days (after year (somehow?))",
            doneTooltip: "reach 365 days (after year (somehow?))",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        23: {
            name: "Tomrrow^2",
            done() {return player.points.gte("7464960000")},
            goalTooltip: "reach 1 Day Day?",
            doneTooltip: "reach 1 Day Day i something long called!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        24: {
            name: "Trillion",
            done() {return player.points.gte("1e12")},
            goalTooltip: "reach 1 trillion second",
            doneTooltip: "reach 1 trillion second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        25: {
            name: "You do spent?",
            done() {return player.points.gte("4.2e13")},
            goalTooltip: "reach 42 trillion second",
            doneTooltip: "reach 42 trillion second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        31: {
            name: "I think?",
            done() {return player.points.gte("1e14")},
            goalTooltip: "reach 100 trillion second",
            doneTooltip: "reach 100 trillion second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        32: {
            name: "Sorry",
            done() {return player.points.gte("1e20")},
            goalTooltip: "reach 100 quintillion second",
            doneTooltip: "reach 100 quintillion second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        33: {
            name: "Softcapped Sextillion",
            done() {return player.points.gte("1e23")},
            goalTooltip: "reach 1 sextillion seconds per second",
            doneTooltip: "reach 1 sextillion seconds per second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        34: {
            name: "1 Xenna Softcapped",
            done() {return player.points.gte("1e29")},
            goalTooltip: "reach 1 octillion seconds per second",
            doneTooltip: "reach 1 octillion seconds per second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        35: {
            name: "Very Long Time GG",
            done() {return player.points.gte("1e32")},
            goalTooltip: "reach 100 nillion seconds",
            doneTooltip: "reach 100 nillion seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)

addLayer("A2", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Achievement 2", 
    row: "side",
    achievements: {
        11: {
            name: "Reach Decillion!",
            done() {return player.points.gte("1e33")},
            goalTooltip: "reach 1 decillion seconds",
            doneTooltip: "reach 1 decillion seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Softcapped Decillion",
            done() {return player.points.gte("1e35")},
            goalTooltip: "ok think uh...",
            doneTooltip: "reach 1 decillion seconds per second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "Vigintillion",
            done() {return player.points.gte("1e63")},
            goalTooltip: "ok think uh...",
            doneTooltip: "reach 1 vigintillion seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        14: {
            name: "Nice Good Job!",
            done() {return player.points.gte("2.63e69")},
            goalTooltip: "reach 10^69.420 at 2.63e69 for 2.63 duovigintillion seconds.",
            doneTooltip: "reach 10^69.420 at 2.63e69 for 2.63 duovigintillion seconds.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        15: {
            name: "Never ends",
            done() {return player.points.gte("1e100")},
            goalTooltip: "reach 1e100 second i think.",
            doneTooltip: "reach 1e100 second i think.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        21: {
            name: "Never ends Softcapped",
            done() {return player.points.gte("1e102")},
            goalTooltip: "reach 1e100 sps i think.",
            doneTooltip: "reach 1e100 sps i think.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        22: {
            name: "Googol Squared",
            done() {return player.points.gte("1e102")},
            goalTooltip: "reach 1e200 seconds",
            doneTooltip: "reach 1e200 seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        23: {
            name: "Close to Functions?",
            done() {return player.points.gte("1e296")},
            goalTooltip: "reach 1e296 seconds",
            doneTooltip: "reach 1e296 seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        24: {
            name: "Inf-seconds",
            done() {return player.points.gte("1.8e308")},
            goalTooltip: "reach 1.8e308 seconds",
            doneTooltip: "reach 1.8e308 seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        25: {
            name: "Softcapped Infinity",
            done() {return player.points.gte("1.8e310")},
            goalTooltip: "reach 1.8e308 seconds per second",
            doneTooltip: "reach 1.8e308 seconds per second",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        31: {
            name: "f(x) = 1",
            done() {return player.fx.points.gte(1)},
            goalTooltip: "Reach 1 function.",
            doneTooltip: "Reach 1 function.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        32: {
            name: "f(x) = 2",
            done() {return player.fx.points.gte(1e6)},
            goalTooltip: "Reach 1.00e6 function.",
            doneTooltip: "Reach 1.00e6 function.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        33: {
            name: "f(x) = 3",
            done() {return player.fx.points.gte(1e50)},
            goalTooltip: "Reach 1.00e50 function.",
            doneTooltip: "Reach 1.00e50 function.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        34: {
            name: "f(x) = 4",
            done() {return player.fx.points.gte(1e128)},
            goalTooltip: "Reach 1.00e128 function.",
            doneTooltip: "Reach 1.00e128 function.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        35: {
            name: "1e325 seconds a lot",
            done() {return player.points.gte("1e325")},
            goalTooltip: "Reach 1.00e325 seconds.",
            doneTooltip: "Reach 1.00e128 seconds.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)

addLayer("A3", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Achievement 3", 
    row: "side",
    achievements: {
        11: {
            name: "Endgame",
            done() {return player.points.gte("1e327")},
            goalTooltip: "reach 1e327 seconds and finsh to time tree.",
            doneTooltip: "reach 1e327 seconds and finsh to time tree.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)

addLayer("SA", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Sercet Achievements", 
    row: "side",
    achievements: {
        11: {
            name: "i cool",
            done() {return player.points.gte("909090")},
            goalTooltip: "???",
            doneTooltip: "I Ok",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Hmm?",
            done() {return player.points.gte("4e15")},
            goalTooltip: "???",
            doneTooltip: "impossible quadrillion seconds?",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "Very Long time...",
            done() {return player.timePlayed > 9999},
            goalTooltip: "???",
            doneTooltip: "i think reach 10,000 seconds.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        14: {
            name: "Googol End",
            done() {return player.points.gte("2.22e222")},
            goalTooltip: "???",
            doneTooltip: "two two two TWOS? seconds",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)
