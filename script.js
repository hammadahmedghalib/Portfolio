/* =========================================================
   PORTFOLIO JAVASCRIPT
   Hammad Ahmad Ghalib
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    if (themeToggle) {

        const themeIcon =
            themeToggle.querySelector("i");


        const savedTheme =
            localStorage.getItem("portfolio-theme");


        if (savedTheme === "light") {

            document.body.classList.add(
                "light-theme"
            );

            if (themeIcon) {

                themeIcon.className =
                    "fa-solid fa-sun";

            }

        } else {

            document.body.classList.remove(
                "light-theme"
            );

            if (themeIcon) {

                themeIcon.className =
                    "fa-solid fa-moon";

            }

        }


        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-theme"
                );


                const isLight =
                    document.body.classList.contains(
                        "light-theme"
                    );


                localStorage.setItem(
                    "portfolio-theme",
                    isLight
                        ? "light"
                        : "dark"
                );


                if (themeIcon) {

                    themeIcon.className =
                        isLight
                            ? "fa-solid fa-sun"
                            : "fa-solid fa-moon";

                }

            }
        );

    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "open"
                );

            }
        );


        const navLinks =
            navMenu.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

    }



    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingText =
        document.getElementById("typingText");


    if (typingText) {

        const words = [
            "Web Developer",
            "App Developer",
            "Frontend Developer",
            "Full Stack Developer",
            "UI Developer"
        ];


        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        const typeSpeed = 90;
        const deleteSpeed = 50;
        const pauseAfterWord = 1500;


        function typeEffect() {

            const currentWord =
                words[wordIndex];


            if (!deleting) {

                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        pauseAfterWord
                    );

                    return;

                }

            } else {

                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }


            setTimeout(
                typeEffect,
                deleting
                    ? deleteSpeed
                    : typeSpeed
            );

        }


        typeEffect();

    }



    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.getElementById(
            "scrollProgress"
        );


    function updateScrollProgress() {

        if (!scrollProgress) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;


        scrollProgress.style.width =
            `${percentage}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );


    updateActiveNav();



    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar =
        document.getElementById(
            "navbar"
        );


    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();



    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .skill-card, .project-card, .info-box, .contact-detail, .contact-form"
        );


    revealElements.forEach((element) => {

        element.classList.add(
            "reveal"
        );

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

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
                threshold: 0.08
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(
            element
        );

    });



    /* =====================================================
       CURSOR GLOW
    ===================================================== */

    const cursorGlow =
        document.getElementById(
            "cursorGlow"
        );


    if (
        cursorGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        window.addEventListener(
            "mousemove",
            (event) => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            }
        );

    }



    /* =====================================================
       PROJECT CARD TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (
                    window.innerWidth < 900
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    const formStatus =
        document.getElementById(
            "formStatus"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                if (formStatus) {

                    formStatus.textContent =
                        "Sending message...";

                }


                const formData =
                    new FormData(
                        contactForm
                    );


                try {

                    const response =
                        await fetch(
                            contactForm.action,
                            {
                                method: "POST",
                                body: formData,
                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    if (
                        response.ok
                    ) {

                        contactForm.reset();


                        if (formStatus) {

                            formStatus.textContent =
                                "Message sent successfully.";

                        }

                    } else {

                        if (formStatus) {

                            formStatus.textContent =
                                "Something went wrong. Please try again.";

                        }

                    }

                } catch (error) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Unable to send message. Please try again.";

                    }

                    console.error(
                        "Form error:",
                        error
                    );

                }

            }
        );

    }



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                if (navMenu) {

                    navMenu.classList.remove(
                        "open"
                    );

                }

            }

        }
    );



    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 800 &&
                navMenu
            ) {

                navMenu.classList.remove(
                    "open"
                );

            }

        }
    );

});