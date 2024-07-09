// some initial variables
const container = document.querySelector(".container");
nodeArray = [];

// creating the grid function
function createGrid(size){
    let widthHeight = size;
    let totalNodeCount = widthHeight * widthHeight;
    let nodeWidthHeight = 100/widthHeight;

    for (let i = 0; i < totalNodeCount; i++){
        const node = document.createElement("div");
        node.setAttribute("style",`background-color: white; width: ${nodeWidthHeight}%; height: ${nodeWidthHeight}%;`);
        container.appendChild(node)
        nodeArray.push(node);
    }
}

// deleting the grid function
function deleGrid(){
    nodeArray.forEach(deleteIt);
    nodeArray = [];

    function deleteIt(node){
        container.removeChild(node);
    }
}

// drawing functionality
function draw(){
    let opacity = 1;
    nodeArray.forEach(clickToDraw);
    let mouseHeld = false;

    function clickToDraw(node){
        node.addEventListener('mousedown', function(e){
            node.style.backgroundColor = `rgba(255,0,0,${opacity})`;
            mouseHeld = true;
        });

        node.addEventListener('mouseup', function(e){
            mouseHeld = false;
        });

        node.addEventListener('mouseover', function(e){
            if (mouseHeld == true){
                node.style.backgroundColor = `rgba(255,0,0,${opacity})`;     
            }
        });
    }
}

// first time loading the grid
createGrid(20);
draw();

// changing canvas size with user input
const button = document.querySelector(".button");

button.addEventListener('click', (e) => {
    active = true;
    size = prompt('What size canvas would you like? (Max: 100) ');

    if (size > 100 || size < 1){
        alert('Invalid size, click new canvas to try again');
        deleGrid();
        size = 1;
    }

    deleGrid();
    createGrid(size);
    draw();
})