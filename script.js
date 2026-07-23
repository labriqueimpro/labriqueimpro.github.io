/* =====================================
   LA BRIQUE IMPRO
   Script principal
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ANIMATION AU SCROLL
    ===================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".fade-in").forEach((element) => {
        observer.observe(element);
    });


    /* =====================================
       NAVBAR AU SCROLL
    ===================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        navbar.classList.toggle("scrolled", window.scrollY > 80);

    });


    /* =====================================
       MENU MOBILE
    ===================================== */

    document.querySelectorAll(".navbar a").forEach((link) => {

        link.addEventListener("click", () => {

            document.body.classList.remove("menu-open");

        });

    });


    /* =====================================
       PARALLAX HERO
    ===================================== */

    const hero = document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            hero.style.backgroundPositionY =
                `${window.scrollY * 0.35}px`;

        });

    }


    /* =====================================
       ANNÉE AUTOMATIQUE
    ===================================== */

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.textContent =
            `© ${new Date().getFullYear()} La Brique Impro — Tous droits réservés.`;

    }


    /* =====================================
       DÉLAI D'APPARITION DES CARTES
    ===================================== */

    document.querySelectorAll(".card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.15}s`;

    });


    /* =====================================
       SCROLL FLUIDE
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    console.log("🎭 La Brique Impro — Site chargé avec succès !");

});
