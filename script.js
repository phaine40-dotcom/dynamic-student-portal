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