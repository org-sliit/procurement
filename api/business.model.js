const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  pid: {
    type: String
  },
  pname: {
    type: String
  },
  pbprice: {
    type: String
  },

  psprice: {
    type: String
  },

  pqty: {
    type: String
  },
  pcategory: {

    type:String

  },

  description:{

    type:String
  },

  oid:{

    type:String
  }


},{

    collection: 'business'
});

module.exports = mongoose.model('Business', Business);