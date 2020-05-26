const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number
}, {
	timestamps: true,
	toJSON: {
		transform: (doc, ret) => {
			ret.id = doc._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		}
	}
});

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone; 