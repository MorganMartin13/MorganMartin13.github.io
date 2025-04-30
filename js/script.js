
function handleSubmit() {
    const name = document.getElementById('nameInput').value;
    const message = name ? "Thank you, " + name + "!" : "Please enter your name.";
    document.getElementById('response').innerHTML = message;
    return false; // Prevent real form submission
}
