const API_URL = "http://localhost:5000/api/matches";


async function saveMatch(matchData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(matchData)
    });
    return response.json();
}


async function getMatches() {
    const response = await fetch(API_URL);
    const matches = await response.json();
    console.log("Maç Geçmişi:", matches);
}