
function openMatchForm(championName) {
    document.getElementById('matchModal').style.display = "block";
    document.getElementById('selectedChamp').innerText = championName;
    document.getElementById('champName').value = championName;
}


document.getElementById('matchForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const matchData = {
        champion: document.getElementById('champName').value,
        opponent: document.getElementById('opponent').value,
        kda: document.getElementById('kda').value,
        result: document.getElementById('result').value
    };

    const response = await fetch('http://localhost:5000/api/matches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(matchData)
    });

    if (response.ok) {
        alert("Match is saved!!!!!!");
        document.getElementById('matchModal').style.display = "none";
        
    }
});