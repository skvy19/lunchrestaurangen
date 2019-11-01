const div = document.querySelector('div');
const btn = document.querySelector('button');

const now = moment().day();

const showMenu = (dish, url, text) => {
 
    div.insertAdjacentHTML('beforeend', `
        <div class="card mt-3" style="width: 20rem;">
            <img src="${url}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${dish.toUpperCase()}</h5>
                <p class="card-text">${text}.</p>
                <button class="btn btn-secondary float-right" onclick="hideMenu()" >Ok</button>
            </div>
        </div>
    `);

    btn.hidden = true;

};

const hideMenu = () => {

    btn.hidden = false;
    div.lastElementChild.remove();
    
}

let url;
let text;
btn.onclick = () => {
    
    switch (now) {
        case 1:

            url = './img/pizza.png';
            text = 'En lyxigare pizza med paprikapesto, rödlök, paprika och krämig mozzarella.';
            showMenu('pizza', url, text);
            break;

        case 2:

            url = './img/pasta.png';
            text = 'En klassisk vardagsrätt i klimatsmart tappning.';
            showMenu('spagetti och köttfärssås', url, text);
            break;

        case 3:

            url = './img/bullar.png';
            text = 'Hemgjorda köttbullar som serveras med gräddsås, potatismos och lingonsylt';
            showMenu('kötbullar & potatismos', url, text);
            break;

        case 4:

            url = './img/soppa.png';
            text = 'Ärtsoppa toppad med senap och serverad med pannkakor bredvid. Gottigottgott!';
            showMenu('ärtsoppa & pannkakor', url, text);
            break;

        case 5:

            url = './img/hamburgare.png';
            text = 'En klassik burgare på 113g av svenskt nötkött som serveras med bland annat hamburgerdressing och sallad.';
            showMenu('hamburgare', url, text);
            break;

        default:

            div.insertAdjacentHTML('beforeend', `
                <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                    På lördag och söndag är det stängt!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `);

            btn.hidden = false;

      };

      
};
