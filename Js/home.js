async function loadMatchHistory() {
    const res = await fetch('http://localhost:5000/api/matches');
    const matches = await res.json();
    console.log("Veritabanındaki Maçlar:", matches);
    
}