/* =========================================================
   BANJO BILL
   Cie La Brique d'Impro

   JavaScript
   Ambiance : narration - souvenirs - scène
========================================================= */


document.addEventListener("DOMContentLoaded", () => {



    /* -----------------------------------------------------
       Année automatique du footer
    ----------------------------------------------------- */


    const year =
        document.getElementById("current-year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }




    /* -----------------------------------------------------
       Menu mobile
    ----------------------------------------------------- */


    const menuButton =
        document.querySelector(".menu-toggle");


    const menu =
        document.querySelector(".menu");



    if (menuButton && menu) {


        menuButton.addEventListener(
            "click",
            () => {


                const opened =
                    menu.classList.toggle("active");


                menuButton.setAttribute(
                    "aria-expanded",
                    opened
                );


            }
        );



        const links =
            menu.querySelectorAll("a");



        links.forEach(link => {


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





    /* -----------------------------------------------------
       Apparition au scroll
    ----------------------------------------------------- */


    const revealElements =
        document.querySelectorAll(".reveal");



    if ("IntersectionObserver" in window) {


        const revealObserver =
            new IntersectionObserver(
                elements => {


                    elements.forEach(
                        element => {


                            if (element.isIntersecting) {


                                element.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    element.target
                                );


                            }


                        }
                    );


                },
                {
                    threshold:0.15
                }
            );



        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );



    } else {


        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );


    }





    /* -----------------------------------------------------
       Navigation douce
    ----------------------------------------------------- */


    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {


            anchor.addEventListener(
                "click",
                function(event) {


                    const targetId =
                        this.getAttribute("href");



                    const target =
                        document.querySelector(
                            targetId
                        );



                    if (target) {


                        event.preventDefault();



                        target.scrollIntoView(
                            {
                                behavior:"smooth",
                                block:"start"
                            }
                        );


                    }


                }
            );


        });






    /* -----------------------------------------------------
       Effet souvenir / scène sur le hero
       léger déplacement de l'image
    ----------------------------------------------------- */


    const hero =
        document.querySelector(".spectacle-hero");



    if (hero) {


        window.addEventListener(
            "scroll",
            () => {


                const scroll =
                    window.scrollY;



                if (scroll < 500) {


                    hero.style.backgroundPosition =
                        `center ${scroll * 0.25}px`;


                }


            }
        );


    }





    /* -----------------------------------------------------
       Petite touche "vivante"
       apparition progressive des cartes
    ----------------------------------------------------- */


    const cards =
        document.querySelectorAll(
            ".experience-card"
        );



    cards.forEach(
        (card, index) => {


            card.style.transitionDelay =
                `${index * 120}ms`;


        }
    );



});
