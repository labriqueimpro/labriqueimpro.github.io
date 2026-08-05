/* ==========================================================
   LE PERRON
   La Brique Impro
   JavaScript
   Ambiance : seuil - lumière - passage
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------------------------------
       Année automatique
    ------------------------------------------------------ */

    const year =
        document.getElementById("current-year") ||
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }

    /* ------------------------------------------------------
       Menu mobile
    ------------------------------------------------------ */

    const menuButton =
        document.querySelector(".menu-toggle");

    const menu =
        document.querySelector(".menu");

    if (menuButton && menu) {

        menuButton.addEventListener(
            "click",
            () => {

                const active =
                    menu.classList.toggle("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    active
                );
            }
        );

        menu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
                            "active"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }
                );

            });
    }

    /* ------------------------------------------------------
       Apparition au scroll
    ------------------------------------------------------ */

    const reveals =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        reveals.forEach(element => {
            observer.observe(element);
        });

    } else {

        reveals.forEach(element => {
            element.classList.add("visible");
        });

    }

    /* ------------------------------------------------------
       Navigation douce
    ------------------------------------------------------ */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }
            );

        });

    /* ------------------------------------------------------
       Parallax léger sur le hero
    ------------------------------------------------------ */

    const hero =
        document.querySelector(
            ".spectacle-hero"
        );

    if (hero) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                if (scroll < 700) {

                    hero.style.backgroundPosition =
                        `center ${scroll * 0.2}px`;
                }

            }
        );

    }

    /* ------------------------------------------------------
       Halo lumineux interactif
    ------------------------------------------------------ */

    if (hero) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                hero.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                hero.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );
            }
        );

    }

});