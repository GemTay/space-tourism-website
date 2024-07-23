const tabs = document.querySelectorAll('[data-destination]');
const numberIndicators = document.querySelectorAll('[data-indicator]');
const crewButtons = document.querySelectorAll('[data-crew]');

const data = fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        tabs.forEach((tab) => {
            tab.onclick = (e) => {
                const targetTab = e.target;
                const selectedTab = document
                .querySelector(".tab-items [aria-selected='true']")
                .setAttribute("aria-selected", "false");

                targetTab.setAttribute("aria-selected", "true");

                document.querySelector(".grid-container--destination > img").src = json.destinations[tab.dataset.destination].images.webp;
                document.querySelector(".destination-info > h2").innerHTML = json.destinations[tab.dataset.destination].name;
                document.querySelector(".destination-info > p").innerHTML = json.destinations[tab.dataset.destination].description; 
                document.querySelector(".destination-stats--distance").innerHTML = json.destinations[tab.dataset.destination].distance;
                document.querySelector(".destination-stats--time").innerHTML = json.destinations[tab.dataset.destination].travel;

            }
        })

        crewButtons.forEach((btn) => {
            btn.onclick = (e) => {
                const targetTab = e.target;
                const selectedBtn = document
                .querySelector(".pagination-indicators [aria-selected='true']")
                .setAttribute("aria-selected", "false");

                targetTab.setAttribute("aria-selected", "true");

                document.querySelector(".grid-container--crew img").src = json.crew[btn.dataset.crew].images.webp;
                document.querySelector(".crew-info h2").innerHTML = json.crew[btn.dataset.crew].role;
                document.querySelector(".crew-info p").innerHTML = json.crew[btn.dataset.crew].name; 
                document.querySelector(".crew-member-description").innerHTML = json.crew[btn.dataset.crew].bio;
            }
        })

        numberIndicators.forEach((indicator) => {
            indicator.onclick = (e) => {
                const targetTab = e.target;
                const selectedTab = document
                .querySelector(".numbered-indicators [aria-selected='true']")
                .setAttribute("aria-selected", "false");

                targetTab.setAttribute("aria-selected", "true");

                document.querySelector(".technology-img-landscape").src = json.technology[indicator.dataset.indicator].images.landscape;
                document.querySelector(".technology-img-portrait").src = json.technology[indicator.dataset.indicator].images.portrait;
                document.querySelector(".technology-info > header > p").innerHTML = json.technology[indicator.dataset.indicator].name;
                document.querySelector(".technology-info > p").innerHTML = json.technology[indicator.dataset.indicator].description;
            }
        })

    });



