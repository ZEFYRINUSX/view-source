var request = require('request'),
	readline = require('readline'),
	rl = readline.createInterface({input: process.stdin,output: process.stdout});

rl.question("Uri: ", function(answer) {
	try{
		request({uri: answer,}, function(error, response, body){
			if(error) if(error instanceof Error) console.log("Invalid URI \"" + answer + "\"")
			if(body) console.log(body)
		});
	} catch (e) {
		console.log(e)
	}
	rl.close();
});