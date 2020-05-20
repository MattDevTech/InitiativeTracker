function editCreature(ev) {

  var trElement = ev.target.parentElement.parentElement; 

  var textHolderElement = trElement.getElementsByClassName('textHolder');

  for(var i = 0; i < textHolderElement.length; i++) {
  	textHolderElement[i].classList.toggle("d-block", false);
  	textHolderElement[i].classList.toggle("d-none", true);

  }

  var editInputElement = trElement.getElementsByClassName('editInput');

  for(var i = 0; i < editInputElement.length; i++) {
  	editInputElement[i].classList.toggle("d-block", true);
  	editInputElement[i].classList.toggle("d-none", false);
  }
}

function editCreatureAttributes (ev, edittedCreature){
  creatures.splice(ev.target.dataset.index, 1, edittedCreature)
} 

function saveEdittedCreature(ev) {
  var trElement = ev.target.parentElement.parentElement;
  var textHolderElements = trElement.getElementsByClassName('textHolder');
  var editInputElements = trElement.getElementsByClassName('editInput');

  let edittedCreature = {};

  for (var i = 0; i < editInputElements.length; i++) {
    let keyName = editInputElements[i].dataset.title;
    let value = editInputElements[i].value;

    edittedCreature[keyName] = value;
  }

  edittedCreature.visible = creatures[ev.target.dataset.index].visible;

  // let edittedCreature = {
  //   name: trElement.getElementsByClassName('name')[0].value,
  //   initiative: trElement.getElementsByClassName('initiative')[0].value,
  //   hp: trElement.getElementsByClassName('hp')[0].value,
  //   conditions: trElement.getElementsByClassName('conditions')[0].value,
  //   visible: true
  // }

  editCreatureAttributes(ev, edittedCreature);

  for(var i = 0; i < textHolderElements.length; i++) {
  	textHolderElements[i].classList.toggle("showme", true);
  	textHolderElements[i].classList.toggle("hideme", false);
  }

  for(var i = 0; i < editInputElements.length; i++) {
  	editInputElements[i].classList.toggle("showme", false);
  	editInputElements[i].classList.toggle("hideme", true);
  }

  generateTableHead();
}