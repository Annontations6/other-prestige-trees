addLayer("greek1", {
        name: "greek 1", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "&alpha;", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
			points: new Decimal(0),
            autoalpha:false,
            abasereq:new Decima(2.45),
            areq:new Decimal(15)
        }},
        color: "#FF0000",
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
            {key: "a", description: "A: Reset for alpha", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return true},
        automate() {
            player.greek1.areq = new Decimal.pow(3, player.greek1.points).mul(15)
        },
        clickables: {
            11: {
                display() {return "<h2>Reset +1 &alpha;</h2><h4>Req:" + player.greek1.areq + " Points.</h4>"},
                canClick() {return player.points.gte(player.greek1.areq)},
                onClick() {
                    player.points = new Decimal(0)
                    player.greek1.points = player.greek1.points.add(1)
                }
            }
        }
})