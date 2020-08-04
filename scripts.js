let numOfDivs;
let cols = 0;
let rows = 0;
let currentRGB;
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
    numOfDivs = Number(prompt("How many squares do you want per side?", 10));
    cols = 0;
    rows = 0;
    buildGrids();
    oldDiv.style.display = 'inline';

    //add hovering event listener
    let gridColumns = document.querySelectorAll('.grids-cols');

    gridColumns.forEach(function(element){
        let hoverCount = 0;
        element.addEventListener('mouseenter', function(){
            //change to random color on first pass
            if (hoverCount === 0){
                currentRGB = [generateNumbers(), generateNumbers(), generateNumbers()];
                element.style.backgroundColor = `rgb(${currentRGB[0]}, ${currentRGB[1]}, 
                    ${currentRGB[2]})`;
                console.log(hoverCount++);
            }
            //make it black on the 10th pass
            else if (hoverCount === 9){
                element.style.backgroundColor = 'rgb(0, 0, 0)';
            }
            else {
                //add 10% of black with every hover;
                console.log(hoverCount++);
                console.log(currentRGB);
                currentRGB = [currentRGB[0]*0.9, currentRGB[1]*0.9, currentRGB[2]*0.9];
                element.style.backgroundColor = `rgb(${currentRGB[0]}, ${currentRGB[1]}, 
                    ${currentRGB[2]})`;
            }
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

