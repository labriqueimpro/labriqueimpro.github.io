/* =========================================================
   LA BRIQUE IMPRO
   Spectacle : L'Histoire qui n'existe pas encore

   JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", () => {



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


                const isOpen =
                    menu.classList.toggle("active");


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );


            }
        );



        /*
            Fermeture du menu après clic
            sur un lien
        */


        const menuLinks =
            menu.querySelectorAll("a");


        menuLinks.forEach(link => {


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
       Apparition des éléments au scroll
    ----------------------------------------------------- */


    const revealElements =
        document.querySelectorAll(".reveal");



    if ("IntersectionObserver" in window) {


        const observer =
            new IntersectionObserver(
                entries => {


                    entries.forEach(entry => {


                        if (entry.isIntersecting) {


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
                    threshold:0.15
                }
            );



        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );


    } else {


        /*
            Solution de secours
            pour anciens navigateurs
        */


        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );


    }





    /* -----------------------------------------------------
       Défilement doux des ancres
    ----------------------------------------------------- */


    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {


            anchor.addEventListener(
                "click",
                function(event) {


                    const targetId =
                        this.getAttribute(
                            "href"
                        );



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



});
