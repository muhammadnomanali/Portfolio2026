// Template definitions embedded directly

const HEADER_HTML = `
<header>
    <!-- First Row - Navigation Menu -->
    <div class="header-nav-row">
        <div class="container">
            <nav class="nav" role="navigation" aria-label="Main navigation">
                <div class="links">
                    <a href="index.html">HOME</a>
                    <a href="about.html">ABOUT</a>
                    
                    <!-- Combined Work Dropdown -->
                    <div class="dropdown">
                        <button class="dropbtn" aria-haspopup="true" aria-expanded="false">
                            Portfolio <span class="arrow">▼</span>
                        </button>
                        <div class="dropdown-content">
                            
                            <!-- Artifacts Nested Dropdown -->
                            <div class="nested-dropdown">
                                <a href="artifacts.html">Artifacts & Design <span class="arrow right-arrow">▶</span></a>
                                <div class="nested-dropdown-content">
                                    <a href="car-safety-infographic.html">Car Safety Infographic</a>
                                    <a href="recipe-book.html">Culinary Chronicles</a>
                                    <a href="A-Z-Events.html">A to Z Events Website</a>
                                </div>
                            </div>

                            <!-- Research Nested Dropdown -->
                            <div class="nested-dropdown">
                                <a href="research.html">Research <span class="arrow right-arrow">▶</span></a>
                                <div class="nested-dropdown-content">
                                    <a href="social-media-activism.html">Social Media Activism</a>
                                    <a href="upf-rhetorical-analysis.html">UPF Rhetorical Analysis</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <a href="resume.html">RESUME</a>
                </div>
            </nav>
        </div>
    </div>

    <!-- Second Row - Branding (Larger) -->
    <div class="header-brand-row">
        <div class="container">
            <div class="brand-content">
                <h1 class="brand-name">Noman Ali</h1>
                <p class="brand-tagline">Intercultural Practice in Technical Communication</p>
            </div>
        </div>
    </div>

    <style>
        header {
            background: linear-gradient(135deg, #3ab5b5 0%, #2d9a9a 50%, #1f7a7a 100%);
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 50;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            font-family: var(--sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif);
        }

        .header-nav-row {
            background-color: rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding: 12px 0;
        }

        .nav {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
        }

        .links {
            display: flex;
            gap: 30px;
            align-items: center;
            flex-wrap: wrap;
        }

        .links a {
            font-size: 13px;
            color: #ffffff;
            transition: all 0.2s;
            padding: 6px 12px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
            text-decoration: none;
        }

        .links a:hover,
        .links a:focus {
            background-color: rgba(255, 255, 255, 0.15);
            text-decoration: none;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropbtn {
            background: none;
            border: none;
            font-size: 13px;
            color: #ffffff;
            padding: 6px 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
            cursor: pointer;
            font-family: inherit;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
            border-radius: 4px;
        }

        .dropbtn .arrow {
            font-size: 10px;
        }

        .dropbtn:hover, .dropdown:hover .dropbtn {
            background-color: rgba(255, 255, 255, 0.15);
        }

        /* Invisible bridge to prevent hover loss between button and dropdown */
        .dropdown::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 10px;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #ffffff;
            min-width: 220px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
            z-index: 1;
            border-radius: 8px;
            top: 100%;
            left: 0;
            margin-top: 2px;
            overflow: visible; /* Changed from hidden to allow nested dropdown to escape */
            border: 1px solid var(--border-color, #e5e5e5);
        }

        .dropdown-content > a, .nested-dropdown > a {
            color: var(--text-dark, #1a1a1a) !important;
            padding: 12px 16px;
            display: block;
            text-transform: none;
            font-weight: 500;
            font-size: 14px;
            font-family: var(--sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif);
        }

        .dropdown-content a:hover, .nested-dropdown > a:hover {
            background-color: #f0f9f8 !important;
            color: var(--header-teal, #2d9a9a) !important;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        /* Nested Dropdown Styles */
        .nested-dropdown {
            position: relative;
        }

        .right-arrow {
            float: right;
            font-size: 10px;
            margin-top: 4px;
        }

        .nested-dropdown-content {
            display: none;
            position: absolute;
            left: 100%;
            top: -1px;
            background-color: #ffffff;
            min-width: 240px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
            z-index: 2;
            border-radius: 8px;
            border: 1px solid var(--border-color, #e5e5e5);
            overflow: hidden;
        }

        .nested-dropdown-content a {
            color: var(--text-dark, #1a1a1a) !important;
            padding: 12px 16px;
            display: block;
            text-transform: none;
            font-weight: 500;
            font-size: 14px;
        }

        .nested-dropdown:hover .nested-dropdown-content {
            display: block;
        }

        /* Invisible bridge for nested dropdown */
        .nested-dropdown::after {
            content: '';
            position: absolute;
            top: 0;
            left: 100%;
            width: 20px;
            height: 100%;
            transform: translateX(-100%);
        }

        .header-brand-row {
            padding: 40px 0;
        }

        .brand-content {
            text-align: left;
        }

        .brand-name {
            font-size: 48px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 8px 0;
            line-height: 1.1;
        }

        .brand-tagline {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 300;
            margin: 0;
        }

        @media (max-width: 768px) {
            .header-brand-row { padding: 30px 0; }
            .brand-name { font-size: 32px; }
            .brand-tagline { font-size: 15px; }
            .links { gap: 15px; }
            .links a, .dropbtn { font-size: 12px; padding: 5px 10px; }
            
            .dropdown-content {
                position: relative;
                top: 0;
                box-shadow: none;
                border: none;
                background-color: transparent;
                margin-left: 15px;
                min-width: auto;
            }
            .dropdown-content > a, .nested-dropdown > a {
                color: rgba(255,255,255,0.85) !important;
                padding: 8px 12px;
            }
            .dropdown-content a:hover, .nested-dropdown > a:hover {
                background-color: transparent !important;
                color: #ffffff !important;
            }
            
            /* Nested Dropdown Mobile Fixes */
            .nested-dropdown-content {
                position: relative;
                left: 0;
                top: 0;
                box-shadow: none;
                border: none;
                background-color: transparent;
                margin-left: 15px;
                min-width: auto;
            }
            .nested-dropdown-content a {
                color: rgba(255,255,255,0.7) !important;
                padding: 6px 12px;
                font-size: 13px;
                border-left: 1px solid rgba(255,255,255,0.2);
                border-radius: 0;
            }
            .nested-dropdown-content a:hover {
                color: #ffffff !important;
            }
            .right-arrow {
                transform: rotate(90deg);
                margin-top: 2px;
            }
        }

        @media (max-width: 480px) {
            .header-nav-row { padding: 10px 0; }
            .header-brand-row { padding: 25px 0; }
            .brand-name { font-size: 26px; }
            .brand-tagline { font-size: 13px; }
            .nav { justify-content: center; }
            .links { gap: 10px; justify-content: center; flex-wrap: wrap; }
            .links a, .dropbtn { font-size: 11px; padding: 4px 8px; }
        }
    </style>
</header>
`;

