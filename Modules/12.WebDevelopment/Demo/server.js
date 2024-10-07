const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


// Create a new Express.js instance
const app = express();

//enable cor
app.use(cors());

// Set up middleware
app.use(express.json());

// Start the server listening on port 1234
app.listen(1234, () => console.log(`Server listening on port 1234`));

// Connect to the MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017', {}).
then(()=>{console.log("Mongoose server has started")
})
.catch((err)=>{
    console.error(err)
})

// Define a schema for our notes stores title, description, and a date
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
});

// Define a model based on the schema
const Note = mongoose.model('Note', noteSchema);

// Define API routes

//Get all created notes
app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

//Creates a new note and stores it in database
app.post('/new', async (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    if(title === undefined || desc === undefined){
        return res
        .status(400)
        .json({
            error: "Both title and description is required in the request body.",
        });
    }
    const note = new Note({
        title: title,
        description: desc,
        date: Date.now(),
    });
    await note.save();
    res.json(note);
});
