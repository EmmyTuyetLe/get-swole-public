const mongoose = require("mongoose");

let DB = process.env.DATABASE_URL;
let dbMessage = "LOCAL MONGO CONNECTION OPEN!!!";
let dbErrorMessage = "LOCAL MONGO CONNECTION ERROR!!!!";

if (process.env.NODE_ENV === "production") {
  DB = process.env.DATABASE_CLOUD_URL;
  dbMessage = "CLOUD MONGO CONNECTION OPEN!!!";
  dbErrorMessage = "CLOUD MONGO CONNECTION ERROR!!!";
}

module.exports = function () {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log(dbMessage);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(dbErrorMessage);
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
