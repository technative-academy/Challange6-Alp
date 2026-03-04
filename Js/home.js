async function loadMatchHistory() {
    const res = await fetch('http://localhost:5000/api/matches');
    const matches = await res.json();
    console.log("These are matches in the database:", matches);
    
}


const selectedChamp = document.querySelectorAll(".card-img");

selectedChamp.forEach(element => {
    element.addEventListener("click",routeForSave);
});



function routeForSave(e){

    console.log(e.target.alt);
  

   
}