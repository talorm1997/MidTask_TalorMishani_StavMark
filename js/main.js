const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "Sterilizer Accessories",
            "img":"1.png",
            "content": "Accessories and spare parts for Dentsply Sirona's sterilizers.",
            "link": "https://chat.openai.com/",
            "tag": "טקסט"
        },
        {
            "id": 2,
            "title": "DAC Universal Accessories",
            "img":"2.png",
            "content": "DAC Universal accessories and spare parts reaching from filters to lubrication.",
            "link": "https://labs.openai.com/",
            "tag": "תמונה"
        },
        {
            "id": 3,
            "title": "NitraDem DC2 Complete Kit (DS EN)",
            "img":"3.png",
            "content": "NitraDem Direct Connect II provides cost-effective, high-quality demineralized water automatically.",
            "link": "https://elicit.com/",
            "tag": "טקסט"
        },
        {
            "id": 4,
            "title": "DAC Universal Adapters Flex/Green/White Lid",
            "img":"4.png",
            "content": "Adapter for reprocessing ultrasonic/sonic scalers, tips, syringe nozzles, and powder jet handpieces using Dentsply Sirona's DAC Universal lids.",
            "link": "https://claude.ai/login",
            "tag": "טקסט"
        },
        {
            "id": 5,
            "title": "O-Ring Lids",
            "img":"5.png",
            "content": "O-Rings for Dentsply Sirona's DAC Universal",
            "link": "https://bard.google.com/chat",
            "tag": "טקסט"
        },
        {
            "id": 6,
            "title": "DAC Premium/DAC Professional Sterilizers",
            "img":"6.png",
            "content": "\n" +
                "The DAC Premium/Professional sterilizers meet \"Class B\" standards with advanced vacuum technology, handling hard-to-sterilize items and offering customizable programs.",
            "link": "https://segment-anything.com/",
            "tag": "תמונה"
        },
        {
            "id": 7,
            "title": "DAC Universal Adapters Standard/Blue/Pink Lid",
            "img":"7.png",
            "content": "Adapter for Dentsply Sirona's DAC Universal lids for the reprocessing of straight and contra-angle handpieces and turbines.",
            "link": "https://palette.fm/",
            "tag": "תמונה"
        },
        {
            "id": 8,
            "title": "DAC Universal S",
            "img":"8.png",
            "content": "The DAC Universal D/S automates cleaning, lubrication, and disinfection/sterilization of dental instruments, ensuring high hygienic safety.",
            "link": "https://palette.fm/",
            "tag": "תמונה"
        },
        {
            "id": 9,
            "title": "SiroSeal and Accessories",
            "img":"9.png",
            "content": "SiroSeal bar sealing devices ensure safe, quick packaging of surgical instruments, keeping them protected until use.",
            "link": "https://palette.fm/",
            "tag": "תמונה"
        },
        {
            "id": 10,
            "title": "DAC Premium/DAC Professional Sterilizer",
            "img":"10.png",
            "content": "Accessories and spare parts for Dentsply Sirona's sterilizers.",
            "link": "https://palette.fm/",
            "tag": "תמונה"
        },
    ]
}


document.addEventListener("DOMContentLoaded", function (event) {
    const itemsContainer = document.getElementById("itemsContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");

    let cart = []; // array of all products

    jsonData.generators.forEach(g => {
        const myCard = document.createElement("div");
        myCard.setAttribute("class", "card col-sm-3 text-center mb-3");

        const myImg = document.createElement("img");
        myImg.setAttribute("src", `pics/${g.img}`);
        myImg.setAttribute("class", "card-img-top");

        const title = document.createElement("h5");
        title.setAttribute("class", "card-title");
        title.textContent = g.title;

        const content = document.createElement("p");
        content.setAttribute("class", "card-text");
        content.textContent = g.content;

        myCard.appendChild(myImg);
        myCard.appendChild(title);
        myCard.appendChild(content);

        myCard.dataset.title = g.title.toLowerCase();

        //  מאזין לאירועים ללחיצה על card כלשהו
        myCard.addEventListener("click", function () {
            // הצגת המידע במודל
            document.getElementById("modalImg").src = `pics/${g.img}`;
            document.getElementById("modalTitle").textContent = g.title;
            document.getElementById("modalContent").textContent = g.content;

            //  כפתור הוספה לסל
            const addToCartButton = document.getElementById("addToCartButton");
            addToCartButton.onclick = function() {
                // הוספת המוצר לסל
                cart.push(g);

                // הצגת הודעה ב-toast
                const toastMessage = document.getElementById("toastMessage");
                toastMessage.textContent = g.title + " was added to cart";

                // הצגת ה-toast
                var toast = new bootstrap.Toast(document.getElementById('toast'));
                toast.show();
            };


            // פתיחת המודל
            new bootstrap.Modal(document.getElementById('itemModal')).show();
        });

        itemsContainer.appendChild(myCard);
    });

    // פונקציה לאיפוס
    function resetCards() {
        searchInput.value = ""; // איפוס שדה החיפוש
        const cards = itemsContainer.querySelectorAll(".card");
        cards.forEach(card => {
            card.style.display = "block"; // הצגת כל הכרטיסיות
        });
    }

    resetButton.addEventListener("click", resetCards);

    function filterCards() {
        const query = searchInput.value.toLowerCase();
        const cards = itemsContainer.querySelectorAll(".card");

        cards.forEach(card => {
            const title = card.dataset.title;
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", filterCards);
    
});