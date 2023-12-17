const page_puzzle = document.getElementById("puzzle-page");
const page_solver = document.getElementById("solver-page");
const play_sudoku = document.getElementById("play-sudoku");


const nav_puzzle = document.getElementById("nav-puzzle");
const nav_solver = document.getElementById("nav-solver");

nav_puzzle.addEventListener('click',function (){
    page_puzzle.classList.remove('hidden');
    nav_puzzle.classList.add('current-nav');
    page_solver.classList.add('hidden');
    nav_solver.classList.remove('current-nav');
});

nav_solver.addEventListener('click',function (){
    page_solver.classList.remove('hidden');
    nav_solver.classList.add('current-nav');
    page_puzzle.classList.add('hidden');
    nav_puzzle.classList.remove('current-nav');
    play_sudoku.classList.add('hidden');
});