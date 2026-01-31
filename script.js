// Simple HOJ Puzzle Game Logic

// Your puzzle list
const puzzles = [
    "What is the password for the Heroines?",
    "Name the heroine who found the lost scroll.",
    "What color symbolizes fidelity?",
    "What jewel represents truth?",
    "What is the sacred number of the order?"
];

// Function to load a random puzzle
function loadPuzzle() {
    const puzzleBox = document.getElementById("puzzle-container");

    // Pick a random puzzle
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    const selectedPuzzle = puzzles[randomIndex];

    // Display it
    puzzleBox.textContent = selectedPuzzle;
}