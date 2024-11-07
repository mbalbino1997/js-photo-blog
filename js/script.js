/*
<div class="col">
    <div class="card">
        <img class="pin" src="./img/pin.svg" alt="">
        <figure>
            <img class="testImg" src="./img/testimg.jfif" alt="">
        </figure>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, optio.</p>
    </div>
</div>
*/
//prendiamo gli elementi necessari per la manipolazione del dom
const appendCard = document.getElementById("appendCard");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");
const img = document.getElementById("img");
let posts;




// chiamata get utilizzando axios
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(res => {
    
    createCardsElements(res.data);
    
    //prendiamo tutte le card create
    const cards = document.querySelectorAll(".card");
    
    setupCardClick(cards, res.data);
    
})
.catch(err => {
    console.error(err);
})

configureCloseOnClick(btnClose);
configureCloseOnClick(overlay);




//FUNZIONI


//prende il risultato della chiamata get come parametro ed utilizza i dati per creare le card

function createCardsElements(data) {
    data.forEach((post) => {
        const { url, title } = post;
        appendCard.innerHTML +=
        `<div class="col">
        <div id="card" class="card">
        <img class="pin" src="./img/pin.svg" alt="">
        <figure>
        <img class="testImg" src="${url}" alt="">
        </figure>
        <p>${title}</p>
        </div>
        </div>`;
    });
}

//manipola il dom al click dell elemento passato come parametro

function configureCloseOnClick(element) {
    element.addEventListener("click", () => {
        overlay.classList.add("none");
        img.classList.add("none");
        body.classList.remove("overflow-hidden");
        
    })
}

//aggiunge l'eventlistener per gestire l'overlay su tutti gli elementi dell'array passato come parametro

function setupCardClick(htmlElementsArray, data) {
    htmlElementsArray.forEach((card, i) => {
        card.addEventListener("click", () => {
            img.src = data[i].url;
            overlay.classList.remove("none");
            img.classList.remove("none");
            body.classList.add("overflow-hidden");
        });
    })

}