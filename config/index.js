import { Session } from "friend-connect";
import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(1000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});

new Session({
	hostName: "§l§aAstra Portal", // The hostname of the server
	worldName: "§l§gLifesteal Season 1 Released!", // Use as a MOTD
	version: "1.20.80", // The version of the session, this can be any string.

	protocol: 28915, //The protocol of the server you are connecting to.

	connectedPlayers: 0, // Used as a fallback if pinging the server fails.
	maxConnectedPlayers: 40, // Used as a fallback if pinging the server fails.

	ip: "149.56.19.87", // The ip of the server you are using.
	port: 25577, // The port of the server you are using.
	connectionType: 6, // I don't recommend changing this.

	log: false, // If you want to see the console output set to true.
	joinability: "joinable_by_friends", // The joinability of the session, if this is changed only one account can be used to connect to the session.
	autoFriending: true, // Set this to true if you want to automatically add people who follow the accounts.
	pingServerForInfo: false, // If FriendConnect keeps erroring out due to a rakNet ping error you can set this to false.

	tokenPath: "./auth", // The path to the directory that contains the authentication tokens.
	accounts: ["thecustomdylan@gmail.com"], // A list of emails that correspond to accounts you want to use with FriendConnect.

	//These are values retrieved from the server on when the server advertisement is fetched, if true it will use a value from above.
	constants: {
		worldName: true,
		hostName: true,
		maxConnectedPlayers: true,
		connectedPlayers: true,
		//protocol: true,
		version: true,
	},
});
