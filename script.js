/* ==========================================
   LA BRIQUE IMPRO
   Script principal
========================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ======================================
       ANIMATION APPARITION AU SCROLL
    ====================================== */

    const fadeElements = document.querySelectorAll(".fade-in");


    if (fadeElements.length > 0) {


        const fadeObserver = new IntersectionObserver(
            (entries) => {


                entries.forEach((entry) => {


                    if (entry.isIntersecting) {


                        entry.target.classList.add("visible");


                        // On arrête d'observer une fois visible
                        fadeObserver.unobserve(entry.target);


                    }


                });


            },
            {
                threshold: 0.15
            }
        );


        fadeElements.forEach((element) => {

            fadeObserver.observe(element);

        });


    }



    /* ======================================
       NAVBAR AU SCROLL
    ====================================== */


    const navbar = document.querySelector(".navbar");


    if (navbar) {


        window.addEventListener("scroll", () => {


            if (window.scrollY > 80) {


                navbar.classList.add("scrolled");


            } else {


                navbar.classList.remove("scrolled");


            }


        });


    }



    /* ======================================
       SCROLL FLUIDE DES LIENS
    ====================================== */


    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach((link) => {


        link.addEventListener("click", (event) => {


            const targetId = link.getAttribute("href");


            const target = document.querySelector(targetId);



            if (target) {


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


            }


        });


    });





    /* ======================================
       PARALLAX IMAGE HERO
    ====================================== */


    const hero = document.querySelector(".hero");


    if (hero) {


        window.addEventListener("scroll", () => {


            const offset = window.scrollY * 0.35;


            hero.style.backgroundPositionY =
                `${offset}px`;


        });


    }




    /* ======================================
       APPARITION DÉCALÉE DES CARTES
    ====================================== */


    const cards = document.querySelectorAll(".card");


    cards.forEach((card, index) => {


        card.style.transitionDelay =
            `${index * 150}ms`;


    });






    /* ======================================
       ANNÉE AUTOMATIQUE FOOTER
    ====================================== */


    const footerText = document.querySelector("footer p");


    if (footerText) {


        const year = new Date().getFullYear();


        footerText.textContent =
            `© ${year} La Brique Impro — Tous droits réservés.`;


    }





    /* ======================================
       MESSAGE CONSOLE
    ====================================== */


    console.log(
        "🎭 La Brique Impro — Site chargé avec succès !"
    );


});
