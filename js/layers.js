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
        if(hasUpgrade("b", 15)) mult = mult.times(10)
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
        14: {
            title:"Boost gain II",
            description: "Boost your point gain.",
            cost: new Decimal(1.5e3),
        },
        15: {
            title:"x10 Gain",
            description: "x10 mulitipler of gain.",
            cost: new Decimal(7.5e3),
        },
        21: {
            title:"x3 Gain",
            description: "x3 mulitipler of gain.",
            cost: new Decimal(1e5),
        },
        22: {
            title:"x10 Gain",
            description: "x10 mulitipler of gain.",
            cost: new Decimal(1e6),
        },
        23: {
            title:"x10 Gain",
            description: "x10 mulitipler of gain.",
            cost: new Decimal(1e7),
        },
        24: {
            title:"x10 Gain",
            description: "x10 mulitipler of gain.",
            cost: new Decimal(1e8),
        },
        25: {
            title:"x10 Gain",
            description: "x10 mulitipler of gain.",
            cost: new Decimal(1e9),
        },
        31: {
            title:"Buyable",
            description: "unlock new buyable.",
            cost: new Decimal(1e9),
        },
    },
    milestones: {
        0: {
            requirementDescription: "1e10 waffles",
            effectDescription: "Automatticly Adjust T",
            done() { return player.b.points.gte(1e10) }
        }
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1).mul(x) },
            display() { return "<h2>&beta; (Point Buyable)</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    }
})

addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Achievements", 
    row: "side",
    achievements: {
        11: {
            name: "Start the game",
            done() {return player.b.points.gte("1")},
            goalTooltip: "Uhm, I think you should do something...",
            doneTooltip: "You started the game!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Hundred Balance Live",
            done() {return player.b.points.gte("100")},
            goalTooltip: "Reach 100 Balance.",
            doneTooltip: "Reach 100 Balance. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "Give Me Live",
            done() {return player.b.points.gte("10000")},
            goalTooltip: "Reach 10,000 Balance.",
            doneTooltip: "Reach 10,000 Balance. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        14: {
            name: "Nice",
            done() {return player.b.points.gte("69420")},
            goalTooltip: "Reach 69,420 Balance. Reward: Double your point gain.",
            doneTooltip: "Reach 69,420 Balance. Reward: Double your point gain. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        15: {
            name: "Balance?",
            done() {return player.b.points.gte("4.2e5")},
            goalTooltip: "Reach 420,000 Balance. Reward: Double your point gain.",
            doneTooltip: "Reach 420,000 Balance. Reward: Double your point gain. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        21: {
            name: "Classic",
            done() {return player.b.points.gte("1e7")},
            goalTooltip: "Reach 10,000,000 Balance.",
            doneTooltip: "Reach 10,000,000 Balance. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        22: {
            name: "Nice",
            done() {return player.b.points.gte("1e8")},
            goalTooltip: "Reach 100,000,000 Balance.",
            doneTooltip: "Reach 100,000,000 Balance. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        23: {
            name: "Billion",
            done() {return player.b.points.gte("1e7")},
            goalTooltip: "Reach 1e9 Balance.",
            doneTooltip: "Reach 1e9 Balance. (Completed!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)

