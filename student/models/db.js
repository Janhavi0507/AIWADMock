const mongoose = require('mongoose');

mongoose.connect("mongobd://localhost:27017/student", {useNewUrlParse: true}, (err) => {
  if (!err) { console.log('Connection established.') }
  else { console.log('Error found: ' + err) }
});

require("./student.model");