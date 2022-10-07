const db = require("../models");
const Song = db.songs;
const Op = db.Sequelize.Op;

// Create and Save a new Song
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.duration || !req.body.authors){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Song
  const song = {
    name: req.body.name,
    duration: req.body.duration,
    authors: req.body.authors,
    album: req.body.album ? req.body.album : null,
    filename: req.file ? req.file.filename : ""
  }

  // Save Song in the database
  Song.create(song).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the song"
    })
  });
};

// Retrieve all Songs from the database.
exports.findAll = (req, res) => {
  Song.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Songs"
    })
  })
};

// Find a single Song with an id
exports.findOne = (req, res) => {

}

// Update a Song by the id in the request
exports.update = (req, res) => {

};

// Delete a Song with the specified id in the request
exports.delete = (req, res) => {

};
