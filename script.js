//your JS code here. If required.
// Select all input elements with class "code"
const codeInputs = document.querySelectorAll(".code");

codeInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        // Move focus to the next input if there is a value and it's not the last input
        if (e.target.value && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            // Clear current input on backspace
            e.target.value = "";

            // Move focus to the previous input if it exists
            if (index > 0) {
                codeInputs[index - 1].focus();
            }
        }
    });
});
