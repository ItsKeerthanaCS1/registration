document.getElementById("applicationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting immediately

    // Simple validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name && email && phone && message) {
        // Show success message
        document.getElementById("successMessage").style.display = "block";

        // Submit the form after validation
        this.submit();
    } else {
        alert("Please fill all fields!");
    }
});
