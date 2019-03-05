const dbConnection = require("../database/db_connection.js");

const bringData = cb => {
  dbConnection.query(`select * from posts`, (err, result) => {
    if (err) {
      console.log(err);
      return cb(err);
    }
    cb(null, result.rows);
  });
};

module.exports = bringData;
