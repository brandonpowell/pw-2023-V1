//If you are ready to setup your production ready website on https://www.netlify.com/ how should my backend sever code be setup. In the code below is everything ready to lauch on netlify.
var restify = require('restify'); //Restify is the server that the backend.
var server = restify.createServer();
var corsMiddleware = require('restify-cors-middleware');
var request = require('request');

function subscribe(req, res, next) {
    var email = req.body.email; // We are grabbing the email.
    var dataCenter = process.env.Mailchimp_DATA_CENTER || 'defaultValue';
    var apiKey = process.env.Mailchimp_API_KEY || 'defaultValue';
    var listID = process.env.Mailchimp_list_ID || 'defaultValue';

    var options = {//put all the email into the list with in mailchimp...
        uri: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`, 
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': `apikey ${apiKey}`}, //'Authorization': `apikey ${ParApiKey}`}
        body: JSON.stringify({email_address: email, status: 'subscribed'})
    }

    request(options, function(error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode); //print the response status code if a response was received.
      console.log('body:', body);
      
        try {// eslint-disable-next-line react/no-typos
            var respObj = {}; //Initial response object...
            if ( response.statusCode === 200) {//What is the statusCode for Mailchimp API?....
              respObj = { success: `Subscribed using ${email}!`, message: JSON.parse(response.body) };
              console.log(respObj.statusCode); 
            } else {
              respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
            }
            res.send(respObj);
            return next();
          } catch (err) {
            console.log(err);
            var respErrorObj = { error: 'There was an error with your request', message: err.message };
             //This message just for the developer to see what going on.
            res.send(respErrorObj);
            return next();
        }
    });

   
}

//Enable CORS Middleware.
var cors = corsMiddleware ({
    origin: ['http://localhost:3000']
});

server.use(restify.plugins.bodyParser());
//Use CORS.
server.pre(cors.preflight);
server.use(cors.actual);
//Subscribe endpoint.
server.post('/subscribe', subscribe);
server.listen(8080, function(){
    console.log('%s listening at %s', server.name, server.uri);
});

