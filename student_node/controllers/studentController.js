const express = require('express');
const mongoose = require('mongoose');
const Student = mongoose.model('student');

var router = express.Router();

router.get('/', (req, res) => {
  res.render("student/addEdit", {
    viewTitle : "Insert Student Record"
  });
});

router.post('/', (req, res) => {
  InsertStudentRecord(req, res);
});

function InsertStudentRecord(req, res) {
  var student = new Student();
  student.Name = req.body.name;
  student.rollno = req.body.rollno;
  student.wadmarks = req.body.wadmarks;
  student.ccmarks = req.body.ccmarks;
  student.dsbdamarks = req.body.dsbdamarks;
  student.cnsmarks = req.body.cnsmarks;
  student.aimarks = req.body.aimarks;
  student.save((err, doc) => {
    if (!err) res.redirect('student/list');
    else console.log('Error: ' + err);
  })
}

router.get('/list', (req, res) => {
  res.json('from list');
});

module.exports = router;