const FOOTER_HTML = `
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-about">
                <h3>Noman Ali</h3>
            </div>
            <div class="footer-links-section">
                <h4>Quick Links</h4>
                <div class="footer-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                </div>
            </div>
            <div class="footer-links-section">
                <h4>Portfolio</h4>
                <div class="footer-links">
                    <a href="artifacts.html">Artifacts</a>
                    <a href="research.html">Research</a>
                </div>
            </div>
            <div class="footer-links-section">
                <h4>Connect</h4>
                <div class="footer-links">
                    <a href="https://www.linkedin.com/in/noman-ali-8a10b815" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:mza0140@auburn.edu">Email</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            © <span id="year"></span> Noman Ali. All rights reserved.
        </div>
    </div>
    
    <style>
        footer {
            background: linear-gradient(135deg, #3ab5b5 0%, #2d9a9a 50%, #1f7a7a 100%);
            padding: 50px 0 30px;
            color: #ffffff;
            margin-top: 80px;
            font-family: var(--sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 50px;
            margin-bottom: 40px;
        }

        .footer-about h3 {
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 16px 0;
            color: #ffffff;
        }

        .footer-links-section h4 {
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 20px 0;
            color: #ffffff;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        footer a {
            color: rgba(255, 255, 255, 0.85);
            transition: all 0.2s;
            font-size: 14px;
            display: inline-block;
            text-decoration: none;
        }

        footer a:hover {
            color: #ffffff;
            text-decoration: none;
            transform: translateX(4px);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 24px;
            text-align: center;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
            .footer-content {
                grid-template-columns: 1fr;
                gap: 30px;
                text-align: center;
            }
            .footer-links {
                align-items: center;
            }
        }
    </style>
</footer>
`;

// Inject header and footer templates when the document is ready
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
