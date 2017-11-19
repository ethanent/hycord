const Discord = require('discord.js')
const HypixelAPI = require('hypixel-api')

const args = process.argv.slice(2)

if (args.length < 2) {
	console.log('Usage: node index.js <Discord Client ID> <Hypixel API key>')
	process.exit(0)
}

const client = new Discord.Client()
const HypixelClient = new HypixelAPI(args[1])

client.on('ready', async () => {
	client.user.setStatus('online')
	client.user.setGame('!hycord')

	console.log('The bot has been initialized!')
})

client.on('message', async (message) => {
	const messageContent = message.content

	if (messageContent.indexOf('!') !== 0) {
		return
	}

	const commandParts = messageContent.split('!')[1].split(' ')

	const command = commandParts[0]

	const commandArgs = commandParts.length > 1 ? commandParts.slice(1) : []

	switch (command) {
		case 'player':
			
			break
	}
})

client.login(args[0])