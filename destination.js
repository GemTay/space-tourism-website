const tabs = document.querySelectorAll('[data-destination]');

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

    });



