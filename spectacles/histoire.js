/* ==============================================================
   La Brique Impro — Script de la page "L'Histoire qui n'existe pas encore"
   ============================================================== */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = !!window.gsap;

if (hasGsap) {

    gsap.registerPlugin(ScrollTrigger);

    if (!reduceMotion) {

        gsap.set(".brick-row span", { y: "110%", rotate: 2 });
        gsap.to(".brick-row span", {
            y: "0%", rotate: 0, duration: 0.9, ease: "back.out(1.4)", stagger: 0.14, delay: 0.2
        });
        gsap.from(".spec-lede, .spec-hero .cta", {
            y: 20, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.12, delay: 0.85
        });

        const heroEl = document.getElementById("hero");
        const heroContent = document.querySelector(".spec-hero-content");

        const rotX = gsap.quickTo(heroContent, "rotateX", { duration: .6, ease: "power3" });
        const rotY = gsap.quickTo(heroContent, "rotateY", { duration: .6, ease: "power3" });

        heroEl.style.perspective = "1000px";
        heroContent.style.transformStyle = "preserve-3d";

        heroEl.addEventListener("mousemove", (e) => {
            const r = heroEl.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - .5;
            const py = (e.clientY - r.top) / r.height - .5;
            rotY(px * 4);
            rotX(-py * 4);
        });

        heroEl.addEventListener("mouseleave", () => { rotX(0); rotY(0); });

        for (let i = 0; i < 8; i++) {
            const d = document.createElement("div");
            d.className = "dust";
            d.style.left = gsap.utils.random(4, 96) + "%";
            heroEl.appendChild(d);

            gsap.fromTo(
                d,
                { y: -20, opacity: 0 },
                {
                    y: window.innerHeight,
                    opacity: gsap.utils.random(.15, .4),
                    duration: gsap.utils.random(9, 16),
                    repeat: -1,
                    delay: gsap.utils.random(0, 10),
                    ease: "none",
                    onRepeat: () => { d.style.left = gsap.utils.random(4, 96) + "%"; }
                }
            );
        }

        document.querySelectorAll(".narrative p").forEach((p) => {
            ScrollTrigger.create({
                trigger: p,
                start: "top 88%",
                once: true,
                onEnter: () => p.classList.add("is-in")
            });
        });

        const quote = document.querySelector(".pull-quote");
        ScrollTrigger.create({
            trigger: quote,
            start: "top 85%",
            once: true,
            onEnter: () => quote.classList.add("is-in")
        });

        const bricks = gsap.utils.toArray(".process-brick");
        ScrollTrigger.create({
            trigger: "#process-wall",
            start: "top 82%",
            once: true,
            onEnter: () => {
                bricks.forEach((b, i) => {
                    gsap.delayedCall(i * 0.16, () => b.classList.add("is-in"));
                });
            }
        });

        const infoItems = gsap.utils.toArray(".info-list li");
        ScrollTrigger.create({
            trigger: ".info-card",
            start: "top 80%",
            once: true,
            onEnter: () => {
                infoItems.forEach((li, i) => {
                    gsap.delayedCall(i * 0.1, () => li.classList.add("is-in"));
                });
            }
        });

        const infoCard = document.querySelector(".info-card");
        const cardRotX = gsap.quickTo(infoCard, "rotateX", { duration: .4, ease: "power3" });
        const cardRotY = gsap.quickTo(infoCard, "rotateY", { duration: .4, ease: "power3" });

        infoCard.addEventListener("mousemove", (e) => {
            const r = infoCard.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            cardRotY((px - .5) * 6);
            cardRotX(-(py - .5) * 6);
            infoCard.style.setProperty("--mx", (px * 100) + "%");
            infoCard.style.setProperty("--my", (py * 100) + "%");
        });

        infoCard.addEventListener("mouseleave", () => { cardRotX(0); cardRotY(0); });

        document.querySelectorAll(".cta").forEach((cta) => {
            const ctaX = gsap.quickTo(cta, "x", { duration: .4, ease: "power3" });
            const ctaY = gsap.quickTo(cta, "y", { duration: .4, ease: "power3" });

            cta.addEventListener("mousemove", (e) => {
                const r = cta.getBoundingClientRect();
                ctaX((e.clientX - r.left - r.width / 2) * .3);
                ctaY((e.clientY - r.top - r.height / 2) * .45);
            });

            cta.addEventListener("mouseleave", () => { ctaX(0); ctaY(0); });
        });

    } else {
        gsap.set(".brick-row span, .spec-lede, .spec-hero .cta", { y: 0, opacity: 1, rotate: 0 });
        document.querySelectorAll(".narrative p").forEach(p => p.classList.add("is-in"));
        document.querySelector(".pull-quote").classList.add("is-in");
        document.querySelectorAll(".process-brick").forEach(b => b.classList.add("is-in"));
        document.querySelectorAll(".info-list li").forEach(li => li.classList.add("is-in"));
    }

} else {
    document.querySelectorAll(".narrative p").forEach(p => p.classList.add("is-in"));
    document.querySelector(".pull-quote").classList.add("is-in");
    document.querySelectorAll(".process-brick").forEach(b => b.classList.add("is-in"));
    document.querySelectorAll(".info-list li").forEach(li => li.classList.add("is-in"));
    document.querySelectorAll(".brick-row span").forEach(s => s.style.transform = "none");
}

/* ----------------------------------------------------------
   Barre de progression — le mur se construit à la lecture
---------------------------------------------------------- */

const progressBar = document.getElementById("scroll-progress-bar");

function updateProgress(){
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    progressBar.style.width = pct + "%";
}

document.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* ----------------------------------------------------------
   Badge flottant — apparaît une fois le hero dépassé
---------------------------------------------------------- */

const wallBadge = document.getElementById("wall-badge");
const heroSection = document.getElementById("hero");

if ("IntersectionObserver" in window) {
    const badgeObserver = new IntersectionObserver(
        ([entry]) => { wallBadge.classList.toggle("is-visible", !entry.isIntersecting); },
        { threshold: 0 }
    );
    badgeObserver.observe(heroSection);
} else {
    wallBadge.classList.add("is-visible");
}
