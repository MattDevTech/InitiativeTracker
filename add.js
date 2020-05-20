const addCreature = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let creature = {
        name: document.getElementById('creatureName').value,
        initiative: document.getElementById('creatureInit').value,
        hp: document.getElementById('creatureHp').value,
        conditions: document.getElementById('creatureConditions').value,
        race: document.getElementById('creatureRace').value,
        visible: true
    }

    creatures.push(creature); //append creature to creatures array
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
}