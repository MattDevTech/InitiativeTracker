//Kevin: For clarity I'm declaring these at the top of the file
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

    // // //for display purposes only
    // console.warn('added' , {creatures} );
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(creatures, '\t', 2);
}

//create table head
//Kevin: I've removed the parameters from this and generateTable because "table" and "creatures" are already accessible variables, and don't need to be passed in
function generateTableHead() {
  //Kevin: Before adding the table, we have to remove the old table, or else you get duplicates of the table each time you click the add button
  table.innerHTML = "";

  let thead = table.createTHead();
  let row = thead.insertRow();

  //Kevin: I'm grabbing the first creature in the array and then getting its keys since they didn't exist where you had declared "data" previously
  let data = Object.keys(creatures[0]);

  //Kevin: This used to be "let key of creatures", but that would iterate through each creature in the creatures array, instead we can now iterate through the keys from the first creature to build the header row
  // and then iterated through each key of that one creature to make the table header
  for (let key of data) {
    let th = document.createElement("th");

    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }

  //Then after creating the header, you need to call into generate Table to fill out the table itself
  generateTable();
}

//generate table from data in creatures array
function generateTable() {
  //Kevin: I renamed this to "creature" for my own sanity
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