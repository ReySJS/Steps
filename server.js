const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const PORT = 80;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///////////////////////Middleware route to serve the home page////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('public'));
app.get('/', (req, res, next) => {

    const options = {
        root: path.join(__dirname + '/public/')
    };

    res.sendFile('index.html', options, (err) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////Middleware route to serve the home page////////////////////////


app.post('/', (req, res) => {

    const fileBuffer = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(fileBuffer);
    users.push(req.ip);

    fs.writeFileSync('./data/users.json', JSON.stringify(users), 'utf-8');
    res.send('');
});

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////Response parameters for POST requests/////////////////////////
app.post('/ranking', (req, res) => {

    let newPlayer = {}
    newPlayer.name = req.body.name;
    newPlayer.score = req.body.score;

    const fileBuffer = fs.readFileSync('./data/players.json', 'utf-8')
    const players = JSON.parse(fileBuffer)
    players.push(newPlayer)
    fs.writeFileSync('./data/players.json', JSON.stringify(players), 'utf-8')
    res.send('')
});
////////////////////////Response parameters for POST requests/////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////Response parameters for GET requests//////////////////////////
app.get('/ranking', (req, res) => {

    const topFive = [];
    let listPlayers = JSON.parse(fs.readFileSync('./data/players.json', 'utf-8'))
    let listPlayersSorted = [...listPlayers].sort((r1, r2) => (r1.score > r2.score ? -1 : 1));
    for (let i = 0; i < 5; i++) {
        if (listPlayersSorted[i]) {
            topFive[i] = listPlayersSorted[i]
        }
    }
    console.log(topFive)
    res.json(topFive)
});
////////////////////////Response parameters for GET requests//////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////PORT configuration///////////////////////////////////
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
/////////////////////////////////PORT configuration///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////