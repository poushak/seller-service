const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              dbName: 'poushak',
            }
          );
    } catch(err) {
        console.log("Unable to connect to mongo: ", err)
    }
}

module.exports = connectDB;