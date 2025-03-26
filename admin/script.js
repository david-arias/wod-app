
console.log('init');

let mainUrl = 'http://localhost:3001/api/v20';


// GET SECTS
let AllSects;
async function getSects() {
    const url = `${mainUrl}/sects`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}
getSects().then(({ data }) => {
    AllSects = data;
    let sectHtml = ``;

    AllSects.forEach(element => {
        console.log(element);

        let tempHTML = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.desc}</p>
                </div>
            </div>
        </div>`;

        sectHtml += tempHTML;

    });

    let sectWrap = document.getElementById(`sectsWrpper`);
    sectWrap.innerHTML = sectHtml;


})


// GET Clans
let Allclans;
async function getclans() {
    const url = `${mainUrl}/clans`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}
getclans().then(({ data }) => {
    Allclans = data;
    let clanHtml = ``;

    Allclans.forEach(element => {
        console.log(element);

        let tempHTML = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Apodo: ${element.nickname}</p>
                    <p class="card-text">"${element.quote}"</p>
                </div>
            </div>
        </div>`;

        clanHtml += tempHTML;

    });

    let clanWrap = document.getElementById(`clansWrpper`);
    clanWrap.innerHTML = clanHtml;


})