/* ==========================================
   LA BRIQUE IMPRO
   Script principal 2026
========================================== */


document.addEventListener("DOMContentLoaded", () => {



/* ==========================================
   MENU MOBILE
========================================== */


const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


if(menuButton && menu){


    menuButton.addEventListener("click",()=>{


        menu.classList.toggle("active");


        const expanded =
        menuButton.getAttribute("aria-expanded") === "true";


        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );


    });



    // fermeture après clic sur un lien

    document.querySelectorAll(".menu a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            menu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


        });


    });


}







/* ==========================================
   APPARITION AU SCROLL
========================================== */


const fadeElements =
document.querySelectorAll(".fade-in");



if(fadeElements.length){


    const observer =
    new IntersectionObserver(
        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


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



    fadeElements.forEach(element=>{

        observer.observe(element);

    });


}







/* ==========================================
   ANIMATION DES CARTES
========================================== */


const cards =
document.querySelectorAll(".card");



cards.forEach((card,index)=>{


    card.style.transitionDelay =
    `${index * 150}ms`;


});









/* ==========================================
   NAVBAR AU SCROLL
========================================== */


const navbar =
document.querySelector(".navbar");



if(navbar){


    window.addEventListener(
        "scroll",
        ()=>{


            if(window.scrollY > 80){


                navbar.classList.add(
                    "scrolled"
                );


            }
            else{


                navbar.classList.remove(
                    "scrolled"
                );


            }


        }
    );


}









/* ==========================================
   SCROLL FLUIDE
========================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
        "click",
        event=>{


            const target =
            document.querySelector(
                anchor.getAttribute("href")
            );


            if(target){


                event.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        }
    );


});









/* ==========================================
   PARALLAX HERO
========================================== */


const hero =
document.querySelector(".hero");


let ticking=false;



if(hero){


window.addEventListener(
"scroll",
()=>{


    if(!ticking){


        window.requestAnimationFrame(()=>{


            const offset =
            window.scrollY * 0.15;


            hero.style.backgroundPosition =
            `center ${50 + offset}%`;



            ticking=false;


        });



        ticking=true;


    }


});


}








/* ==========================================
   ANIMATION LOGO
========================================== */


const logo =
document.querySelector(".logo img");



if(logo){


    logo.addEventListener(
        "mouseenter",
        ()=>{


            logo.style.transform =
            "rotate(-5deg) scale(1.08)";


        }
    );



    logo.addEventListener(
        "mouseleave",
        ()=>{


            logo.style.transform =
            "rotate(0) scale(1)";


        }
    );


}








/* ==========================================
   ANNÉE AUTOMATIQUE FOOTER
========================================== */


const footer =
document.querySelector("footer p");



if(footer){


    footer.textContent =
    `© ${new Date().getFullYear()} La Brique Impro — Tous droits réservés.`;


}







/* ==========================================
   MESSAGE DEVELOPPEUR
========================================== */


console.log(
"🎭 La Brique Impro — Expérience immersive chargée."
);



});
