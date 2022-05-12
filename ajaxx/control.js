

function register() {
  var name = document.getElementById("fname").value + " " + document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var sclass = document.getElementById("class").value;

  students = {
    "name" : name,
    "age" : age,
    "gender" : gender,
    "class" : sclass,
  }

  var ls = JSON.parse(localStorage.getItem("users"));
  student.unshift();
  var student = JSON.stringify(students);
  localStorage.setItem(name, student);
  alert("registered.");

  window.location.href = "studentlist.html";
  
}

