// Riot Data Dragon URL'leri
const CHAMP_DATA_URL = 'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/tr_TR/champion.json';
const SPLASH_BASE_URL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';

const selectedRole = document.querySelectorAll(".role");


console.log(selectedRole);



async function loadChampions() {
    try {
        const response = await fetch(CHAMP_DATA_URL);
        const data = await response.json();
        const champions = Object.values(data.data); // Objeyi diziye çeviriyoruz

        displayChampions(champions);
    } catch (error) {
        console.error("Şampiyonlar yüklenirken hata oluştu:", error);
    }
}

function displayChampions(champions) {
    const gallery = document.querySelector('.match-gallery');
    gallery.innerHTML = ''; 

    champions.forEach(champ => {
        // Kart yapısını oluştur
        const card = document.createElement('div');
        card.className = 'match-card';
        
        // Görseldeki 'Rating' yerine şampiyonun zorluk seviyesini veya HP'sini koyabiliriz
        const difficulty = champ.info.difficulty;

        card.innerHTML = `
            <div class="card-img">
                <img src="${SPLASH_BASE_URL}${champ.id}_0.jpg" alt="${champ.name}" loading="lazy">
                <div class="rating">${difficulty}</div>
            </div>
            <h3>${champ.name}</h3>
            <p class="category">${champ.tags.join(', ')}</p>
        `;

        
        card.onclick = () => {
            console.log(`${champ.name} seçildi!`);
            
        };

        gallery.appendChild(card);
    });
}

























































document.addEventListener('DOMContentLoaded', loadChampions);