const WIDTH = 4;
const HEIGHT = 3;

function createBoard(){
    const board = [];

    for (let i = 0; i < HEIGHT; i++){
    board[i] = [];

        for (let j = 0; j < WIDTH; j++){
            board [i][j] = 0;
        }
    }

    return board;
}

const board = createBoard;
createBoard();