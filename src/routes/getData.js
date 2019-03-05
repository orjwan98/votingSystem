const bringData = require("../queries/bringData");

exports.get = getData = (req, res) => {
  bringData((err, data) => {
    if (err) {
      console.log("an error has occured");
    } else {
      res.send(data);
    }
  });
};
