// Eksempler på spiller profiler (hardcoded). Manuelt tilføjet for at vise eksempel.
let profiles = [
    { name: "Victor Vorning", age: 23, hc: 7, description: "Spiller golf 3-4 gange om ugen. Plejer at spille ude i Silkeborg/Ry Golfklub. Kan kontaktes på 61721123, eller her på siden hvis der ønskes at spille. Ligger i handikap 7.", interests: "Fællesskab, læring, konkurence.", roundsPlayed: 20, roundsWon: 10, roundsLost: 5, holeInOnes: 0 },
    { name: "Kaj Mogensen", age: 25, description: "Test", interests: "test", roundsPlayed: 15, roundsWon: 8, roundsLost: 6, holeInOnes: 1 },
    { name: "Bob Hansen", age: 35, description: "Test", interests: "test2", roundsPlayed: 25, roundsWon: 15, roundsLost: 10, holeInOnes: 2 }
];

// Funktion til at søge på eksisterende profiler.
function searchProfiles() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase() === searchInput);
    displayProfiles(filteredProfiles);
}

// Funktion til at vise profiler.
function displayProfiles(profilesArray) {
    const profileList = document.getElementById("profile-list");

    // Fjerner tidligere profiler så kun den søgte vises.
    profileList.innerHTML = "";

    profilesArray.forEach(profile => {
        const profileContainer = document.createElement("div");
        profileContainer.classList.add("container");

        const heading = document.createElement("h1");
        heading.textContent = "Profil";
        heading.style.color = "#fff";
        heading.style.marginTop = "30px";
        profileContainer.appendChild(heading);

        const profileBox = document.createElement("div");
        profileBox.classList.add("profile-box");
        profileContainer.appendChild(profileBox);

        const profileSection = document.createElement("div");
        profileSection.classList.add("profile-section");
        profileBox.appendChild(profileSection);

        // Profil billede
        const profilePicture = document.createElement("img");
        profilePicture.src = "/img/test4.webp"; 
        profilePicture.alt = "Profile Picture";
        profileSection.appendChild(profilePicture);

        // Spiller info
        const profileInfo = document.createElement("div");
        profileInfo.classList.add("profile-info");
        profileSection.appendChild(profileInfo);

        const name = document.createElement("p");
        name.innerHTML = "<strong>Navn:</strong> " + profile.name;
        profileInfo.appendChild(name);

        const age = document.createElement("p");
        age.innerHTML = "<strong>Alder:</strong> " + profile.age;
        profileInfo.appendChild(age);

        const hc = document.createElement("p");
        hc.innerHTML = "<strong>Handicap:</strong> " + profile.hc;
        profileInfo.appendChild(hc);

        const description = document.createElement("p");
        description.innerHTML = "<strong>Beskrivelse:</strong> " + profile.description;
        profileInfo.appendChild(description);

        const values = document.createElement("p");
        values.innerHTML = "<strong>Værdier:</strong> " + profile.interests;
        profileInfo.appendChild(values);

        // Stats for spilleren
        const statsSection = document.createElement("div");
        statsSection.classList.add("stats-section");
        profileBox.appendChild(statsSection);

        const statsHeading = document.createElement("h2");
        statsHeading.textContent = "Stats";
        statsSection.appendChild(statsHeading);

        const statsList = document.createElement("ul");
        statsSection.appendChild(statsList);

        // Tilføjer stats som liste.
        const stats = [
            { label: "Runder spillet", value: profile.roundsPlayed },
            { label: "Runder vundet", value: profile.roundsWon },
            { label: "Runder tabt", value: profile.roundsLost },
            { label: "Hole in ones", value: profile.holeInOnes }
        ];

        stats.forEach(stat => {
            const statItem = document.createElement("li");
            statItem.textContent = `${stat.label}: ${stat.value}`;
            statsList.appendChild(statItem);
        });

        // Tilføjer the new profile
        profileList.appendChild(profileContainer);
    });
}
