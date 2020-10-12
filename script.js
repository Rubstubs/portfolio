const sitesContainer = document.getElementById("all-sites-container")
const passionContainer = document.getElementById("passion-container")
const contactContainer = document.getElementById("contact-container")
const passionBtn = document.getElementById("passion-btn")
const portfolioBtn = document.getElementById("portfolio-btn")
const contactBtn = document.getElementById("contact-btn")

const grey = "rgba(238, 238, 238, 0.900)"
const white = "rgba(255, 255, 255)"

const sites = [
    {
        title: "Magic: The Gathering - Color Quiz",
        description: "Quiz yourself on the colors of Magic: The Gathering",
        url: "https://mtg-color-quiz.netlify.app",
        boxImage: "images/color-quiz-img.png"
    },
    {
        title: "Ruben: The Card Finder",
        description: "Search engine for Magic: The Gathering cards",
        url: "https://ruben-card-finder.netlify.app",
        boxImage: "images/card-finder.png"
    },
    {
        title: "Tøyenhagen Magiske Ekstravagansa",
        description: "A Magic: The Gathering tournament I host for my friends occasionally",
        url: "https://toyenhagen-magiske.netlify.app",
        boxImage: "images/tme.png"
    },
    {
        title: "Kunstus Gallerija",
        description: "A very small digital art gallery",
        url: "https://kunstus-gallerija.netlify.app",
        boxImage: "images/kunstus-gallerija.png"
    },
    {
        title: "HeroQuest Character Tracker",
        description: "Have everything under control while playing HeroQuest with this utility",
        url: "https://hero-quest.netlify.app",
        boxImage: "images/hero-quest.png"
    }
]

for (i = 0; i < sites.length; i++) {
    sitesContainer.innerHTML += `
    <div class="site-box"><a href="${sites[i].url}" target="_blank">
    <h2>${sites[i].title}</h2>
    <p>${sites[i].description}</p>
    </a></div>
    `
}

function show(section) {
    setTimeout(()=>{
        section.style.display = "flex"
        section.style.opacity = "0"
    }, 760)
        setTimeout(()=>{
        section.style.opacity = "1"
    }, 770)
}

function hide(section) {
    section.style.opacity = "0"
    setTimeout(()=>{
        section.style.display = "none"
    }, 750)
}

function navigateToPassion() {
    show(passionContainer)
    hide(contactContainer)
    hide(sitesContainer)

    //farger
    passionBtn.style.color = white
    portfolioBtn.style.color = grey
    contactBtn.style.color = grey

    //størrelser navbar
    passionBtn.style.fontSize = "2em"
    portfolioBtn.style.fontSize = "0.7em"
    contactBtn.style.fontSize = "0.7em"
}

function navigateToPortfolio() {
    hide(passionContainer)
    hide(contactContainer)
    show(sitesContainer)

    //farger
    portfolioBtn.style.color = white
    passionBtn.style.color = grey
    contactBtn.style.color = grey

    //størrelser navbar
    portfolioBtn.style.fontSize = "2em"
    passionBtn.style.fontSize = "0.7em"
    contactBtn.style.fontSize = "0.7em"
}

function navigateToContact() {
    hide(passionContainer)
    show(contactContainer)
    hide(sitesContainer)

    //farger
    contactBtn.style.color = white
    portfolioBtn.style.color = grey
    passionBtn.style.color = grey
    
    //størrelser navbar
    contactBtn.style.fontSize = "2em"
    passionBtn.style.fontSize = "0.7em"
    portfolioBtn.style.fontSize = "0.7em"
}

passionBtn.addEventListener("click", navigateToPassion)
portfolioBtn.addEventListener("click", navigateToPortfolio)
contactBtn.addEventListener("click", navigateToContact)