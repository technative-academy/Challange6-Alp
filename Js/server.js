const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Match = require('../models/Match'); 

const app = express();
app.use(cors());
app.use(express.json()); 

// MONGO_URI kısmına MongoDB Atlas linkini koyacağız

const mongoUri="mongodb+srv://alperenfiles_db_user:8MyeftwPlZDOQTZ5@cluster0.reoavwa.mongodb.net/?appName=Cluster0";
mongoose.connect(mongoUri)
    .then(() => console.log("Success!!!"))
    .catch(err => console.log("Error:", err));




app.get('/api/matches', async (req, res) => {
    const matches = await Match.find();
    res.json(matches);
});


app.delete('/api/matches/:id', async (req, res) => {
    await Match.findByIdAndDelete(req.params.id);
    res.json({ message: "Maç silindi!" });
});


app.put('/api/matches/:id', async (req, res) => {
    const updatedMatch = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMatch);
});


app.post('/api/matches', async (req, res) => {
    const newMatch = new Match(req.body);
    await newMatch.save();
    res.status(201).json({ message: "Match is saved" });
});

app.listen(5000, () => console.log("API 5000 port!"));