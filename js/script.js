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
let posts;
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=12")
    .then(res => {
        res.data.forEach(post => {
            const { url, title } = post;
            appendCard.innerHTML +=
                `<div class="col">
                    <div class="card">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <figure>
                            <img class="testImg" src="${url}" alt="">
                        </figure>
                         <p>${title}</p>
                    </div>
                </div>`

        });
    })
    .catch(err => {
        console.error(err);
    })
