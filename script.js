// Task 1: Variables
const bookTitle = "the eleventh hour";
const author = "kiki rex";
let availableCopies = 20;

// Reassigning available copies
availableCopies = 15; 

console.log("--- Task 1: Variables ---");
console.log("Title:", bookTitle);
console.log("Author:", author);
console.log("Available Copies:", availableCopies);


// Task 2: Data types
const book = {
    title: "the eleventh hour",
    price: 11,
    isAvailable: true
};

console.log("\n--- Task 2: Data Types ---");
console.log("Object Title:", book.title, "| Type:", typeof book.title);
console.log("Object Price:", book.price, "| Type:", typeof book.price);
console.log("Object Availability:", book.isAvailable, "| Type:", typeof book.isAvailable);


// Task 3: Arrays

const genres = ["Mystery", "Thriller", "Suspense"];

console.log("\n--- Task 3: Arrays ---");
// Displaying the last genre
console.log("Last genre:", genres[genres.length - 1]); 

// Replacing the first genre
genres[0] = "Crime Fiction"; 
console.log("Updated genres array:", genres);


// Task 4: Strings
console.log("\n--- Task 4: Strings ---");
console.log("Length of title:", bookTitle.length);
console.log("Uppercase:", bookTitle.toUpperCase());
console.log("Lowercase:", bookTitle.toLowerCase());
console.log("First three characters:", bookTitle.slice(0, 3));
// Changed the search letter to 'v' so it easily finds a match in "eleventh"
console.log("Position of the letter 'v':", bookTitle.indexOf("v"));


// Task 5: Clean up text
console.log("\n--- Task 5: Clean up text ---");
const messyAuthor = "    kiki rex     ";
console.log("Trimmed author name:", messyAuthor.trim());


// Task 6: Null and undefined
console.log("\n--- Task 6: Null and undefined ---");
let borrowerName = null;
let returnDate; // Declared but not assigned

console.log("Borrower Name:", borrowerName);
console.log("Return Date:", returnDate);


/*
 Explanation of the difference between undefined and null:
 - 'undefined' means "I don't know yet." We created the 'returnDate' variable, but we haven't put anything inside it.
 - 'null' means "Empty on purpose." We deliberately set 'borrowerName' to null to clearly state that no one is currently borrowing the book.
*/