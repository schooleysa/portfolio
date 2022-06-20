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

    titleAboutMe.addEventListener("keydown", () => aboutMe.scrollIntoView({behavior: "smooth"}));
    titleMySkills.addEventListener("keydown", () => mySkills.scrollIntoView({behavior: "smooth"}));
    titleProjects.addEventListener("keydown", () => projects.scrollIntoView({behavior: "smooth"}));
    titleContactMe.addEventListener("keydown", () => contactMe.scrollIntoView({behavior: "smooth"}));

}

portfolio.addSelected = (button1) => {
    button1.classList.add("selected")
}

portfolio.removeSelected = (button2, button3) => {
    button2.classList.remove("selected")
    button3.classList.remove("selected")
}

portfolio.projectButtons = () => {
    const filmRecs = document.querySelector(".filmRecs")
    const blackJack = document.querySelector(".blackJack")
    const anywhere = document.querySelector(".anywhere")
    const projectImg = document.querySelector(".projectImg")
    const projectText = document.querySelector(".projectText")

    filmRecs.addEventListener("click", () => {
        portfolio.addSelected(filmRecs)
        portfolio.removeSelected(blackJack, anywhere)
        projectImg.innerHTML=`<img src="./assets/filmRecsMockup2.png" alt="Film Recs App Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>FilmRecs</h3>
        <p>Responsive and accessible movie recommendation app.  Uses a RESTful API to recommend a film based on a users chosen parameters.  Pair programmed in React, utilizing hooks.  Users submitted reviews are saved and displayed using a Firebase realtime database.</p>
        <a href="https://jolly-allen-1f982c.netlify.app/">Click to Try!</a>`
    })

    blackJack.addEventListener("click", () => {
        portfolio.addSelected(blackJack)
        portfolio.removeSelected(filmRecs, anywhere)
        projectImg.innerHTML=`<img src="./assets/GitGood.png" alt="Black Jack App Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>Black Jack</h3>
        <p>Fully playable game of Black Jack built on RESTful API calls.  Dealer logic written in vanilla JavaScript.  Try your luck!  Hit on fifteen!  Live a little!</p>
        <a target="_blank" href="https://quirky-noyce-c630fa.netlify.app/">Click to Try!</a>`
    })

    anywhere.addEventListener("click", () => {
        portfolio.addSelected(anywhere)
        portfolio.removeSelected(filmRecs, blackJack)
        projectImg.innerHTML=`<img src="./assets/anywhereMockup2.png" alt="Anywhere But Here Mockup on mobile and laptop">`
        projectText.innerHTML=`<h3>Git Good</h3>
        <p>Search GitHub Profiles and link to all public Repos.  Built with React, Bootstrap and the GitHub Api</p>
        <a target="_blank" href="https://jazzy-otter-40b8ec.netlify.app/">Click to Try!</a>`
    })
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
