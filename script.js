/* ==========================
   LA BRIQUE IMPRO
   Script principal
========================== */


/* ==========================
   ANIMATION AU SCROLL
========================== */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

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


fadeElements.forEach(element => {

    observer.observe(element);

});



/* ==========================
   NAVBAR AU SCROLL
========================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==========================
   MENU MOBILE
========================== */

const menuLinks = document.querySelectorAll(".navbar a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.body.classList.remove("menu-open");

    });

});



/* ==========================
   PARALLAX HERO
========================== */

const hero = document.querySelector(".hero");


window.addEventListener("scroll", () => {


    if(hero){

        const scrollPosition = window.scrollY;

        hero.style.backgroundPositionY =
            `${scrollPosition * 0.35}px`;

    }


});



/* ==========================
   FOOTER ANNÉE AUTOMATIQUE
========================== */

const footerYear = document.querySelector("footer p");


if(footerYear){

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} La Brique Impro — Tous droits réservés.`;

}



/* ==========================
   APPARITION DES CARTES
========================== */

const cards = document.querySelectorAll(".card");


cards.forEach((card,index)=>{

    card.style.transitionDelay =
        `${index * 0.15}s`;

});



/* ==========================
   BOUTON SCROLL FLUIDE
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target =
            document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }


    });


});



/* ==========================
   LOG MESSAGE
========================== */

console.log(
    "🎭 La Brique Impro — Site chargé avec succès !"
);
