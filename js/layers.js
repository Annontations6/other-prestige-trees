addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1.001),
        dt:new Decimal(1),
        t:new Decimal(0),
        db:new Decimal(0),
        b:new Decimal(0.001),
        x:new Decimal(0)
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
    layerShown(){return true},
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "buyables",
                "upgrades"
            ],
        },
    },
    automate() {
        if (player.p.x.gte(1)) {
            player.p.points = player.p.points.times(new Decimal(Math.E).pow(player.p.b.times(1000).times(player.p.x.times(player.p.dt)).mul(player.mu.points).mul(buyableEffect("mu", 11)).mul(buyableEffect("mu", 12))))
        }

        //x
        player.p.x = buyableEffect("p", 11).add(buyableEffect("p", 12).add(buyableEffect("p", 13))).add(buyableEffect("p", 14)).add(buyableEffect("p", 15))

        //t
        player.p.t = player.p.t.add(player.p.dt)
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1) },
            display() { return "<h2>X</h2>" },
            canAfford() { return true },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                l = new Decimal(0).add(x.mul(0.1))
                return l;
            }
        },
        12: {
            cost(x) { return new Decimal(1e5).pow(new Decimal.pow(2, x)) },
            display() { return "<h2>Y</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                expo = new Decimal(1).add(x.div(25).floor())
                l = new Decimal(0).add(x.mul(1).pow(expo))

                return l;
            }
        },
        13: {
            cost(x) { return new Decimal(1e200).pow(new Decimal.pow(2, x)) },
            display() { return "<h2>S</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                expo = new Decimal(1).add(x.div(25).floor())
                l = new Decimal(0).add(x.mul("8").pow(expo))

                return l;
            }
        },
        14: {
            cost(x) { return new Decimal("e1.27e10").pow(new Decimal.pow(3, x)) },
            display() { return "<h2>U</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                expo = new Decimal(1).add(x.div(25).floor())
                l = new Decimal(0).add(x.mul("12").pow(expo))

                return l;
            }
        },
        15: {
            cost(x) { return new Decimal("e3.32e14").pow(new Decimal.pow(3, x)) },
            display() { return "<h2>V</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                expo = new Decimal(1).add(x.div(25).floor())
                l = new Decimal(0).add(x.mul(new Decimal(18).add(buyableEffect("mu", 13).add(buyableEffect("mu", 14)))).pow(expo))

                return l;
            }
        },
    }
})

addLayer("mu", {
    name: "mu", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "µ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches:["p"],
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        dmu:new Decimal(0)
    }},
    color: "#555555",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "mu", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
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
    layerShown(){return player.p.points.gte("1e800000")},
    clickables: {
        11: {
            display() {return "<h2>Prestige at +" + player.mu.dmu  +" Mu.</h2>"},
            canClick(){return player.mu.dmu.gte(1)},
            onClick() {
                player.p.points = new Decimal(1.0001)
                player.mu.points = player.mu.points.add(player.mu.dmu)
                player.p.b = player.p.b.add(player.p.db)
            }
        }
    },
    milestones: {
        0: {
            requirementDescription: "100 Mu",
            effectDescription: "Unlock new 2 upgrades.",
            done() { return player.mu.points.gte(100) }
        },
        1: {
            requirementDescription: "1e10 Mu",
            effectDescription: "Unlock new another 2 upgrades.",
            done() { return player.mu.points.gte(1e10) }
        }
    },
    buyables: {
        11: {
            cost(x) { return new Decimal.pow(1e8, x).mul(150) },
            display() { return "<h2>Triple Eulers Power gain.</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let l = new Decimal.pow(3, x)
                return l
            },
            unlocked() {return hasMilestone("mu", 0)}
        },
        12: {
            cost(x) { return new Decimal.pow(10, x).mul(1e3) },
            display() { return "<h2>Increase Eulers power gain by 1</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let l = new Decimal(x.add(1))
                return l
            },
            unlocked() {return hasMilestone("mu", 0)}
        },
        13: {
            cost(x) { return new Decimal.pow(1e5, x).mul(1e11) },
            display() { return "<h2>Increase W Power by 1</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let l = new Decimal(x)
                return l
            },
            unlocked() {return hasMilestone("mu", 1)}
        },
        14: {
            cost(x) { return new Decimal.pow(1e5, x).mul(1e16) },
            display() { return "<h2>Increase W Power by 0.3</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let l = new Decimal(x.mul(0.3))
                return l
            },
            unlocked() {return hasMilestone("mu", 1)}
        },
    },
    automate(){
        player.mu.dmu = player.p.points.log10().div(123456)
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                ["display-text",
        function() { return 'You Have ' + player.mu.dmu + "dµ, at prestige gain to be reset." },
        { "color": "yellow", "font-size": "30px", "font-family": "Consolas" }],
                "clickables",
                "milestones",
                "buyables"
            ],
        },
    }
})

