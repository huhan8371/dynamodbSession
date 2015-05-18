module.exports.dynamodbSession = {
    secret:'mobd',
    resave:false,
    saveUninitialized:false,
    cookie: { maxAge: 60000 },
    options:
    {
        table: 'test-sessions',
        reapInterval: 60000,
        AWSRegion: 'cn-north-1'
    }
}