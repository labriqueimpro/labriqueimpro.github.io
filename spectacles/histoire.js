document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelectorAll(".menu a");
    const revealElements = document.querySelectorAll(".reveal");
    const currentYear = document.querySelector("#current-year");


    /* =====================================
       MENU MOBILE
    ===================================== */

    if (menu && menuToggle) {

        menuToggle.addEventListener("click", () => {

            const menuIsOpen = menu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(menuIsOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                menuIsOpen
                    ? "Fermer le menu de navigation"
                    : "Ouvrir le menu de navigation"
            );

            menuToggle.textContent = menuIsOpen ? "✕" : "☰";

        });


        menuLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Ouvrir le menu de navigation"
                );

                menuToggle.textContent = "☰";

            });

        });

    }


    /* =====================================
       NAVBAR AU DÉFILEMENT
    ===================================== */

    const updateNavbar = () => {

        if (!navbar) {
            return;
        }

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    };


    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    /* =====================================
       ANIMATIONS D'APPARITION
    ===================================== */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (reducedMotion) {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    } else if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* =====================================
       ANNÉE AUTOMATIQUE
    ===================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
