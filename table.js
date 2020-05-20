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

function generateTableHead() {
  try {
     
      table.innerHTML = "";

      let thead = table.createTHead();
      let row = thead.insertRow();

      let columnHeaders = Object.keys(creatures[0]);

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

