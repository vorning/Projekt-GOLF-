// Funktion til at søge efter aktive spil
function searchGames() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredGames = games.filter(game => {
        return game.name.toLowerCase().includes(searchInput) || game.course.toLowerCase().includes(searchInput) || game.participants.some(participant => participant.toLowerCase().includes(searchInput));
    });
    displayGames(filteredGames);
}

// Funktion til at deltage i oprettet spil
function joinGame(gameIndex, playerName) {
    games[gameIndex].participants.push(playerName);
    displayGames();
}

// Mock data/hardcoded for at demonstere oprettet spil.
let games = [
    { name: "Spil 1", course: "Golf bane 1", image: "./img/golf1.jpeg", participants: ["John", "Mogens", "Bob"] },
    { name: "Spil 2", course: "Golf bane 2", image: "./img/golf2.png", participants: ["Kathrine", "Victor", "David"] },
    { name: "Spil 3", course: "Golf bane 3", image: "./img/golf3.jpeg", participants: ["Jens", "Jakob", "Steffen"] }
];

// Funktion til at vise aktive spil
function displayGames(gamesArray = games) {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = "";
    
    gamesArray.forEach((game, index) => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");

        // Billede af golfklub
        const gameImage = document.createElement("img");
        gameImage.classList.add("game-image");
        gameImage.src = game.image;
        gameItem.appendChild(gameImage);

        // Spil navn og bane
        const gameDetails = document.createElement("div");
        gameDetails.classList.add("game-details");
        gameDetails.innerHTML = `<h3>${game.name}</h3><strong>Golf bane:</strong>   ${game.course}`;
        gameItem.appendChild(gameDetails);

        // Deltageres navne
        const participants = document.createElement("div");
        participants.classList.add("participants");
        participants.innerHTML = "<strong>Deltagere:</strong>";
        game.participants.forEach(participant => {
            const participantName = document.createElement("span");
            participantName.classList.add("participant-name");
            participantName.textContent = participant;
            participants.appendChild(participantName);
        });
        gameItem.appendChild(participants);

        // Deltag knap
        const joinButton = document.createElement("button");
        joinButton.classList.add("join-btn");
        joinButton.textContent = "Deltag";
        joinButton.addEventListener("click", () => {
            const playerName = prompt("Enter your name:");
            if (playerName) {
                joinGame(index, playerName);
            }
        });
        gameItem.appendChild(joinButton);

        gameList.appendChild(gameItem);
    });
}

// forhindre oprettelse uden information
document.getElementById("create-game-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Får værdier fra oplysninger indtastet
    const gameName = document.getElementById("game-name").value;
    const courseName = document.getElementById("course-name").value;
    const clubImage = document.getElementById("club-image").files[0];

    // Læser billede fil
    const reader = new FileReader();
    reader.onload = function() {
        // Opretter spil objekt med givne værdier som blev indtastet
        const game = {
            name: gameName,
            course: courseName,
            image: reader.result, 
            participants: []
        };

        // Tilføjer spillet til array listen med aktive
        games.push(game);

        // Viser aktive spil igen efter den er tilføjet så den opdateres.
        displayGames();
    };

    if (clubImage) {
        // Læser billedet og tjekker om det er data kan bruges.
        reader.readAsDataURL(clubImage);
    } else {
        alert("Please select a club image.");
    }
});

// Viser aktive spil igen.
displayGames();