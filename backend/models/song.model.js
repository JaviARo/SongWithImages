module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define("song", {
    name: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    authors: {
      type: Sequelize.STRING
    },
    album: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Song;
}