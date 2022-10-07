const express = require("express");
const cors = require("cors");

var path = require('path');

const app = express();

// public directory
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// normal use. Doesn't delete the database data
db.sequelize.sync(); // descomentar

// In development, you may need to drop existing tables and re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// }); // comentar

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Song application."});
});

require("./routes/song.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});