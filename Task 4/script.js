/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
function main() {
    const ENDPOINT = 'cars.json';
    document.addEventListener('DOMContentLoaded', () => {
        getData(ENDPOINT);
    });
}
main();

function getData(url) {
    const outEl = document.getElementById('output');
    fetch(url)
    .then(response => response.json())
    .then(res => {
        res.forEach((post) => {
            const divEl = document.createElement('div');
            const brandEl = document.createElement('h1');
            const modelEl = document.createElement('p');
            brandEl.textContent = post.brand;
            modelEl.textContent = post.models;
            divEl.append(brandEl);
            divEl.append(modelEl);
            outEl.append(divEl);
        })
    })
}