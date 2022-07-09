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
        if (hasUpgrade("c", 21)) {
            mult = mult.times(12)
        }
        if (hasUpgrade("c", 23)) {
            mult = mult.times(75)
        }
        if (hasUpgrade("c", 31)) {
            mult = mult.times(20)
        }
        if (hasUpgrade("c", 33)) {
            mult = mult.times(25)
        }
        if (hasUpgrade("c", 34)) {
            mult = mult.times(25)
        }
        if (hasUpgrade("c", 35)) {
            mult = mult.times(20)
        }
        if (hasUpgrade("c", 42)) {
            mult = mult.times(20)
        }
        if (hasUpgrade("c", 43)) {
            mult = mult.times(30)
        }
        if (hasUpgrade("c", 44)) {
            mult = mult.times(35)
        }
        if (hasUpgrade("zz", 12)) {
            mult = mult.times(Math.PI * 2)
        }
        mult = mult.times(buyableEffect("c", 12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    passiveGeneration() {
        let passivebase = 0
        if (hasUpgrade('zz', 11)) passivebase = 0.5
        return passivebase
    },
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
        21:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e4)
        },
        22:{
            title:"Achievement boost",
            description:"get achievement boost.",
            cost:new Decimal(1.5e5)
        },
        23:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(7.5e5)
        },
        24:{
            title:"Achievement boost",
            description:"get achievement boost.",
            cost:new Decimal(1e7)
        },
        25:{
            title:"log(p)",
            description:"log10(p) gain.",
            cost:new Decimal(1.5e7)
        },
        31:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e9)
        },
        32:{
            title:"Buyable",
            description:"unlock new buyable..",
            cost:new Decimal(1e11)
        },
        33:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e12)
        },
        34:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e14)
        },
        35:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e24)
        },
        41:{
            title:"Achievement boost",
            description:"get achievement boost.",
            cost:new Decimal(1e31)
        },
        42:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e33)
        },
        43:{
            title:"Mulitipled?",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e39)
        },
        44:{
            title:"Base",
            description:"gain mulitipled so gain.",
            cost:new Decimal(1e45)
        },
        45:{
            title:"Base",
            description:"gain mulitipled so gain and unlock new layer.",
            cost:new Decimal(1e54)
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
        12: {
            cost(x) { return new Decimal.pow(9, x).mul(1e10) },
            display() { return "<h2>City Buyable</h2>" },
            unlocked() {return hasUpgrade("c", 32)},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let pow = new Decimal(3)
                let l = new Decimal.pow(pow, x)
                return l
            }
        },
    }
})

