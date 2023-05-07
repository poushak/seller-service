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

const initEnv = () => {
    const missing = [];
    if(!process.env.SERVICE_ACCOUNT_FILE) {
        missing.push('SERVICE_ACCOUNT_FILE');
    }

    return missing;
}

module.exports = {
    connectDB,
    initEnv,
};