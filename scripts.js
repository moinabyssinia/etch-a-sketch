const oldDiv = document.querySelector('.container');
const numOfDivs = 16;

//add 16 square divs in the first line
let cols = 0;
let rows = 0;
while (cols < numOfDivs){
    //make the rows
    while (rows < numOfDivs){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grids-rows');
        newDiv.classList.add('grids-rows');
        oldDiv.appendChild(newDiv);
        rows++;
    }

}

