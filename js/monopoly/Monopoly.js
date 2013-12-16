function Monopoly(){

    this.cup = new Cup();
    this.board = createBoard();

    function createBoard(){
        var precBox,
            currentBox,
            board = new Array(),
            position;

        precBox = new Box();
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 10; j++){
                position = 10 * i + j;
                if (j == 1 ||
                    j ==  3 ||
                    j ==  4 ||
                    j ==  6 ||
                    j ==  8 ||
                    j ==  9 ){
                    currentBox = new Property("Case" + position, 3 * position, position );
                }else {
                    currentBox = new Box("Case" + position)
                }

                board.push(currentBox);
                precBox.next = currentBox;
            }
        }
        board[0] = new Start();



        board[board.length - 1].next = board[0];

        return board;
    }
}