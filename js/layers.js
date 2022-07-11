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
            player.p.points = player.p.points.times(new Decimal(Math.E).pow(player.p.b.times(1000).times(player.p.x.times(player.p.dt))))
        }

        //x
        player.p.x = buyableEffect("p", 11).div(10)

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
    }
})