addLayer("zz", {
    name: "zig zag", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ZZ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ['c'],
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FFA2",
    requires: new Decimal(1e54), // Can be a function that takes requirement increases into account
    resource: "zig zag", // Name of prestige currency
    baseResource: "city", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.04, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("c", 45) || player.zz.best.gt(0)},
    upgrades:{
        11:{
            title:"Gained",
            description:"Get auto gain...",
            cost:new Decimal(1)
        },
        12:{
            title:"Tau city gain",
            description:"tau city gain...",
            cost:new Decimal(2)
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
            done() {return hasUpgrade("c", 15)},
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
        24: {
            name: "Nice",
            done() {return player.c.points.gte(69420)},
            goalTooltip: "Reach 69,420 city.",
            doneTooltip: "Reach 69,420 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        25: {
            name: "Leters City",
            done() {return player.c.points.gte(336209)},
            goalTooltip: "Reach 336,209 city.",
            doneTooltip: "Reach 336,209 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        31: {
            name: "Million!",
            done() {return player.c.points.gte(1e6)},
            goalTooltip: "Reach 1,000,000 city.",
            doneTooltip: "Reach 1,000,000 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        32: {
            name: "Fartas",
            done() {return player.c.points.gte(7209333)},
            goalTooltip: "Reach 7,209,333 city.",
            doneTooltip: "Reach 7,209,333 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        33: {
            name: "Guna",
            done() {return player.c.points.gte(1e7)},
            goalTooltip: "Reach 10,000,000 city.",
            doneTooltip: "Reach 10,000,000 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        34: {
            name: "2 Rows Done?",
            done() {return hasUpgrade("c", 25)},
            goalTooltip: "Reach 10 Owned Upgrades.",
            doneTooltip: "Reach 10 Owned Upgrades. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        35: {
            name: "Guna II",
            done() {return player.c.points.gte(333333333)},
            goalTooltip: "Reach 333,333,333 city.",
            doneTooltip: "Reach 333,333,333 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        41: {
            name: "Billion",
            done() {return player.c.points.gte(1e9)},
            goalTooltip: "Reach 1e9 city.",
            doneTooltip: "Reach 1e9 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        42: {
            name: "Dword End",
            done() {return player.c.points.gte(2147483648)},
            goalTooltip: "Reach 2.14e9 city.",
            doneTooltip: "Reach 2.14e9 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        43: {
            name: "1e10 City a lot",
            done() {return player.c.points.gte(1e10)},
            goalTooltip: "Reach 1e10 city.",
            doneTooltip: "Reach 1e10 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        44: {
            name: "69 billion 420 million City",
            done() {return player.c.points.gte(6.9420e10)},
            goalTooltip: "Reach 6.9420e10 city.",
            doneTooltip: "Reach 6.9420e10 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        45: {
            name: "Trillion!",
            done() {return player.c.points.gte(1e12)},
            goalTooltip: "Reach 1e12 city.",
            doneTooltip: "Reach 1e12 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        51: {
            name: "Quadrillion!",
            done() {return player.c.points.gte(1e15)},
            goalTooltip: "Reach 1e15 city.",
            doneTooltip: "Reach 1e15 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        52: {
            name: "Quintillion!",
            done() {return player.c.points.gte(1e18)},
            goalTooltip: "Reach 1e18 city.",
            doneTooltip: "Reach 1e18 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        53: {
            name: "Sextillion!",
            done() {return player.c.points.gte(1e21)},
            goalTooltip: "Reach 1e21 city.",
            doneTooltip: "Reach 1e21 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        54: {
            name: "Septillion!",
            done() {return player.c.points.gte(1e24)},
            goalTooltip: "Reach 1e24 city.",
            doneTooltip: "Reach 1e24 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        55: {
            name: "Octillion!",
            done() {return player.c.points.gte(1e27)},
            goalTooltip: "Reach 1e27 city.",
            doneTooltip: "Reach 1e27 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        61: {
            name: "3 Rows Done?",
            done() {return hasUpgrade("c", 35)},
            goalTooltip: "Reach 15 Owned Upgrades.",
            doneTooltip: "Reach 15 Owned Upgrades. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        62: {
            name: "Nonillion!",
            done() {return player.c.points.gte(1e30)},
            goalTooltip: "Reach 1e30 city.",
            doneTooltip: "Reach 1e30 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        63: {
            name: "Decillion!",
            done() {return player.c.points.gte(1e33)},
            goalTooltip: "Reach 1e33 city.",
            doneTooltip: "Reach 1e33 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        64: {
            name: "Undecillion!",
            done() {return player.c.points.gte(1e36)},
            goalTooltip: "Reach 1e36 city.",
            doneTooltip: "Reach 1e36 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        65: {
            name: "Duodecillion!",
            done() {return player.c.points.gte(1e39)},
            goalTooltip: "Reach 1e39 city.",
            doneTooltip: "Reach 1e39 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        71: {
            name: "Tredecillion!",
            done() {return player.c.points.gte(1e42)},
            goalTooltip: "Reach 1e42 city.",
            doneTooltip: "Reach 1e42 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        72: {
            name: "Quattuordecillion!",
            done() {return player.c.points.gte(1e45)},
            goalTooltip: "Reach 1e45 city.",
            doneTooltip: "Reach 1e45 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        73: {
            name: "Quindecillion!",
            done() {return player.c.points.gte(1e48)},
            goalTooltip: "Reach 1e48 city.",
            doneTooltip: "Reach 1e48 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        74: {
            name: "Gogol City???",
            done() {return player.c.points.gte(1e50)},
            goalTooltip: "Reach 1e50 city.",
            doneTooltip: "Reach 1e50 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        75: {
            name: "Sexdecillion!",
            done() {return player.c.points.gte(1e51)},
            goalTooltip: "Reach 1e51 city.",
            doneTooltip: "Reach 1e51 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        81: {
            name: "Septendecillion!",
            done() {return player.c.points.gte(1e54)},
            goalTooltip: "Reach 1e54 city.",
            doneTooltip: "Reach 1e54 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        82: {
            name: "Octodecillion!",
            done() {return player.c.points.gte(1e57)},
            goalTooltip: "Reach 1e57 city.",
            doneTooltip: "Reach 1e57 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        83: {
            name: "Novemdecillion!",
            done() {return player.c.points.gte(1e60)},
            goalTooltip: "Reach 1e60 city.",
            doneTooltip: "Reach 1e60 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        84: {
            name: "Vigintillion!",
            done() {return player.c.points.gte(1e63)},
            goalTooltip: "Reach 1e63 city.",
            doneTooltip: "Reach 1e63 city. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        85: {
            name: "4 Rows Done?",
            done() {return hasUpgrade("c", 35)},
            goalTooltip: "Reach 20 Owned Upgrades.",
            doneTooltip: "Reach 20 Owned Upgrades. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        91: {
            name: "Zig Zaging",
            done() {return player.zz.points.gte(1)},
            goalTooltip: "Reach 1 zig zag.",
            doneTooltip: "Reach 1 zig zag. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        92: {
            name: "Double Zig Zag",
            done() {return player.zz.points.gte(2)},
            goalTooltip: "Reach 2 zig zag.",
            doneTooltip: "Reach 2 zig zag. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        93: {
            name: "Auto Gain",
            done() {return hasUpgrade("zz", 11)},
            goalTooltip: "Reach 21 Owned Upgrade in Total Layers",
            doneTooltip: "Reach 21 Owned Upgrade in Total Layers (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        94: {
            name: "Triple Zig Zag",
            done() {return player.zz.points.gte(3)},
            goalTooltip: "Reach 3 zig zag.",
            doneTooltip: "Reach 3 zig zag. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        95: {
            name: "best End?",
            done() {return hasUpgrade("zz", 12)},
            goalTooltip: "Reach 22 Owned Upgrade in Total Layers",
            doneTooltip: "Reach 22 Owned Upgrade in Total Layers (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        101: {
            name: "Endgame of v1.0.0",
            done() {return player.zz.points.gte(5)},
            goalTooltip: "Reach 5 zig zag.",
            doneTooltip: "Reach 5 zig zag. (Compeleted!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
    },
},
)
