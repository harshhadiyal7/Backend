//Create the Server.
const express = require('express')

const app = express()
app.use(express.json())

const notes = []
//title , des
//POST/notes
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "Note created successfully"
    })
})

//GET/notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message:"notes fatched successfully",
        notes: notes
    })
})

//DELETE/notes/:index(1)
app.delete('/notes/:id', (req, res) => {

    const index = req.params.id // 1

    delete notes[index]

    res.status(200).json({
        message: "Note deleted successfully"
    })

})
module.exports = app
