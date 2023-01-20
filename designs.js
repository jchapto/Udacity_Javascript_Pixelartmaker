
// Definition of variables of height, width and button submission, to use later listening to events.
const selectedHeight = document.getElementById('inputHeight');
const selectedWidth = document.getElementById('inputWidth');
const buttonSubmitted = document.getElementById('submitButton');
// When the submit button is clicked, the makegrid function is called to create the grid.
buttonSubmitted.addEventListener('click', function (event) {
  // Prevent default is used to prevent the page from refreshing.
  event.preventDefault();
  makeGrid();
});




function makeGrid() {
// first we clear the old grid, before creating the new one.
  const canvas = document.getElementById("pixelCanvas");
  canvas.innerHTML="";
  // then we loop using the values of height and width chosen by the user that we have in the variables we declared to create the new grid

  for(i = 0; i < selectedHeight.value; i++) {
    let table = document.getElementById("pixelCanvas");
    let row = table.insertRow(i);
    for(j = 0; j < inputWidth.value; j++) {
      let cell = row.insertCell(j);
        // Once we create the grid, we listen to the event of click inside the cell, to change its color.
      cell.addEventListener('click', function(event){
        let color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      });

    }
  }

}
