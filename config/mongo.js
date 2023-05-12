const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
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
    if(!process.env.MONGO_URI) {
        missing.push('MONGO_URI');
    }

    if(!process.env.SERVICE_ACCOUNT_FILE) {
        missing.push('SERVICE_ACCOUNT_FILE');
    }

    if (!process.env.PG_HOST) {
        missing.push('PG_HOST');
    }

    if (!process.env.PG_PORT) {
        missing.push('PG_PORT');
    }

    if (!process.env.PG_USERNAME) {
        missing.push('PG_USERNAME');
    }

    if (!process.env.PG_PASSWORD) {
        missing.push('PG_PASSWORD');
    }

    if (!process.env.PG_DATABASE) {
        missing.push('PG_DATABASE');
    }

    return missing;
}

module.exports = {
    connectDB,
    initEnv,
};