let table = document.querySelector("table");
let creatures = [];

const addCreature = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let creature = {
        name: document.getElementById('creatureName').value,
        initiative: document.getElementById('creatureInit').value,
        hp: document.getElementById('creatureHp').value,
        conditions: document.getElementById('creatureConditions').value
    }

    creatures.push(creature); //append creature to creatures array
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
  }

//create table head
function generateTableHead() {
  
  table.innerHTML = "";

  let thead = table.createTHead();
  let row = thead.insertRow();

  
  let data = Object.keys(creatures[0]);

  for (let key of data) {
    let th = document.createElement("th");

    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  generateTable();
}

//generate table from data in creatures array
function generateTable() {
  
  for (let creature of creatures) {
    let row = table.insertRow();
    for (key in creature) {
      let cell = row.insertCell();
      let text = document.createTextNode(creature[key]);
      cell.appendChild(text);
    }
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addCreature);
  document.getElementById('btn').addEventListener('click', generateTableHead);
});