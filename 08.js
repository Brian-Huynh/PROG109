function addItem() {
  
  // Create a new element and store it in a variable.
  
  var newItem = document.getElementById("itemAdd").value
  var newEl = document.createElement('li');
  var newText = document.createTextNode(newItem);

  newEl.appendChild(newText);

  var position = document.getElementsByTagName('ul')[0];
  
  position.appendChild(newEl);  
  
}
