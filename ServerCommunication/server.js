const express = require('express');
const app = express();
const port = 3000;

app.get('/getdata', (req, res) => {
    // Hier Daten zurückgeben, die der M5Stack abrufen kann
    // const data = { temperature: 25, humidity: 60 };
    // res.json(data);
    res.send(true);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});