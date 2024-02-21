const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(process.env.MONGODB)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = connectToDatabase;
