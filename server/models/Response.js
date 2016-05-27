var mongoose = require('mongoose');

var responseSchema = mongoose.Schema({
  rollType: {type: String, req: true},
  message: {type: String, req: true},
  description: {type: String, req: true}
});

module.exports = mongoose.model('Response', responseSchema);
