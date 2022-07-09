addLayer("c", {
    name: "city", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(10),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "city", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("c", 13)) {
            mult = mult.times(player.points.add(6).log(6))
        }
        if (hasUpgrade("c", 15)) {
            mult = mult.times(12)
        }
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades:{
        11:{
            title:"Double gain",
            description:"Double your point gain.",
            cost:new Decimal(3)
        },
        12:{
            title:"Triple gain",
            description:"triple your point gain.",
            cost:new Decimal(10)
        },
        13:{
            title:"Mulit?",
            description:"mulitipler for gain.",
            cost:new Decimal(25)
        },
        14:{
            title:"log(p)",
            description:"log10(p) gain.",
            cost:new Decimal(250)
        },
        15:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(350)
        },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal.pow(5, x).mul(200) },
            display() { return "<h2>Point Buyable</h2>" },
            unlocked() {return hasAchievement("a", 23)},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let pow = new Decimal(2.25)
                let l = new Decimal.pow(pow, x)
                return l
            }
        },
    }
})

addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "blue",
    resource: "Achievements", 
    symbol: "A",
    row: "side",
    layerShown(){return player[this.layer].best.gt(0)},
    achievements: {
        11: {
            name: "Unlock Achievents!",
            done() {return player.points.gte("100")},
            tooltip: "Hmm...",
        },
        21: {
            name: "Lol",
            done() {return player.points.gte(696)},
            goalTooltip: "Reach 696 points.",
            doneTooltip: "Reach 696 points. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        22: {
            name: "1 Row Done?",
            done() {return player.points.gte(696)},
            goalTooltip: "Reach 5 Owned Upgrades.",
            doneTooltip: "Reach 5 Owned Upgrades. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        23: {
            name: "A Thousand?",
            done() {return player.c.points.gte(1e3)},
            goalTooltip: "Reach 1,000 city. Reward: Unlock new buyable.",
            doneTooltip: "Reach 1,000 city. Reward: Unlock new buyable. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
    },
},
)
