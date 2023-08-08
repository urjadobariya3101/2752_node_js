const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url,config.mongodb.options)
        .then((data) => {
            console.log("Database connection successfullu!");
        })
        .catch((error) => {
            console.log("Database connection error: ",error);
        });
};

module.exports = { connectDB };