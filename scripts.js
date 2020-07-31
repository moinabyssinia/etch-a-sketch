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


//add hovering event listener
//use forEach to select each grid div
let gridColumns = document.querySelectorAll('.grids-cols');
gridColumns.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        element.style.backgroundColor = changeColor();
    })
})

// change the background to random color
const changeColor = function(){
    return `rgb(${generateNumbers()}, ${generateNumbers()}, ${generateNumbers()})`
}
const generateNumbers = function(){
    return Math.ceil(Math.random()*255);
}

//create a disco of lights
gridColumns.forEach(function(element){
    setInterval(function(){
        element.style.backgroundColor = changeColor();
    }, 1000);
})