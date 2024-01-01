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
let play_puzzle=document.getElementById("play-sudoku"); //inline-flex
let sol = document.getElementById("solution");


let puzzle = [];
let solution = [];



//init sudoku puzzle board
let table=document.getElementById("table");


function onGenerateClick(){
    sol.classList.add("hidden");
    play_puzzle.classList.remove('hidden');
    isTileSelected=false
    coordinate="00";

    table.replaceChildren(); //reset puzzle board
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
    numPad.className="numpad";
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
    if (isTileSelected){
        let cur_tile = document.getElementById(coordinate);
        cur_tile.innerHTML = num;
    }
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
    else {
        showSolution();
        alert('wrong');
    }
}

function showSolution()
{
    let sol_table = document.getElementById("table-solution");
    sol_table.replaceChildren();

    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            let tile = document.createElement('div');
            let ans_tile = document.getElementById(i.toString()+j.toString());

            tile.className = 'tile';

            if (i==2 || i==5) tile.classList.add("bottom-line");
            else if (i==3 || i==6) tile.classList.add("top-line");
            
            if (j==2 || j==5) tile.classList.add("right-line");
            else if (j==3 || j==6) tile.classList.add("left-line");

            tile.innerHTML = solution[i][j];
            if (ans_tile.innerHTML!=solution[i][j]) tile.classList.add('wrong-ans');

            sol_table.appendChild(tile);
            
        }
    }
    sol.classList.remove('hidden');
}

/////////////////////////////////////////////////////////////////////////
//key detection
document.addEventListener('keydown',function(event){
    if (event.key=="Backspace" && isTileSelected){
        let cur_tile = document.getElementById(coordinate);
        cur_tile.innerHTML = "";

    }
    else if (event.key-'0'>=1 && event.key-'0'<=9 && isTileSelected){
        clickNumPad(event.key-'0'); 
    }
});