addLayer("g", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "green",
    resource: "Goals", 
    symbol: "G",
    row: "side",
    layerShown(){return player[this.layer].best.gt(0)},
    achievements: {
        11: {
            name: "Unlock Goals!",
            done() {return true},
            tooltip: "Hmm...",
        },
        21: {
            name: "Useful Exponential Tree!",
            done() {return player.p.x.gte(2)},
            goalTooltip: "Reach 2 x.",
            doneTooltip: "Reach 2 x.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        22: {
            name: "In Dialogues",
            done() {return player.p.points.gte("1e10")},
            goalTooltip: "Reach 1e10 f(t).",
            doneTooltip: "Reach 1e10 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        23: {
            name: "If We Googology now...",
            done() {return player.p.points.gte("1e100")},
            goalTooltip: "Reach 1e100 f(t).",
            doneTooltip: "Reach 1e100 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        24: {
            name: "Buzz When Activing we wait cursor supported...",
            done() {return player.p.points.gte("1.8e308")},
            goalTooltip: "Reach 1.8e308 f(t).",
            doneTooltip: "Reach 1.8e308 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        25: {
            name: "Im A Strong",
            done() {return player.p.points.gte("1e1000")},
            goalTooltip: "Reach 1e1000 f(t).",
            doneTooltip: "Reach 1e1000 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        31: {
            name: "Game Power!",
            done() {return player.p.points.gte("1e2048")},
            goalTooltip: "Reach 1e2048 f(t).",
            doneTooltip: "Reach 1e2048 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        32: {
            name: "Googoltoll i stornger points",
            done() {return player.p.points.gte("ee4")},
            goalTooltip: "Reach 1e10000 f(t).",
            doneTooltip: "Reach 1e10000 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        33: {
            name: "Excedding",
            done() {return player.p.points.gte("ee5")},
            goalTooltip: "Reach 1e100,000 f(t).",
            doneTooltip: "Reach 1e100,000 f(t).",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        34: {
            name: "True Current Year",
            done() {return player.mu.points.gte("2022")},
            goalTooltip: "Reach 2022 mu.",
            doneTooltip: "Reach 2022 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        35: {
            name: "True Day",
            done() {return player.mu.points.gte("86400")},
            goalTooltip: "Reach 86400 mu.",
            doneTooltip: "Reach 86400 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        41: {
            name: "True Numberblocks",
            done() {return player.mu.points.gte("97104")},
            goalTooltip: "Reach 97104 mu.",
            doneTooltip: "Reach 97104 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        42: {
            name: "Im Millions",
            done() {return player.mu.points.gte("1e6")},
            goalTooltip: "Reach 1e6 mu.",
            doneTooltip: "Reach 1e6 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        43: {
            name: "True Year",
            done() {return player.mu.points.gte(new Decimal(86400).mul(365))},
            goalTooltip: "Reach 3.1e7 mu.",
            doneTooltip: "Reach 3.1e7 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        44: {
            name: "I Trialogue?",
            done() {return player.p.points.gte("ee10")},
            goalTooltip: "Reach ee10 mu.",
            doneTooltip: "Reach ee10 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        45: {
            name: "TRILLION OF POWER???",
            done() {return player.p.points.gte("ee12")},
            goalTooltip: "Reach ee12 mu.",
            doneTooltip: "Reach ee12 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        51: {
            name: "If we dialogue.",
            done() {return player.mu.points.gte("1e10")},
            goalTooltip: "Reach 1e10 mu.",
            doneTooltip: "Reach 1e10 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        52: {
            name: "I Trillion",
            done() {return player.mu.points.gte("1e12")},
            goalTooltip: "Reach 1e12 mu.",
            doneTooltip: "Reach 1e12 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
        53: {
            name: "QUINTILLION OF POWER???",
            done() {return player.p.points.gte("ee18")},
            goalTooltip: "Reach ee18 mu.",
            doneTooltip: "Reach ee18 mu.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)},
        },
    },
},
)
