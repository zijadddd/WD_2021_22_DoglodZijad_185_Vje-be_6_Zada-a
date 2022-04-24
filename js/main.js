/*
***********************************************
         ZADACI ZA SAMOSTALNI RAD
***********************************************

1. Koristeći link (https://jsonplaceholder.typicode.com/users) dohvatiti korisnike koristeći fetch

2. Prikazati ime, username i naziv kompanije 

3. Koristiti neki bootstrap element za prikaz podataka (npr. card - slika nije bitna, može biti i 
defaultna)
---------------------------------------------------------------------------------------------
*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(!res.ok) {
            throw Error('[GRESKA] Dogodila se greska.');
        } 
        return res.json();
    })
    .then(data => {
        const cardList = document.getElementById('cards');
        let cards = '';

        data.forEach(element => {
            cards += `
                <div class="card" style="width: 18rem;" id="cardForAPI">
                    <img src="./img/profilephoto.png" class="card-img-top" alt="profilephoto">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.username}</h6>
                        <p class="card-text">Company name ${element.company.name}</p>
                    </div>
                </div>                       
            `
        })

        cardList.innerHTML = cards; 
    })