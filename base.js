let table = document.querySelector("table");
let creatures = [];

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addCreature);
  document.getElementById('btn').addEventListener('click', generateTableHead);
  document.getElementById('showAllCreatures').addEventListener('click', showAllButton);
  document.getElementById('hideAllCreatures').addEventListener('click', hideAllButton);
  document.getElementById('sortName').addEventListener('click', sortByNameButton);
  document.getElementById('sortInitiative').addEventListener('click', sortByInitiativeButton);
  document.getElementById('sortHP').addEventListener('click', sortByHPButton);
  document.getElementById('sortStatus').addEventListener('click', sortByStatusButton);
});