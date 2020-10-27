const navSlide = () => {
    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    hamburger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });

        hamburger.classList.toggle('toggle');
    });
}

navSlide();


const button = document.querySelector("#contact");
const newElement = document.createElement("div");

newElement.setAttribute("id", "button");

newElement.innerHTML = '<a href="#" class="btn">Contact Me</a>';

button.appendChild(newElement);
