let actions = [
  {
    name:'DELETE', 
    action: deleteIndex
  },
  {
    name:'EDIT', 
    action: editCreature
  }, 
  {
    name:'HIDE', 
    action: hideCreature
  },
  {
    name:'SAVE', 
    action: saveEdittedCreature
  }
  ];

//create table head
//Kevin: I've removed the parameters from this and generateTable because "table" and "creatures" are already accessible variables, and don't need to be passed in
function generateTableHead() {
  try {
      //Kevin: Before adding the table, we have to remove the old table, or else you get duplicates of the table each time you click the add button
      table.innerHTML = "";

      let thead = table.createTHead();
      let row = thead.insertRow();

      //Kevin: I'm grabbing the first creature in the array and then getting its keys since they didn't exist where you had declared "data" previously
      let columnHeaders = Object.keys(creatures[0]);

      //Kevin: This used to be "let key of creatures", but that would iterate through each creature in the creatures array, instead we can now iterate through the keys from the first creature to build the header row
      // and then iterated through each key of that one creature to make the table header
      for (let header of columnHeaders) {

        if (header !== "visible") {
          let th = document.createElement("th");
          th.setAttribute("class", "text-uppercase")

          let text = document.createTextNode(header);
          th.appendChild(text);
          row.appendChild(th);
        }
    }

    let th = document.createElement("th");
    th.setAttribute("class", "text-uppercase");

    let text = document.createTextNode("ACTIONS");
      th.appendChild(text);
      row.appendChild(th);

    makeTableSortable();

    //Then after creating the header, you need to call into generate Table to fill out the table itself
    generateTable();
  }
  catch (err) {
    console.error(err);
  }
}

//generate table from data in creatures array
function generateTable() {
  let body = table.createTBody();
  var creatureIndex = 0;
  //Kevin: I renamed this to "creature" for my own sanity
  for (let creature of creatures) {

      if (creature.visible === true) {

        let row = body.insertRow();

        for (propertyKey in creature) {

          if (propertyKey !== 'visible') {

          let cell = row.insertCell();
          let text = document.createTextNode(creature[propertyKey]);
          let textHolder = document.createElement("DIV");
          textHolder.setAttribute("class", "d-block textHolder text-capitalize");
          let editInput = document.createElement("INPUT");
          editInput.setAttribute("type", "text");
          editInput.setAttribute("value", creature[propertyKey]);
          editInput.setAttribute("class", "d-none editInput " + propertyKey);
          editInput.dataset.title = propertyKey;
          textHolder.appendChild(text);
          cell.appendChild(textHolder);
          cell.appendChild(editInput);
          }
        }

        let cell = row.insertCell();
        for (action of actions) {
          let btn = document.createElement('input');
          btn.type = "button";
          btn.className = "btn btn-secondary";
          btn.value = action.name;
          btn.dataset.index = creatureIndex;
          btn.onclick = action.action;
          cell.appendChild(btn);
        }
      }
    creatureIndex++;
    }
  }

