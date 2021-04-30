const portfolio = {};


portfolio.aboutMeModal = () => {
    console.log(2)
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
    console.log(1)
    portfolio.aboutMeModal();
}

portfolio.init();

