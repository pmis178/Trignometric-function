// Function to convert angle to radians based on the selected unit
function convertToRadians(angle, unit) {
    if (isNaN(angle)) {
        alert("Please enter a valid number for the angle.");
        return NaN;
    }
    return unit === 'degrees' ? angle * (Math.PI / 180) : angle;
}

// Function to handle form submissions
function handleFormSubmit(event, func) {
    event.preventDefault();
    const angleInput = event.target.querySelector('input[type="number"]');
    const angle = parseFloat(angleInput.value);
    const unit = document.getElementById('unit').value;
    const radians = convertToRadians(angle, unit);

    if (isNaN(radians)) {
        return; // Exit if the angle is invalid
    }

    const result = func(radians);
    const resultSpan = event.target.parentElement.querySelector('p span');
    resultSpan.textContent = result.toFixed(4);
}

// Attach event listeners to all forms
document.getElementById('sinForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, Math.sin);
});

document.getElementById('cosForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, Math.cos);
});

document.getElementById('tanForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, Math.tan);
});

document.getElementById('cscForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, (radians) => 1 / Math.sin(radians));
});

document.getElementById('secForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, (radians) => 1 / Math.cos(radians));
});

document.getElementById('cotForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, (radians) => 1 / Math.tan(radians));
});