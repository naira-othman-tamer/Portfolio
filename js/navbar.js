class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute("active") || "";

        this.innerHTML = `
    <a href="index.html" class="logo">N<span>.</span></a>

    <nav class="nav-links" id="nav-links">
        <a href="index.html#home" class="${active === "home" ? "active" : ""}" >Home</a>
        <a href="index.html#about" class="${active === "about" ? "active" : ""}">About</a>
        <a href="index.html#experience" class="${active === "experience" ? "active" : ""}">Experience</a>
        <a href="projects.html" class="${active === "projects" ? "active" : ""}">Projects</a>
        <a href="index.html#skills" class="${active === "skills" ? "active" : ""}">Skills</a>
        <a href="index.html#education" class="${active === "education" ? "active" : ""}">Education</a>
        <a href="certificates.html" class="${active === "certificates" ? "active" : ""}">Certificates</a>
        <a href="index.html#contact" class="${active === "contact" ? "active" : ""}">Contact</a>
        <a href="https://drive.google.com/file/d/15KQkCtz0cYij7B2T8P1_FF_q61FV7Lmi/view"
           target="_blank" rel="noopener noreferrer"
           class="nav-sidebar-resume">Resume</a>
    </nav>

    <div class="nav-overlay" id="nav-overlay"></div>

    <div class="nav-actions">
        <a href="https://drive.google.com/file/d/15KQkCtz0cYij7B2T8P1_FF_q61FV7Lmi/view"
           target="_blank"
           rel="noopener noreferrer"
           class="nav-resume-btn">
            Resume
        </a>
        <button class="theme-toggle" aria-label="Toggle theme">☾</button>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
`;

const hamburger = this.querySelector('#nav-hamburger');
const navLinks = this.querySelector('#nav-links');
const overlay = this.querySelector('#nav-overlay');

const closeMenu = () => {
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
};

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : (
        navLinks.classList.add('open'),
        overlay.classList.add('open'),
        hamburger.classList.add('open')
    );
});

overlay.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
        // this.innerHTML = `
        //     <a href="index.html" class="logo">N<span>.</span></a>

        //     <nav class="nav-links">
        //         <a href="index.html#home" class="${active === "home" ? "active" : ""}">Home</a>
        //         <a href="index.html#about" class="${active === "about" ? "active" : ""}">About</a>
        //         <a href="index.html#experience" class="${active === "experience" ? "active" : ""}">Experience</a>
        //         <a href="projects.html" class="${active === "projects" ? "active" : ""}">Projects</a>
        //         <a href="index.html#skills" class="${active === "skills" ? "active" : ""}">Skills</a>
        //         <a href="index.html#education" class="${active === "education" ? "active" : ""}">Education</a>
        //         <a href="certificates.html" class="${active === "certificates" ? "active" : ""}">Certificates</a>
        //         <a href="index.html#contact" class="${active === "contact" ? "active" : ""}">Contact</a>
        //     </nav>

        //               <div class="nav-actions">
        //         <a href="https://drive.google.com/file/d/15KQkCtz0cYij7B2T8P1_FF_q61FV7Lmi/view"
        //            target="_blank"
        //            rel="noopener noreferrer"
        //            class="nav-resume-btn">
        //             Resume
        //         </a>

        //         <button class="theme-toggle" aria-label="Toggle theme">☾</button>
        //     </div>
        // `;

    }
}

customElements.define("site-navbar", SiteNavbar);