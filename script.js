const sitesContainer = document.getElementById("all-sites-container")

const sites = [
    {
        title: "Magic: The Gathering - Color Quiz",
        description: "Test your knowledge of color combination names from the world of Magic: The Gathering",
        url: "https://mtg-color-quiz.netlify.app",
        boxImage: "images/color-quiz-img.png"
    },
    {
        title: "Ruben: The Card Finder",
        description: "Search engine for Magic: The Gathering cards",
        url: "https:/ruben-card-finder.netlify.app",
        boxImage: "images/card-finder.png"
    },
    {
        title: "Tøyenhagen Magiske Ekstravagansa",
        description: "A site containing info about a Magic: The Gathering tournament I host for my friends occasionally",
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
    <a href="${sites[i].url}" target="_blank"><div class="site-box">
    <h2>${sites[i].title}</h2>
    <p>${sites[i].description}</p>
    </div></a>
    `
}