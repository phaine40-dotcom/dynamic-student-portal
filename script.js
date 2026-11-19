alert("Welcome to the Dynamic Student Portal!");
console.log("Welcome to the Dynamic Student Portal!");

let studentName = "John Doe";
let yearOfStudy = 2;
console.log("Student Name: " + studentName);
console.log("Year of Study: " + yearOfStudy);

if (yearOfStudy === 1) {
    console.log("Welcome, first-year student!");
} else {
    console.log("Welcome, continuing student!");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        let studentName = document.getElementById("name").value.trim();

        if (studentName === "") {
            alert("Please enter your full name.");
            event.preventDefault();
        }
    });
}

const students = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Wilson",
    "Ethan Davis"
];
function addStudentToPage(name) {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    document.getElementById("student-list").appendChild(listItem);
}
function displayAllStudents() {
    students.forEach(function(name) {
        addStudentToPage(name);
    });
}
const showStudentsButton = document.getElementById("show-students");

showStudentsButton.addEventListener("click", function() {;
   const studentList = document.getElementById("student-list");
   studentList.innerHTML = "";
   displayAllStudents(students);
});