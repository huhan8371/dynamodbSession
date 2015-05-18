var session    = require('express-session');
var sessionStore = require('connect-dynamodb')({session: session});

module.exports.dynamodbSession = function(app, conf)
{
	return function()
	{
		app.use(session({
		    secret: conf.session_secret,
		    saveUninitialized: conf.saveUninitialized,
		    resave: conf.resave,
		    cookie: conf.cookie,
		    store: new sessionStore(conf.options)
		}));
	};
};