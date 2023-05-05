const express = require('express');
// var session = require('express-session');
const app = express();
// const passport = require('passport');
// jwt = require('jsonwebtoken');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

// app.use(session({ secret: 'keyboard cat' }));
// app.use(passport.initialize());
// app.use(passport.session());


app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken;
    console.log(req.body.events);
    // reply(reply_token)
    res.sendStatus(200)
})
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {xxxxxxx}'
    }
    // let body = JSON.stringify({
    //     replyToken: reply_token,
    //     messages: [{
    //         type: 'text',
    //         text: 'Hello'
    //     },
    //     {
    //         type: 'text',
    //         text: 'How are you?'
    //     }]
    // })
    // request.post({
    //     url: 'https://api.line.me/v2/bot/message/reply',
    //     headers: headers,
    //     body: body
    // }, (err, res, body) => {
    //     console.log('status = ' + res.statusCode);
    // });
}
app.get("/", (req, res) => {
    return res.send('Hello World')
});
app.all('*', (req, res, next) => {
    return res.status(404).json({ 'message': req.originalUrl + ' not fount page' });
});


module.exports = app;
