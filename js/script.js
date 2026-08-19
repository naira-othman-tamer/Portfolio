document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll(
        ".theme-toggle, .projects-theme-toggle, .certs-theme-toggle"
    );

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    updateToggleIcons();

    themeToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const isLight = document.body.classList.contains("light-theme");

            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );

            updateToggleIcons();
        });
    });

    function updateToggleIcons() {
        const isLight = document.body.classList.contains("light-theme");

        themeToggles.forEach(toggle => {
            toggle.textContent = isLight ? "☀" : "☾";
            toggle.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
        });
    }
});