const axios = require('axios');
var cors = require('cors')
const express = require('express');

const app = express();

app.use(cors())
app.use(express.json());

var data = {};

async function getData(url) {
    try {
        const response = await axios.get(url)
        data = response.data
    } catch (error) {
        console.log(error.response.body);
    }
}

app.get('/', (req, res) => {
    getData(req.query.url)
    res.json(data);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening...`) );