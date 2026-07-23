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


        const fadeObserver = new IntersectionObserver((entries) => {


            entries.forEach((entry) => {


                if (entry.isIntersecting) {


                    entry.target.classList.add("visible");


                    fadeObserver.unobserve(entry.target);


                }


            });


        }, {

            threshold: 0.15

        });



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


            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 80
            );


        });


    }






    /* ======================================
       SCROLL FLUIDE
    ====================================== */


    document.querySelectorAll('a[href^="#"]').forEach((link) => {


        link.addEventListener("click", (event) => {


            const target = document.querySelector(
                link.getAttribute("href")
            );


            if (target) {


                event.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        });


    });






    /* ======================================
       HERO - PARALLAX DOUX
       (sans saut d'image)
    ====================================== */


    const hero = document.querySelector(".hero");


    if (hero) {


        window.addEventListener("scroll", () => {


            const scroll = window.scrollY;


            hero.style.backgroundPosition =
                `center ${50 + scroll * 0.02}%`;


        });


    }







    /* ======================================
       APPARITION DÉCALÉE DES CARTES
    ====================================== */


    document.querySelectorAll(".card").forEach((card, index) => {


        card.style.transitionDelay =
            `${index * 150}ms`;


    });







    /* ======================================
       ANNÉE AUTOMATIQUE FOOTER
    ====================================== */


    const footerText = document.querySelector("footer p");


    if (footerText) {


        footerText.textContent =
            `© ${new Date().getFullYear()} La Brique Impro — Tous droits réservés.`;


    }






    /* ======================================
       MESSAGE CONSOLE
    ====================================== */


    console.log(
        "🎭 La Brique Impro — Site chargé avec succès !"
    );


});
