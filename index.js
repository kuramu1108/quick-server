const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const teams = require('./teams')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello world, quick server running')
})

app.get('/api/get', function(req, res) {
    res.send({ 
        id: 1,
        parcel: 'done'
    })
})

app.get('/api/teams/all', function(req, res) {
    res.send(teams.teams())
})

app.get('/api/teams/version', function(req, res) {
    res.send(teams.version())
})

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})