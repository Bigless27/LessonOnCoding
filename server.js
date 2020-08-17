var express = require('express');
var bodyparser = require('body-parser');
var states = require('./states');

const app = express();

app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/search', (req, res) => {
    let stateResults = [];
    stateResults = states.map((state) => { return { name: state.state, flag: state.state_flag_url } })
    res.json({ "data": stateResults });
});


app.get('/api/search/:id', (req, res) => {
    var searchRes = states.map((state) => { return { name: state.state, flag: state.state_flag_url } }).filter((word) => {
        let param = req.params.id;
        let name = param[0].toUpperCase() + param.substr(1);
        if (word.name.indexOf(name) >= 0) {
            return name;
        }
    })

    setTimeout(() => {
        res.json({ "data": searchRes })
    }, 3000)
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);