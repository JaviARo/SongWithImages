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
  const id = req.params.id;
  Song.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find song with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving song with id=" + id
      });
    });
}


// Update a Song by the id in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.duration || !req.body.authors){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Song
  const song = {
    name: req.body.name,
    duration: req.body.duration,
    authors: req.body.authors,
    album: req.body.album ? req.body.album : null,
    filename: req.file ? req.file.filename : ""
  }
  const id = req.params.id;

  Song.update(song, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Song was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Song with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Song with id=" + id
      });
    });
};

// Delete a Song with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Song.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Song was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Song with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Song with id=" + id
      });
    });
};
