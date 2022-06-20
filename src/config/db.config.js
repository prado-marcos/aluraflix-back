const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/myflix";

const mongooseConnection = async function () {
    await mongoose.connect(uri);
};
mongooseConnection();

const db = mongoose.connection;

module.exports = db;
