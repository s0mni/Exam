/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function main () {
    const formEl = document.getElementById('form');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = event.target
        .querySelector("#search").value;
        !isNaN(inputValue) && inputValue != ""? displayValues(inputValue) : alert("Please recheck your input");
    });
}
main();

function displayValues(input) {
    const divEl = document.getElementById('output');
    const tableEl = document.createElement('table');
    const headRow = document.createElement('tr');
    const headCell = document.createElement('th');
    const resultRow = document.createElement('tr');
	const lbCell = document.createElement('td');
	const gCell = document.createElement('td');
	const ozCell = document.createElement('td');
    headCell.textContent = input + 'kg =';
    headCell.colSpan = 3;
    lbCell.textContent = input * 2.2046 + 'lb';
    gCell.textContent = input / 0.0010000 + 'g';
    ozCell.textContent = input * 35.274 + 'oz';
    headRow.append(headCell);
    resultRow.append(lbCell);
    resultRow.append(gCell);
    resultRow.append(ozCell);
    tableEl.append(headRow);
    tableEl.append(resultRow);
    divEl.append(tableEl);
};