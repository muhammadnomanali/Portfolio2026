// Template definitions embedded directly
const HEADER_HTML = `<header>
  <div class="container">
    <nav class="nav" aria-label="Primary">
      <a class="brand" href="Index.html">Noman Ali</a>
      <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="links">
        <a href="Index.html#about">About</a>
        <a href="artifacts.html">Work</a>
        <a href="research.html">Research</a>
        <a href="https://drive.google.com/file/d/1-g-524K9rpg3P82vt-_gGgFG9hEjtOW_/view?usp=sharing" class="resume-btn">My Resume</a>
      </div>
    </nav>
  </div>
  
  <style>
    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 1001;
    }
    
    .mobile-menu-toggle span {
      width: 24px;
      height: 2px;
      background-color: #ffffff;
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    
    .resume-btn {
      background-color: #16a34a;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .resume-btn:hover {
      background-color: #15923f;
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
      .nav {
        position: relative;
      }
      
      .mobile-menu-toggle {
        display: flex;
      }
      
      .links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background-color: #1f4a4a;
        flex-direction: column;
        padding: 80px 30px 30px;
        gap: 20px;
        transition: right 0.3s ease;
        z-index: 1000;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        align-items: flex-start;
        justify-content: flex-start;
      }
      
      .links.active {
        right: 0;
      }
      
      .links a {
        font-size: 18px;
        padding: 12px 0;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .links a:last-child {
        border-bottom: none;
      }
      
      .resume-btn {
        margin-top: 12px;
        background-color: #16a34a;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        text-align: center;
        width: 100%;
        display: block;
        font-weight: 600;
      }
      
      .resume-btn:hover {
        background-color: #15923f;
      }
    }
    
    @media (max-width: 480px) {
      .links {
        width: 100%;
        right: -100%;
      }
    }
  </style>
</header>

<script>
  (function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
      
      // Close menu when clicking on a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }
  })();
<\/script>`;

const FOOTER_HTML = `<footer style="background: rgb(13, 38, 38); border-top: 1px solid rgb(36, 66, 61);">
  <div style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
        <div style="text-align: left;">
          <p style="margin: 0; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: rgb(237, 247, 246);">Muhammad Noman Ali</p>
          <p style="margin: 0; font-size: 14px; color: rgb(139, 193, 184);">MTPC Student & Researcher</p>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 12px;" class="footer-links">
          <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="font-size: 14px; transition: opacity 0.2s; color: rgb(139, 193, 184); text-decoration: none;">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style="font-size: 14px; transition: opacity 0.2s; color: rgb(139, 193, 184); text-decoration: none;">GitHub</a>
          </div>
          <a href="mailto:mza0212@auburn.edu" style="font-size: 14px; font-weight: 500; transition: opacity 0.2s; color: rgb(71, 209, 191); text-decoration: none;">mza0212@auburn.edu</a>
        </div>
      </div>
      <div style="border-top: 1px solid rgb(32, 60, 55); padding-top: 32px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: rgb(96, 159, 149);">© <span id="year"></span> Muhammad Noman Ali. Built with accessibility in mind.</p>
      </div>
    </div>
  </div>
  
  <style>
    @media (max-width: 768px) {
      footer > div {
        padding: 50px 20px !important;
      }
      .footer-links {
        align-items: center !important;
      }
    }
    @media (max-width: 480px) {
      footer > div {
        padding: 40px 16px !important;
      }
      footer > div > div > div:first-child {
        flex-direction: column;
        align-items: center !important;
        text-align: center !important;
      }
      footer > div > div > div:first-child > div {
        text-align: center !important;
      }
      .footer-links {
        align-items: center !important;
      }
      .footer-links > div {
        justify-content: center;
      }
    }
  </style>
</footer>

<script>
  document.getElementById("year").textContent = new Date().getFullYear();
<\/script>`;

// Load header and footer templates
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Load header
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = HEADER_HTML;
    }

    // Load footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;

      // Execute year script
      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    }
  } catch (error) {
    console.error("Error loading templates:", error);
  }
});
