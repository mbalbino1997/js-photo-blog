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
const appendCard = document.getElementById("appendCard");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");
let posts;
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(res => {
        res.data.forEach((post) => {
            const { url, title, } = post;
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

        const cards = document.querySelectorAll(".card");
        const img = document.getElementById("img");
        cards.forEach((card,i) => {

            card.addEventListener("click",() => {
                img.src=res.data[i].url;
                overlay.classList.remove("none");
                img.classList.remove("none");
                body.classList.add("overflow-hidden");
            });
        } )
    })
    .catch(err => {
        console.error(err);
    })

    btnClose.addEventListener("click",() => {
        overlay.classList.add("none");
        img.classList.add("none");
        body.classList.remove("overflow-hidden");
    })
    overlay.addEventListener("click", () => {
        overlay.classList.add("none");
        img.classList.add("none");
        body.classList.remove("overflow-hidden");
    })
