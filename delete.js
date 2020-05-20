function deleteIndex(ev) {
		creatures.splice(ev.target.dataset.index, 1);
		generateTableHead();
}