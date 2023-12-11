import { generate } from "./generate.js";
//init global variable
let isTileSelected = false; //is tile in sidoku puzzle is selected => boolean
let coordinate = "00" //string of tile's coordinate (00 is 0th row, 0th col) => string 

//init submit button
const sub_button = document.getElementById("submit-button");
sub_button.addEventListener('click',submit);

//init clue input & generate button
let clue_inp = document.getElementById('clue-input');
const gen_button = document.getElementById("generate-button");
gen_button.addEventListener('click',onGenerateClick);

let number=document.getElementById("number");




let puzzle = [
    [0,0,9,0,5,0,0,0,0],
    [0,0,0,0,0,0,7,0,6],
    [0,0,0,0,0,0,0,0,4],
    [4,7,0,0,0,0,6,0,0],
    [0,0,0,3,9,0,0,5,0],
    [0,0,0,8,0,0,0,0,0],
    [0,0,0,2,0,0,0,8,0],
    [6,1,0,0,0,0,0,0,0],
    [7,0,0,0,0,0,0,0,0]
];
let solution = [
    [2,6,9,7,5,4,8,1,3],
    [5,4,1,9,8,3,7,2,6],
    [8,3,7,6,1,2,5,9,4],
    [4,7,8,1,2,5,6,3,9],
    [1,2,6,3,9,7,4,5,8],
    [3,9,5,8,4,6,2,7,1],
    [9,5,4,2,6,1,3,8,7],
    [6,1,3,5,7,8,9,4,2],
    [7,8,2,4,3,9,1,6,5]
];



//init sudoku puzzle board
let table=document.getElementById("table");


function onGenerateClick(){
    table.classList.remove('hidden');
    number.classList.remove('hidden');
    sub_button.classList.remove('hidden');

    table.replaceChildren();
    [puzzle,solution] = generate(clue_inp.value);
    displayPuzzle(puzzle);
    //TODO: global solution;
}


function displayPuzzle(puzzle)
{
    for (let i=0; i<9; i++){ //add id and inside-div for each tile
        for (let j=0; j<9; j++){
            let tile = document.createElement('div');
            tile.className="tile";
            tile.id=i.toString()+j.toString();
    
            if (i==2 || i==5) tile.classList.add("bottom-line");
            else if (i==3 || i==6) tile.classList.add("top-line");
            
            if (j==2 || j==5) tile.classList.add("right-line");
            else if (j==3 || j==6) tile.classList.add("left-line");
    
            if (puzzle[i][j]!=0){
                tile.innerHTML=puzzle[i][j];
            }
            else {
                tile.addEventListener('click',function (){
                    onTileSelected(i.toString()+j.toString());
                    tile.classList.add('selected');
                });
                tile.classList.add('answer-tile');
                
            }
            table.appendChild(tile);
            
        }
    }
}


//display numPad under puzzle

for (let i=0; i<9; i++){
    let numPad = document.createElement('div');
    numPad.className="tile";
    numPad.innerHTML=i+1;
    numPad.addEventListener('click',function(){
        clickNumPad(i+1);
    });
    number.appendChild(numPad);
}



function onTileSelected(coor)
{
    let old_tile = document.getElementById(coordinate);
    old_tile.classList.remove('selected');
    coordinate=coor;
    isTileSelected=true;
    //console.log(coor);
}

function clickNumPad(num)
{
    let cur_tile = document.getElementById(coordinate);
    cur_tile.innerHTML = num;
    cur_tile.classList.remove('selected');
    isTileSelected = false;
}

function submit()
{
    let isCorrect=true
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            if (table.children[9*i + j].innerHTML!=solution[i][j]) {
                isCorrect=false;
                //console.log('>>'+i+','+j+' '+(table.children[9*i + j].innerHTML)+' and '+solution[i][j])
            }
        }
    }

    if (isCorrect) alert('Correct');
    else alert('wrong');
}

/////////////////////////////////////////////////////////////////////////
//key detection
document.addEventListener('keydown',function(event){
    if (event.key=="Backspace" && isTileSelected){
        let cur_tile = document.getElementById(coordinate);
        cur_tile.innerHTML = "";
        cur_tile.classList.remove('selected');
        isTileSelected = false;

    }
    else if (event.key-'0'>=1 && event.key-'0'<=9 && isTileSelected){
        clickNumPad(event.key-'0'); 
    }
});
