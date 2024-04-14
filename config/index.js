import { Session } from "friend-connect";
import express from 'express';
const app = express()
const port = 1000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


new Session({
	hostName: "Astra Portal", // The hostname of the server
	worldName: "New server testing", // Use as a MOTD
	version: "1.20.71", // The version of the session, this can be any string.

	protocol: 28915, //The protocol of the server you are connecting to.

	connectedPlayers: 0, // Used as a fallback if pinging the server fails.
	maxConnectedPlayers: 40, // Used as a fallback if pinging the server fails.

	ip: "astra13.aternos.me", // The ip of the server you are using.
	port: 28792, // The port of the server you are using.
	connectionType: 6, // I don't recommend changing this.

	log: false, // If you want to see the console output set to true.
	joinability: "joinable_by_friends", // The joinability of the session, if this is changed only one account can be used to connect to the session.
	autoFriending: true, // Set this to true if you want to automatically add people who follow the accounts.
	pingServerForInfo: true, // If FriendConnect keeps erroring out due to a rakNet ping error you can set this to false.

	tokenPath: "./auth", // The path to the directory that contains the authentication tokens.
	accounts: ["thecustomdylan@gmail.com"], // A list of emails that correspond to accounts you want to use with FriendConnect.

	//These are values retrieved from the server on when the server advertisement is fetched, if true it will use a value from above.
	constants: {
		//worldName: true,
		//hostName: true,
		maxConnectedPlayers: true,
		connectedPlayers: true,
		//protocol: true,
		version: true,
	},
});
