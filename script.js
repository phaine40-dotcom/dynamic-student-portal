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

class Student {
    constructor(name, email, course) {
        this.name = name;
        this.email = email;
        this.course = course;
    }
    getSummary(){
        return `${this.name} is studying ${this.course}. Email: ${this.email}`;
    }
}

const students = [
    new Student("Alice Johnson", "alijohnson@ap.edu", "Computer Science"),
    new Student("Bob Smith", "bobsmith@ap.edu", "Business Administration"),
    new Student("Charlie Brown", "charliebrown@ap.edu", "Information Technology"),
    new Student("Diana Wilson", "dianawilson@ap.edu", "Psychology"),
    new Student("Ethan Davis", "ethandavis@ap.edu", "Mechanical Engineering")
];
 students.forEach(student => { 
    console.log(student.getSummary());
 });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z\s]+$/;

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");

        nameError.textContent = "";
        emailError.textContent = "";

        let isValid = true;

        if (!nameRegex.test(name)) {
            nameError.textContent = "Please enter a valid name using letters and spaces only.";
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful!");
            registrationForm.submit();
        }
    });
}