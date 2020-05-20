function showAllButton() {
  for (let creature of creatures) {
    creature.visible = true
  }
  generateTableHead();
}

function hideAllButton() {
  for (let creature of creatures) {
    creature.visible = false
  }
  generateTableHead();
}

function hideCreature (ev) {
      creatures[ev.target.dataset.index].visible = false;
      generateTableHead();
    }
