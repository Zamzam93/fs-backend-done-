const express = require('express');
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
//step 1-6complete

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=> console.log('listening on port ${SERVER_PORT}'));
//step 6 done

app.get('/api/users', (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);  
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });