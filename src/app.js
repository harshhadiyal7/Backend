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
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index // 1

    delete notes[index]

    res.status(200).json({
        message: "Note deleted successfully"
    })

})

//PATCH/notes/:index(1)
app.patch('/notes/:index', (req, res) => {

    const index = req.params.index // 1
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "Note updated successfully"
    })
})
module.exports = app
