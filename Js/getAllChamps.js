// Riot Data Dragon URL'leri
const CHAMP_DATA_URL = 'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/tr_TR/champion.json';
const SPLASH_BASE_URL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
let allChamps=[];

async function loadChampions() {
    try {
        const response = await fetch(CHAMP_DATA_URL);
        const data = await response.json();
        const champions = Object.values(data.data);
        allChamps = champions;

        displayChampions(champions);
    } catch (error) {
        console.error("Şampiyonlar yüklenirken hata oluştu:", error);
    }
}

function displayChampions(champions) {
    const gallery = document.querySelector('.match-gallery');
    gallery.innerHTML = ''; // Statik örnekleri temizle

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

        // Tıklama olayı: Detay sayfasına veya maç ekleme formuna yönlendirir
        card.onclick = () => {
            console.log(`${champ.name} seçildi!`);
            // Buraya tıklanınca ne olacağını sonraki adımda yazacağız
        };

        gallery.appendChild(card);
    });
}



const selectingRoleCard = document.querySelector(".role-tabs-nav");
const selectingRoleItems = document.querySelectorAll(".role");


selectingRoleCard.addEventListener("click" , getRole);

function getRole(e){

    changeActiveTab(e.target);
    let roleText = e.target.innerHTML;

    filterWithRole(roleText);
}


function changeActiveTab(tab){
    selectingRoleItems.forEach(btn => btn.classList.remove('active'));
    tab.classList.add("active");
}

function filterWithRole(role){

    if(role === "All"){
        displayChampions(allChamps);
    }
    else{
        let champPool=allChamps.filter(champ => champ.tags.includes(role));
        displayChampions(champPool);
    }
    
}

// Sayfa açıldığında fonksiyonu çalıştır
document.addEventListener('DOMContentLoaded', loadChampions);