const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    }
  });
  // const Contact = mongoose.model("Contact", contactSchema);
  module.exports = {
    contactSchema
  };