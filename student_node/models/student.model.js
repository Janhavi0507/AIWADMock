const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  Name: {type: String}, 
  Roll_No: {type: String}, 
  WAD_Marks: {type: String}, 
  CC_Marks: {type: String}, 
  DSBDA_Marks: {type: String},
  CNS_Marks: {type: String},
  AI_marks: {type: String}
});

mongoose.model('student', studentSchema);
