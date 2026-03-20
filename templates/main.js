document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Fetch and Load Header
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        fetch("templates/header.html")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.text();
            })
            .then(html => {
                headerPlaceholder.outerHTML = html;
                initializeMobileMenu(); // Setup dropdowns AFTER header is injected
            })
            .catch(error => console.error("Error loading header:", error));
    }

    // 2. Fetch and Load Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        fetch("templates/footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.text();
            })
            .then(html => {
                footerPlaceholder.outerHTML = html;
                
                // Inject Current Year into footer dynamically
                const yearSpan = document.getElementById("year");
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                }
            })
            .catch(error => console.error("Error loading footer:", error));
    }
});

// 3. Initialize Interactive Mobile Behaviors
function initializeMobileMenu() {
    
    // Toggle primary 'WORK' dropdown on touch/click for mobile
    const dropbtns = document.querySelectorAll('.dropbtn');
    dropbtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = this.nextElementSibling;
                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    // Toggle Nested 'Artifacts' and 'Research' dropdowns on touch/click for mobile
    const nestedLinks = document.querySelectorAll('.nested-dropdown > a');
    nestedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only trigger JS toggle on mobile screens. Desktop uses CSS hover.
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                const content = this.nextElementSibling;
                
                // Close other open nested dropdowns for a cleaner UX
                document.querySelectorAll('.nested-dropdown-content').forEach(nested => {
                    if (nested !== content) nested.style.display = 'none';
                });

                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
}
