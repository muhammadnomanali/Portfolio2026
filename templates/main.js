document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch and load the header.html file
    fetch("templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    // 2. Fetch and load the footer.html file
    fetch("templates/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
            
            // This manually triggers the copyright year script after the footer loads
            const yearSpan = document.getElementById("year");
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        })
        .catch(error => console.error("Error loading footer:", error));
});
