let modInfo = {
	name: "The Digit Tree",
	id: "A6TDT",
	author: "Annontations6",
	pointsName: "digits",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Letter Layers Creator My Discord Server :)",
	discordLink: "https://discord.gg/WbQhM2j8",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 48,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0.0",
	name: "Start",
}

let changelog = `i later link for changelog.html?`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('dα', 11)) gain = gain.times(player.dα.points.sqrt())
	if (hasUpgrade('dα', 12)) gain = gain.times(player.dα.points.sqrt())
	if (hasUpgrade('dα', 13)) gain = gain.times(player.dα.points.log10())
	if (hasUpgrade('dα', 14)) gain = gain.times(player.dα.points.sqrt())
	if (hasUpgrade('dα', 21)) gain = gain.times(player.dα.points.log10())
	if (hasUpgrade('dα', 22)) gain = gain.times(player.dα.points.log10())
	if (hasUpgrade('dα', 23)) gain = gain.times(player.dα.points.sqrt())
	if (hasUpgrade('dα', 24)) gain = gain.times(player.dα.points.sqrt())
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.dγ.points.gte(new Decimal("8"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(172800) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
