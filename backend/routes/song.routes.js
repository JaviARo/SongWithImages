module.exports = app => {
  const songs = require("../controllers/song.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Song
  router.post("/", upload.single('file'), songs.create);

  // Retrieve all Songs
  router.get("/", songs.findAll);

  // Retrieve a single Song with id
  router.get("/:id", songs.findOne);

  // Update a Song with id
  router.put("/:id", upload.single('file'), songs.update);

  // Delete a Song with id
  router.delete("/:id", songs.delete);

  app.use("/api/songs", router);
}