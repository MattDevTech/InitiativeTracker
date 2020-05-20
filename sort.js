
let nameOrder = 0;
let initiativeOrder = 0;
let hpOrder = 0;
let statusOrder = 0;

function makeTableSortable() {

  th = document.getElementsByTagName('th');

  for(let headerName=0; headerName < th.length; headerName++){

      th[headerName].addEventListener('click', item);
  }
}

function item(event){
  console.log(event.target);
  sortCreatures();
}

function sortByNameButton() {
  creatures.sort(function(a, b){
    if (nameOrder % 2 == 0){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    }
    else {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return 1;}
      if (x > y) {return -1;}
      return 0;
    }
});
  generateTableHead(); 
  nameOrder++; 
}

function sortByInitiativeButton() {
  creatures.sort(function(a, b){
    if (initiativeOrder % 2 == 0){
      return b.initiative - a.initiative    
    }
    else {
      return a.initiative - b.initiative
    }
  });
  generateTableHead();
  initiativeOrder++;  
}

function sortByHPButton() {
  creatures.sort(function(a, b){
    if (hpOrder % 2 == 0){
      return b.hp - a.hp
    }
    else {
      return a.hp - b.hp
    }
  });
  generateTableHead();  
  hpOrder++;
}

function sortByStatusButton() {
  creatures.sort(function(a, b){
    if (statusOrder % 2 == 0){
      var x = a.conditions.toLowerCase();
      var y = b.conditions.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    }
    else {
      var x = a.conditions.toLowerCase();
      var y = b.conditions.toLowerCase();
      if (x < y) {return 1;}
      if (x > y) {return -1;}
      return 0;
    }
});
  generateTableHead();
  statusOrder++;
}