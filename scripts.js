let numOfDivs;
let cols = 0;
let rows = 0;
const oldDiv = document.querySelector('.container');
const startButton = document.querySelector('.start-button');


//add functionality to the button
startButton.addEventListener('click', function(){
    //refresh the screen
    let rowContainer = document.querySelectorAll('.rowContainer');
    rowContainer.forEach(function(element){
        element.remove();
    })
    
    //prompt for number of squares
    numOfDivs = Number(prompt("How many squares do you want per side?"));
    cols = 0;
    rows = 0;
    buildGrids();
    oldDiv.style.display = 'inline';

    //add hovering event listener
    let gridColumns = document.querySelectorAll('.grids-cols');

    gridColumns.forEach(function(element){
        element.addEventListener('mouseenter', function(){
            element.style.backgroundColor = changeColor();
        });
        // tried adding a css class on mouseout but didnt work
        element.addEventListener('mouseout', function(){
            setTimeout(function(){
                element.style.backgroundColor = 'rgb(238, 226, 61)';
            }, 500);
        });
    })
})



const buildGrids = function(){
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
}


// change the background to random color
const changeColor = function(){
    return `rgb(${generateNumbers()}, ${generateNumbers()}, ${generateNumbers()})`
}
const generateNumbers = function(){
    return Math.ceil(Math.random()*255);
}

