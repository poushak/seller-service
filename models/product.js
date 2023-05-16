const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StringSchema = {
  type: String,
  trim: true,
};

const productSchema = new Schema({
  title: StringSchema,
  description: StringSchema,
  size: StringSchema,
  color: StringSchema,
  brand: StringSchema,
  altered: Boolean,
  sellerId: StringSchema,
  images: Array,
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
  }, // male female others
  occasion: {
    type: String,
    enum: []
  }, // ethnic casual sports formal
  type: {
    type: String,
    enum: []
  },
  // Men types:   suit blazer jacket kurta sherwani sneakers casual formal sport sandal/juti
  // Women types: kurti saree lehenga skirt top dress jacket shrug blazer
  timesRented: {
    type: Number,
    default: 0,
    min: 0,
  },
  apparelType: {
    type: String,
    enum: []
  }, // topWear, bottomWear, accessories, footWear
  fabric: StringSchema,
  fit: StringSchema,
  sleeveLength: {
    type: String,
    enum: []
  }, // full sleeve, half sleeve, sleeve less, 3/4 sleeve
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
  tags: Array,
  purchaseDate: Date,
  marketPrice: {
    type: Number,
    min: 1000
  },
  offeredPrice: {
    type: Number,
  },
  sellPrice: {
    type: Number,
  },
  location: {
    firstLine: StringSchema,
    secondLine: StringSchema,
    city: StringSchema,
    district: StringSchema,
    state: StringSchema,
    country: StringSchema,
    fullAddress: StringSchema,
    pincode: {
      type: String,
      minLength: 6,
      maxLength: 6,
    },
    latitude: {
      type: Number,
      min: 0
    },
    longitude: {
      type: Number,
      min: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

productSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  this.options.new = true;
  next();
});


module.exports = mongoose.model("Product", productSchema);