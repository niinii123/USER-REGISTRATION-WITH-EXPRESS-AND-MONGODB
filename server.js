//These are the dependencies required(express,mongodb)
//And installed via npm
const express = require('express');
const mongodb = require('mongodb');
const app = express();
const MongoClient = mongodb.MongoClient;
const PORT = 5050

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const dbConnectionStr = 'mongodb+srv://Ben:PsIbO28DR2Hrgllj@cluster0.y1kynh1.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'newusers';

MongoClient.connect( dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`connected to ${dbName} Database`)
        db = client.db(dbName)
    })

    //NOW YOU CAN USE THE DB VARIABLE TO ACCESS THE DATABASE
    //THE APIS GO HERE
    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/userregistration.html')
      })

    app.post('/signup', (request, response) => {
        db.collection('user').insertOne(request.body)
        .then(result => {
            console.log('user added')
            response.redirect('/')
        })
        .catch(error => console.error(error))
    })
    

    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
