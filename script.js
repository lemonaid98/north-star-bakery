// Data object to manage our feature state
const bakeryData = {
    perkClaimed: false,
    discountMessage: "Success! 10% Off Perk Claimed. Show this screen at checkout."
};

// Function to handle the interactive feature and browser storage
function setupPerkFeature() {
    const perkBtn = document.getElementById("perk-btn");
    const perkText = document.getElementById("perk-text");

    if (!perkBtn) return; // Guard clause if not on the home page

    // 4. Implement Browser Storage: Check if already saved in localStorage
    if (localStorage.getItem("northStarPerk") === "true") {
        bakeryData.perkClaimed = true;
        perkText.textContent = bakeryData.discountMessage;
        perkBtn.textContent = "Perk Already Claimed!";
        perkBtn.disabled = true;
    }

    // 1. Interactive Feature: Respond to user click and update page dynamically
    perkBtn.addEventListener("click", function() {
        bakeryData.perkClaimed = true;
        perkText.textContent = bakeryData.discountMessage;
        perkBtn.textContent = "Perk Claimed!";
        perkBtn.disabled = true;

        // Save state to localStorage
        localStorage.setItem("northStarPerk", "true");
    });
}

// Function for Simple Form Validation (Touchstone 4 - Step 3)
function setupFormValidation() {
    const contactForm = document.querySelector("form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function(event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        
        // Check if name is empty, spaces only, or less than 2 characters
        if (nameInput && nameInput.value.trim().length < 2) {
            event.preventDefault(); // Stop form submission
            alert("Please enter a valid full name (at least 2 characters).");
            nameInput.focus();
            nameInput.value = ""; // Clear out accidental spaces
        }
        // 2. Validate Email Address (checks if empty or missing '@')
        if (emailInput && (!emailInput.value.includes("@") || emailInput.value.trim() === "")) {
            event.preventDefault(); // Stop form submission
            alert("Please enter a valid email address containing '@'.");
            emailInput.focus();
            return;
        }
    });
}

// Run functions when the page loads
window.addEventListener("DOMContentLoaded", function() {
    setupPerkFeature();
    setupFormValidation();
});
