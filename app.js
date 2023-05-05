const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const logger = require("./middlewares/logger");
const connectDB = require("./config/mongo")
const productRouter = require("./routes/product");
const healthRouter = require("./routes/health");

const app = express();

// middlewares
app.use(express.json());
app.use(fileUpload({limits: {fileSize: 1 * 1024 * 1024}})); // 1MB file size limit for uploads
app.use(logger);

// routes
app.use("/", healthRouter);
app.use("/products", productRouter);

const PORT = process.env.PORT || 3001;
//connectDB();

// mongoose.connection.once('open', () => {
//   console.log('connected to mongo')
//   app.listen(3001, () => {
//     console.log("Server is running on port 3001");
//   });
// })


app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});


module.exports = app;