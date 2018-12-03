var mongoose = require('mongoose');

const schema = mongoose.Schema;

let user = new schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  ssoID: {
    type: String
  },
  fileName: {
    type: String
  },
  fileType: {
    type: String
  },
  description: {
    type: String
  }
});
module.exports = mongoose.model('User', user);
