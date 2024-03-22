document.addEventListener('DOMContentLoaded', function() {
    // Får loginet
    const loginForm = document.getElementById('login-form');

    // Tilføjer en eventlistener som tjekker input
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Får brugernavn og password af inputs gennem listen. 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Hardcoder lige et username/password så der ikke skal bruges databaser/msql til opbevaring.
        const hardcodedUsername = 'admin';
        const hardcodedPassword = 'admin';

        // Tjekker om informationerne matcher og loginet eksisterer. 
        if (username === hardcodedUsername && password === hardcodedPassword) {
            alert('Login lykkedes!');
            // Redirect to homepage
            window.location.href = '../home.html'; // Omredigerer til startside.
        } else {
            alert('Forkert brugernavn eller adgangskode. hint: skriv "admin" i begge felter.');
        }
    });
});
