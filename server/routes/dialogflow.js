const express = require('express');
const router = express.Router();
const structjson = require('./structjson.js');
const uuid = require('uuid');

const dialogflow = require('dialogflow');
const config = require('../config/keys');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

router.post('/textQuery', async (req, res) => {

	const request = {
		session: sessionPath,
		queryInput: {
			text: { 
				text: req.body.text,
				languageCode: languageCode,
			},
		},
	};

	const responses = await sessionClient.detectIntent(request);
	const result = responses[0].queryResult;
	res.send(result);
});

//Event Query Route

router.post('/eventQuery', async (req, res) => {
	//We need to send some information that comes from the client to Dialogflow API
	// The text query request.
	const request = {
		session: sessionPath,
		queryInput: {
			event: {
				// The query to send to the dialogflow agent
				name: req.body.event,
				// The language used by the client (en-US)
				languageCode: languageCode,
			},
		},
	};

	// Send request and log result
	const responses = await sessionClient.detectIntent(request);
	console.log('Detected intent');
	const result = responses[0].queryResult;
	console.log(`  Query: ${result.queryText}`);
	console.log(`  Response: ${result.fulfillmentText}`);

	res.send(result);
});

module.exports = router;
