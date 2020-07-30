const oldDiv = document.querySelector('.container');
const numOfDivs = 16;

//add 16 square divs in the first line
let cols = 0;
let rows = 0;
while (rows < numOfDivs){
    //create a container for each row
    let rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'rowContainer');
    rowContainer.classList.add('rowContainer');
    oldDiv.appendChild(rowContainer);

    //make the rows
    while (cols < numOfDivs){
        //insert the grids 
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grids-cols');
        newDiv.classList.add('grids-cols');
        rowContainer.appendChild(newDiv);
        cols++;
    }
    cols = 0;
    rows++;
}

