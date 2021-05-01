const portfolio = {};

portfolio.scrollTo = () => {
    const titleAboutMe = document.querySelector(".titleAboutMe");
    const titleMySkills = document.querySelector(".titleMySkills");
    const titleProjects = document.querySelector(".titleProjects");
    const titleContactMe = document.querySelector(".titleContactMe");
    const aboutMe = document.querySelector(".about");
    const mySkills = document.querySelector(".skills")
    const projects = document.querySelector(".projects")
    const contactMe = document.querySelector(".contact")
    titleAboutMe.addEventListener("click", () => aboutMe.scrollIntoView({behavior: "smooth"}));
    titleMySkills.addEventListener("click", () => mySkills.scrollIntoView({behavior: "smooth"}));
    titleProjects.addEventListener("click", () => projects.scrollIntoView({behavior: "smooth"}));
    titleContactMe.addEventListener("click", () => contactMe.scrollIntoView({behavior: "smooth"}));
}

portfolio.projectButtons = () => {
    const filmRecs = document.querySelector(".filmRecs")
    const blackJack = document.querySelector(".blackJack")
    const anywhere = document.querySelector(".anywhere")
    // const something = document.querySelector(".something")
    const projectImg = document.querySelector(".projectImg")
    const projectText = document.querySelector(".projectText")

    filmRecs.addEventListener("click", () => {
        filmRecs.classList.add("selected")
        blackJack.classList.remove("selected")
        anywhere.classList.remove("selected")
        // something.classList.remove("selected")
        projectImg.innerHTML=`<img src="./assets/filmRecsMockup2.png" alt="Film Recs App Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>FilmRecs</h3>
        <p>Responsive and accessible movie recommendation app.  Uses a RESTful API to recommend a film based on a users chosen parameters.  Pair programmed in React, utilizing hooks.  Users submitted reviews are saved and displayed using a Firebase realtime database.</p>
        <a href="https://jolly-allen-1f982c.netlify.app/">Click to Try!</a>`
    })

    blackJack.addEventListener("click", () => {
        blackJack.classList.add("selected")
        filmRecs.classList.remove("selected")
        anywhere.classList.remove("selected")
        // something.classList.remove("selected")
        projectImg.innerHTML=`<img src="./assets/blackJackMockup2.png" alt="Black Jack App Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>Black Jack</h3>
        <p>Fully playable game of Black Jack built on RESTful API calls.  Dealer logic written in vanilla JavaScript.  Try your luck!  Hit on fifteen!  Live a little!</p>
        <a href="https://quirky-noyce-c630fa.netlify.app/">Click to Try!</a>`
    })

    anywhere.addEventListener("click", () => {
        anywhere.classList.add("selected")
        blackJack.classList.remove("selected")
        filmRecs.classList.remove("selected")
        // something.classList.remove("selected")
        projectImg.innerHTML=`<img src="./assets/anywhereMockup2.png" alt="Anywhere But Here Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>Anywhere But Here</h3>
        <p>It's been a year of Covid.  Your home office makes you tired and sad to look at.  You are ready to be somewhere, anywhere, but your house.  Use this React App, built using hooks and 5 different mapQuest API's to find somewhere (literally ANYWHERE) to go.</p>
        <a href="https://quizzical-wescoff-cb58e4.netlify.app/">Click to Try!</a>`
    })

    // something.addEventListener("click", () => {
    //     something.classList.add("selected")
    //     blackJack.classList.remove("selected")
    //     anywhere.classList.remove("selected")
    //     filmRecs.classList.remove("selected")
    //     projectImg.src="./assets/filmRecsMockup.png"
    //     projectImg.alt="filmRecs App Mockup on mobile and laptop"
    // })
}

portfolio.aboutMeModal = () => {
    const modal = document.querySelector(".modal");
    const image = document.querySelector(".me1")
    const modalImg = document.querySelector(".modalContent");
    image.onclick = () => {
    modal.style.display = "block";
    modalImg.src = this.src;
    }

    const span = document.querySelector(".close");

    span.onclick = function() {
    modal.style.display = "none";
    }
}

portfolio.init = () => {   
    portfolio.aboutMeModal();
    portfolio.scrollTo();
    portfolio.projectButtons()
}

portfolio.init();

