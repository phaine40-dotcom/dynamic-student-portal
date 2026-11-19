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

function addStudentToPage(student) {
    const listItem = document.createElement("li");
    listItem.textContent = 
        student.name + " - " + 
        student.course + " - Year " + 
        student.year;
    document.getElementById("student-list").appendChild(listItem);
}
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");
    
    studentList.innerHTML = "";
    
    students.forEach(function(student) {
        addStudentToPage(student);
    });
    document.querySelector("#student-count").textContent = 
        "Registered Students (" + students.length + ")";
}

fetch("students.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(students) {
        displayAllStudents(students);
    })
    .catch(function(error) {
        console.error("Error loading students:", error);
    });