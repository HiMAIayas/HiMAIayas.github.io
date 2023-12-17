let s_coordinate="s00";
let s_isTileSelected=false;

//init table for solver-page
let solver_table = document.getElementById('solver-table');
for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){
        let s_tile = document.createElement('div');
        s_tile.className="tile answer-tile";
    }
}

function S_onTileSelected(coordinate){
    
}