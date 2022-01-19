/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

function main() {
    const ENDPOINT = 'https://api.github.com/users';
    const btnEl = document.getElementById('btn');
    const outEl = document.getElementById('output');
    const messageEl = document.getElementById('message');
    
    btnEl.addEventListener('click', _=> {
        messageEl.remove();
        getUsers(ENDPOINT, outEl);
    });
} 
main();
async function getUsers(api, el) {
    try {
        const res = await (await fetch(api)).json();
        
        res.forEach((user) => {
            const divEl = document.createElement('div');
            const url = document.createElement('img');
            const login = document.createElement('h1');
            login.textContent = user.login;
            url.src = user.avatar_url;
            divEl.append(url);
            divEl.append(login);
            el.append(divEl);
        });
    } catch (e) {
        console.log(e)
    }
}