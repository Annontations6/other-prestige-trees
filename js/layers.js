addLayer("r", {
    name: "reactor", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "reactor points", // Name of prestige currency
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
    upgrades:{
        11:{
           title:"Double gain",
           description:"Double your point gain.",
           cost:new Decimal(1),
           effect() {
            return new Decimal(2)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12:{
            title:"More Based log2(r)",
            description:"more based have so equaltions for math.",
            cost:new Decimal(3),
            effect() {
             return player.r.points.log2()
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
         },
         13:{
            title:"Triple gain",
            description:"triple your point gain.",
            cost:new Decimal(3),
            effect() {
             return new Decimal(15)
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
         },
         14:{
            title:"More Based log2(r)",
            description:"more based have so equaltions for math.",
            cost:new Decimal(25),
            effect() {
             return player.r.points.log2()
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
         },
         15:{
            title:"Buyable",
            description:"unlock new buyable.",
            cost:new Decimal(75),
            effect() {
             return player.r.points.log2()
         },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
         },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal.pow(2, x).mul(15) },
            display() { return "Point Buyable" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        effect(x) {
            let expo = new Decimal(0.6)
            let l = new Decimal.pow(expo, x)
            return l
        }
    }
})