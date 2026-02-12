// JS Assignment

const fruits = ["Apple","Banana","Mango","Orange"];

// Print the first fruit
console.log(fruits[0]);
// print the last fruit
console.log(fruits[fruits.length-1]);
// Add "Grapes" to the array.
fruits.push("Grapes");
// Remove the first fruit.
fruits.shift();
fruits.splice(0,1);
// Print total number of fruits.
console.log(fruits.length);


// data
const student = {
  name: "Ravi",
  age: 20,
  grade: "A"
}

// Print the student name.
console.log(student.name);
// Print the student age.
console.log(student.age);
// Change the grade from "A" to "A+".
student.grade = "A+";
// Add a new property: city: "Kathmandu"
student.city= "Kathmandu";
// Print the whole student object.
student;
// Print name and age of the student
let sna = "Name = " + student.name + " , age ="+ student.age; 
console.log(sna);


// Array Loop
// Data:
const numbers = [5, 10, 15, 20]
// Print all numbers using a loop.
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// Print the sum of all numbers.
let sum= 0;
for (let i=0;i<numbers.length;i++){
    sum  += numbers[i];
}
console.log(sum);
// Print numbers greater than 10.
for (let i=0;i<numbers.length;i++){
    if(numbers[i]>10){
        console.log(numbers[i]);
    }
}

// Data: 
const users = [
  { id: 1, name: "Aarav", age: 22, role: "Developer", isActive: true },
  { id: 2, name: "Sita", age: 25, role: "Designer", isActive: false },
  { id: 3, name: "Ram", age: 28, role: "Manager", isActive: true },
  { id: 4, name: "Gita", age: 21, role: "Developer", isActive: true }
]

// Array Operations
// Print all user names.
for (let i=0;i<users.length;i++){
    console.log(users[i].name);
}
// Count total number of users.
let total=0;
for (let i=0;i<users.length;i++){
    total+=1;
}
console.log(total);
// Add a new user to the array.
users.push({id: 5,name: "newuser123" , age:21 , role:"Worker", isActive: true });
// Remove the user with id = 2.
users.splice(1,1)

// Filtering
// Get all active users.
users.filter(users => users.isActive === true);
// Get all users whose role is "Developer".
users.filter(users => users.role === "Developer");
// Get users older than 23.
users.filter(users => users.age >= 23);

// Mapping
// Create a new array that contains only user names.
const userNames = users.map((user)=>user.name);
// Create a new array with format: "Aarav (Developer)"
const Developer = users.map(user => user.name + "(" + user.role + ")");

//  Finding
// Find a user with id = 3.
users.find(user => user.id === 3);
// Check if there is any inactive user.
users.find(user => !user.isActive)
// Check if all users are active.
users.every(user => user.isActive);

//  Sorting
// Sort users by age (ascending).
users.sort((a,b)=>a.age-b.age);
// Sort users by name (alphabetically).
users.sort((a, b) => a.name.localeCompare(b.name));

// Object Manipulation
// Update the role of the user with id = 1 to "Senior Developer".

const userupdate = users.find(user => user.id === 1);
if (userupdate) user1.role = "Senior Developer";
// Toggle isActive status of user with id = 2.
const toggleupdate = users.find(user => user.id === 2);
if (toggleupdate) user2.isActive = !user2.isActive;