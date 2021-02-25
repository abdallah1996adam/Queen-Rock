/* STICKY NAV */

const nav = document.querySelector('#nav');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

/* ACTIVE NAV */
// La section qui est à l'écran modifie la couleur du texte dans la nav
// Exemple : A l'écran, la section About est affiché du coup sur la Nav 
// A propos reste en rouge.

const about = document.getElementById("about");
const aboutPos = about.offsetTop;
const aboutNav =document.getElementById("about-nav");
const services = document.getElementById("services");
const servicesPos = services.offsetTop;
const servicesNav =document.getElementById("services-nav");
const contact = document.getElementById("contact");
const contactPos = contact.offsetTop;
const contactNav =document.getElementById("contact-nav");

function navUpdate(){
    console.log(aboutPos, servicesPos, contactPos)
    if (window.scrollY >= contactPos-50){
        contactNav.classList.add("focus");
        servicesNav.classList.remove("focus");
        aboutNav.classList.remove("focus");
    }
    else if (window.scrollY >= servicesPos-50){
        contactNav.classList.remove("focus");
        servicesNav.classList.add("focus");
        aboutNav.classList.remove("focus");
    }
    else if (window.scrollY >= aboutPos-50){
        contactNav.classList.remove("focus");
        servicesNav.classList.remove("focus");
        aboutNav.classList.add("focus");
    }
    else {
        contactNav.classList.remove("focus");
        servicesNav.classList.remove("focus");
        aboutNav.classList.remove("focus");
    }
}
window.addEventListener("scroll", navUpdate);

/* CARROUSEL SECTION SERVICES */

let index=0;
function changeIndexPrev () {
    switch(index){
        case 0:
            index=2;
            break;
        case 1:
            index=0;
            break;
        case 2:
            index=1;
            break;
        default:
            break;
    }
    carrousel(index);
}

function changeIndexNext () {
    switch(index){
        case 0:
            index=1;
            break;
        case 1:
            index=2;
            break;
        case 2:
            index=0;
            break;
        default:
            break;
    }
    carrousel(index);
}

document.getElementById("prev").addEventListener("click", changeIndexPrev)
document.getElementById("next").addEventListener("click", changeIndexNext)

let content = [
    { img: "Images/competition.png", alt: "Le roi en pièce d'échec symbolisant la compétition", title:"Compétition",text: "Nous vous proposons de représenter le club durant des compétitions pouvant aller du tournoi d'une ville au championnat du monde"} ,
    { img: "Images/entrainement.png", alt: "Le pion en pièce d'échec symbolisant l'apprentissage'",title:"Entrainement", text: "Des cours ouvert aux débutants et au initié vous aideront à découvrir le jeu, à découvrir de nouvelle stratégie ou à améliorer votre stratégie"} ,
    { img: "Images/apprentissage.png", alt: "La tour en pièce d'échec symbolisant les parties entre joueurs",title:"Apprentissage", text: "Rejoignez un groupe de joueurs pour faire des parties qque ce soit en mode détente ou en mode compétition tout dépend de votre choix"}
];

function carrousel (i){
    let slideShow = document.getElementById("slideShow");
    let text = `<div class="flex content">
                    <h2>${content[i].title}</h2>
                    <p>${content[i].text}</p>
                </div>
            <img src="${content[i].img}" alt="${content[i].alt}">`;
    slideShow.innerHTML = text;
}

carrousel(index);