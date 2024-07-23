const crewButtons = document.querySelectorAll('[data-crew]');

const data = fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
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

    });

