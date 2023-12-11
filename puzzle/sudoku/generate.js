////////////////////////////////////////////////////////////////////////////
//Theory:
//  The minimum clues possible is 17 clues.
//  The minimum clues for any grid is 21 clues.
//  The maximum clues to guarantee a unique solution is 40 clues => delete at least 81-40 = 41 //wtf wrong how omg fuck
////////////////////////////////////////////////////////////////////////////


function generate(clue=30)
{
    let [puzzle,solution] = solveThenClue(clue);
    //console.log(puzzle);
    //console.log(solution);
    return [puzzle,solution];
}
function solveThenClue(clue) //clue=30 is consedebly fast enough
{
    let solutionArr;
    let puzzle = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];
    
    //3 diagonal sections of sudoku puzzle are independent to each other
    //For each section, insert randomly shuffled array[1-9]
    for (let itr=0; itr<3; itr++){
        let numArr=[1,2,3,4,5,6,7,8,9];
        for (let index=0; index<9; index++){
            let rand_index = Math.floor(Math.random()*9); //index 0-8
            let temp=numArr[index];
            numArr[index]=numArr[rand_index];
            numArr[rand_index]=temp;
        }
        let itrs = 3*itr;
        puzzle[ itrs ][ itrs ]=numArr[0];
        puzzle[ itrs ][itrs+1]=numArr[1];
        puzzle[ itrs ][itrs+2]=numArr[2];
        puzzle[itrs+1][ itrs ]=numArr[3];
        puzzle[itrs+1][itrs+1]=numArr[4];
        puzzle[itrs+1][itrs+2]=numArr[5];
        puzzle[itrs+2][ itrs ]=numArr[6];
        puzzle[itrs+2][itrs+1]=numArr[7];
        puzzle[itrs+2][itrs+2]=numArr[8];
    }

    while (true){
        let rand_row = Math.floor(Math.random()*9);
        let rand_col = Math.floor(Math.random()*9);
        let num = Math.floor(Math.random()*9)+1;
        if (isValid(puzzle,num,rand_row,rand_col) && puzzle[rand_row][rand_col]==0){
            puzzle[rand_row][rand_col]=num;
        }
        solutionArr = new Array();

        let puzzleCopied = new Array();
        for (let i=0; i<9; i++){
            puzzleCopied.push([...puzzle[i]]);
        }

        solver(puzzleCopied,solutionArr);
        if (solutionArr.length==0) puzzle[rand_row][rand_col]=0;
        else if (solutionArr.length==1) {
            break;
        }

    }
    //Now, we get a random sudoku grid
    ////////////////////////////////////////////////////
    // let puzzleCopied = new Array();
    //     for (let i=0; i<9; i++){
    //         puzzleCopied.push([...puzzle[i]]);
    //     }
    // console.log(puzCopied);
    ////////////////////////////////////////////////////
    let real_board;
    while (true){
        let count=0;
        real_board = new Array();
        for (let i=0; i<9; i++){
            real_board.push([...solutionArr[0][i]]);
        }

        while (count<81-clue){
            let rand_row = Math.floor(Math.random()*9);
            let rand_col = Math.floor(Math.random()*9);
            if (real_board[rand_row][rand_col]!=0) {
                real_board[rand_row][rand_col]=0;
                count++;
            }
        }
        let real_board_copied =new Array();
        let solutionArrTemp = new Array();
        for (let i=0; i<9; i++){
            real_board_copied.push([...real_board[i]]);
        }
        solver(real_board_copied,solutionArrTemp);
        if (solutionArrTemp.length==1){
            break;
        }
    }

    return [real_board,solutionArr[0]];
}




function isValid(puzzle,input,row,col)
{
    for (let itr=0; itr<9; itr++){
        if (puzzle[row][itr]==input || puzzle[itr][col]==input) return false;
    }
    let bigRow = Math.floor(row/3);
    let bigCol = Math.floor(col/3);
    for (let itr=0; itr<3; itr++){
        if (puzzle[3*bigRow+itr][3*bigCol]==input || puzzle[3*bigRow+itr][3*bigCol+1]==input || puzzle[3*bigRow+itr][3*bigCol+2]==input){
            return false;
        }
    }
    return true;
}


//before calling function, init puzzle & solutionArr first.
//return true if there is/are solutions. After calling function, main() checks whether there is single solution or not.
function solver(puzzle,solutionArr,itr=0)
{
    let row=Math.floor(itr/9);
    let col=itr%9;
    while (itr<=80){ //limit for puzzle row/col
        row=Math.floor(itr/9);
        col=itr%9;
        if (puzzle[row][col]==0) break;
        else itr++;
    }
    

    if (itr>=81){
        //copy puzzle array into solution array.
        let puzzleCopied = new Array();
        for (let i=0; i<9; i++){
            puzzleCopied.push([...puzzle[i]]);
        }
        solutionArr.push(puzzleCopied);
        //console.log(solutionArr);
        return true;
    }
    //console.log(itr+" : "+row+","+col);
    for (let num=1; num<10; num++){ //1-9
        if (isValid(puzzle,num,row,col)){
            puzzle[row][col]=num;
            let res = solver(puzzle,solutionArr,itr+1); 
            //true  => complete, check if there is one solution or more than one. 
            //false => found invalid move, proceed to next number.

            if (res && solutionArr.length>=2){ 
                //if there is >=2 solutions, stop all process and chained-return to main()
                //bypass last part of func
                return true;
            }
        }
    }
    if (itr==0){
        return solutionArr.length==1 //if there exists a solution => return true    //else => return false;
    }
    else {
        //delete value in current cell before returning false
        puzzle[row][col]=0;
        return false;
    }
}






//////////////////////////////////////////////////////////
export {generate};