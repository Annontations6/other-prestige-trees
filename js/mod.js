let modInfo = {
	name: "The Emoji Tree",
	id: "mymod",
	author: "nobody",
	pointsName: "emoji points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "My Emojipedia Search Emoji",
	discordLink: "https://emojipedia.org/",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.1",
	name: "Rank I",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.1 - Rank II</h3><br>
		- add 1 upg<br>
		- even more fixed more bugs..`

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
	if (hasUpgrade('🥰', 11)) gain = gain.add(0.5)
	if (hasUpgrade('🥰', 12)) gain = gain.times(3)
	if (hasUpgrade('🥰', 13)) gain = gain.add(10)
	if (hasUpgrade('🥰', 14)) gain = gain.times(2)
	if (hasUpgrade('🥰', 21)) gain = gain.times(5)
	if (hasUpgrade('🥰', 22)) gain = gain.times(3)
	if (hasUpgrade('🥰', 23)) gain = gain.times(3)
	if (hasUpgrade('🥰', 31)) gain = gain.times(6)
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
	return player.points.gte(new Decimal("e3000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(86400) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
