const countries = {

    uk: {
        name: "United Kingdom 🇬🇧",
        place: "London",
        budget: "Approximately £35,000 per year",

        rules: [
            "Get admission from a recognized university.",
            "Meet the required English language level.",
            "Obtain the required student visa.",
            "Show required financial evidence.",
            "Follow student visa work and study conditions."
        ],

        documents: [
            "Valid Passport",
            "University Offer Letter",
            "Academic Certificates and Transcripts",
            "English Language Test Result",
            "Financial Evidence",
            "Student Visa Documents"
        ]
    },

    canada: {
        name: "Canada 🇨🇦",
        place: "Toronto",
        budget: "Approximately CAD 40,000 per year",

        rules: [
            "Get admission from a recognized institution.",
            "Meet the academic requirements.",
            "Meet English or French language requirements.",
            "Show required financial support.",
            "Apply for the appropriate study permit."
        ],

        documents: [
            "Valid Passport",
            "Letter of Acceptance",
            "Academic Certificates",
            "English Language Test",
            "Proof of Funds",
            "Study Permit Documents"
        ]
    },

    australia: {
        name: "Australia 🇦🇺",
        place: "Sydney",
        budget: "Approximately AUD 45,000 per year",

        rules: [
            "Receive an offer from an Australian institution.",
            "Meet the academic requirements.",
            "Meet English language requirements.",
            "Provide required financial evidence.",
            "Follow student visa conditions."
        ],

        documents: [
            "Valid Passport",
            "University Offer Letter",
            "Academic Documents",
            "English Test Result",
            "Financial Documents",
            "Visa Application Documents"
        ]
    },

    germany: {
        name: "Germany 🇩🇪",
        place: "Berlin",
        budget: "Approximately €20,000 per year",

        rules: [
            "Get admission from a suitable university.",
            "Meet the academic requirements.",
            "Meet language requirements of your program.",
            "Provide required financial proof.",
            "Obtain the correct student visa or residence permission."
        ],

        documents: [
            "Valid Passport",
            "University Admission Letter",
            "Academic Certificates",
            "Language Certificate",
            "Financial Proof",
            "Visa Documents"
        ]
    },

    usa: {
        name: "United States 🇺🇸",
        place: "New York",
        budget: "Approximately $50,000 per year",

        rules: [
            "Get admission from a recognized university.",
            "Meet the university's academic requirements.",
            "Meet English language requirements if required.",
            "Show sufficient financial resources.",
            "Obtain the appropriate student visa."
        ],

        documents: [
            "Valid Passport",
            "University Admission Letter",
            "Academic Transcripts",
            "English Test Result",
            "Financial Documents",
            "Visa Documents"
        ]
    },

    turkey: {
        name: "Turkey 🇹🇷",
        place: "Istanbul",
        budget: "Approximately $15,000 per year",

        rules: [
            "Get admission from a Turkish university.",
            "Meet the university's academic requirements.",
            "Meet language requirements of the program.",
            "Prepare financial documents.",
            "Apply for the appropriate visa or residence permission."
        ],

        documents: [
            "Valid Passport",
            "University Acceptance Letter",
            "Academic Certificates",
            "Language Certificate if required",
            "Financial Proof",
            "Visa Documents"
        ]
    },

    malaysia: {
        name: "Malaysia 🇲🇾",
        place: "Kuala Lumpur",
        budget: "Approximately $12,000 per year",

        rules: [
            "Get admission from a recognized institution.",
            "Meet academic requirements.",
            "Meet English language requirements if required.",
            "Complete the required student pass process.",
            "Follow the institution and immigration rules."
        ],

        documents: [
            "Valid Passport",
            "University Offer Letter",
            "Academic Certificates",
            "English Test if required",
            "Financial Documents",
            "Student Pass Documents"
        ]
    }

};


function showCountry(countryCode) {

    const country = countries[countryCode];

    let rulesHTML = "";

    country.rules.forEach(function(rule) {
        rulesHTML += `<li>${rule}</li>`;
    });


    let documentsHTML = "";

    country.documents.forEach(function(document) {
        documentsHTML += `<li>${document}</li>`;
    });


    document.getElementById("countryDetails").innerHTML = `

        <h2>${country.name}</h2>

        <p>
            📍 Famous Place:
            <strong>${country.place}</strong>
        </p>

        <div class="modal-budget">
            💰 Estimated Maximum Budget:
            ${country.budget}
        </div>

        <h3>📋 5 Basic Rules</h3>

        <ul>
            ${rulesHTML}
        </ul>

        <h3>📄 Basic Documents</h3>

        <ul>
            ${documentsHTML}
        </ul>

        <p style="margin-top:20px; color:#687386;">
            Note: Requirements can change. Always check
            current requirements from official university
            and immigration sources.
        </p>
    `;

    document.getElementById("countryModal").style.display = "block";
}


function closeModal() {

    document.getElementById("countryModal").style.display = "none";

}


window.onclick = function(event) {

    const modal = document.getElementById("countryModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};


document
    .getElementById("searchInput")
    .addEventListener("keyup", function() {

        let searchValue =
            this.value.toLowerCase();

        let cards =
            document.querySelectorAll(".country-card");


        cards.forEach(function(card) {

            let countryName =
                card
                .querySelector("h3")
                .textContent
                .toLowerCase();


            if (countryName.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });


document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        this.reset();

    });