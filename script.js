const container = document.querySelector(".container");


let grid = 16;

for (let i = 0; i < grid*grid; i++) {
    const div = document.createElement("div");
    div.classList.add("new")
    container.appendChild(div);

}
addAnimation();


function recreateGrid(grid) {
    // Select all div elements with the class 'my-class'
    const divs = document.querySelectorAll('.new');

    // Loop through the NodeList and remove each div
    divs.forEach(div => div.remove());


    for (let i = 0; i < grid*grid; i++) {
        const div = document.createElement("div");
        div.classList.add("new")
        container.appendChild(div);

    }
    addAnimation();
}

function addAnimation() {
    const gridItems = document.querySelectorAll('.new');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
            setTimeout(() => item.classList.remove('hovered'), 200); // Trail effect
        });
    });

}



function newGrid() {


    const MIN_SQUARES = 1;
    const MAX_SQUARES = 60;
    squares = prompt(`Enter number of squares on each side (${MIN_SQUARES}-${MAX_SQUARES}):`);
    grid = parseInt(squares);
    recreateGrid(grid);
    const newDivs = document.querySelectorAll('.new');
    const newWidth = ((672-2*grid))/grid + 'px';
    console.log(`New width for grid items: ${newWidth}`);
    
        
    // Loop through each element and change the width
    newDivs.forEach(div => {
        div.style.width = newWidth; // Set the new width value
        div.style.height = newWidth;
    });

    
}

var newButton = document.getElementById("newGrid");

newButton.addEventListener("click", newGrid); 