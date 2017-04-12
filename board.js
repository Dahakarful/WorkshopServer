var Board = function () {
        this.board = [];
        this.numTurn = 0;
        this.nbTenaillesJ1 = 0;
        this.nbTenaillesJ2 = 0;
        this.gameOver = false;
        this.detailGameOver = {};
        this.lastStepX = 0;
        this.lastStepY = 0;
        this.prolongation = false;
        this.playerTurn = playerTurn = (Math.floor(Math.random() * 2) + 1);
        this.init();
    }
    // Initiliser l'instance
Board.prototype.init = function () {
        var number = 19;
        var newBoard = [];
        for (var i = 0; i < number; i++) {
            newBoard[i] = [];
            for (var j = 0; j < number; j++) {
                newBoard[i][j] = 0;
            }
        }
        this.board = newBoard;
    }
    // Jouer sur une case
Board.prototype.play = function (x, y, numPlayer) {
    var bool = false;
    var win = false;
    // Ne pas modifier la case si elle n'est pas vide
    if (this.board[x][y] === 0) {
        this.board[x][y] = numPlayer;
        this.setPlayerTurn();
        this.setNumTurn();
        bool = true;
        if (this.numTurn > 5) {
//            var win = checkPenteHorizontal(x, y, numPlayer, this.board);
            console.log(win);
            if (win) {
                this.gameOver = true;
            }
        }
    }
    return bool;
}
var checkTenaille = function (x, y, idJoueur) {
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 19; j++) {

        }
    }
}
var checkPenteHorizontal = function (x, y, numPlayer, board) {
    var nbJeton = 0;
    var win = false;
    var oldX = x;
    var oldY = y;
    if (board[x][y + 1] === numPlayer && board[x][y + 2] === numPlayer && board[x][y + 3] === numPlayer && board[x][y + 4] === numPlayer) {
        win = true;
    } else if (board[x][y - 1] === numPlayer && board[x][y - 2] === numPlayer && board[x][y - 3] === numPlayer && board[x][y - 4] === numPlayer) {
        win = true;
    } else if (board[x][y - 1] === numPlayer && board[x][y + 1] === numPlayer && board[x][y + 2] === numPlayer && board[x][y + 3] === numPlayer) {
        win = true;
    } else if (board[x][y - 2] === numPlayer && board[x][y - 1] === numPlayer && board[x][y + 1] === numPlayer && board[x][y + 2] === numPlayer) {
        win = true;
    } else if (board[x][y - 3] === numPlayer && board[x][y -2] === numPlayer && board[x][y - 1] === numPlayer && board[x][y + 1] === numPlayer) {
        win = true;
    }
    if (!win) {
        win = checkPenteVertical(oldX, oldY, numPlayer, board);
    }
    return win;
}
var checkPenteVertical = function (x, y, numPlayer, board) {
        var nbJeton = 0;
        var win = false;
        var oldX = x;
        var oldY = y;
        if (board[x + 1][y] === numPlayer && board[x + 2][y] === numPlayer && board[x + 3][y] === numPlayer && board[x + 4][y] === numPlayer) {
            win = true;
        } else if (board[x - 1][y] === numPlayer && board[x - 2][y] === numPlayer && board[x - 3][y] === numPlayer && board[x - 4][y] === numPlayer) {
            win = true;
        } else if (board[x - 1][y] === numPlayer && board[x + 1][y] === numPlayer && board[x + 2][y] === numPlayer && board[x + 3][y] === numPlayer) {
            win = true;
        } else if (board[x - 2][y] === numPlayer && board[x - 1][y] === numPlayer && board[x + 1][y] === numPlayer && board[x + 2][y] === numPlayer) {
            win = true;
        } else if (board[x - 3][y] === numPlayer && board[x - 2][y] === numPlayer && board[x - 1][y] === numPlayer && board[x + 1][y] === numPlayer) {
            win = true;
        }
//        if (!win) {
//            win = checkPenteDiagonal(x, y, numPlayer);
//        }
        return win;
    }
    //----------------------GETTERS SETTERS ---------------------------------
    // Changer le tour du joueur qui doit jouer
Board.prototype.setPlayerTurn = function () {
        if (this.playerTurn === 1) {
            this.playerTurn = 2;
        } else {
            this.playerTurn = 1;
        }
    }
    // Retourner le numero du joueur qui doit jouer
Board.prototype.getPlayerTurn = function () {
        return this.playerTurn;
    }
    // Retourner le plateau de jeu
Board.prototype.getBoard = function () {
    return this.board;
}
Board.prototype.setBoard = function (x, y, numPlayer) {
    this.board[x][y] = numPlayer;
}
Board.prototype.getNbTenaillesJ1 = function () {
    return this.nbTenaillesJ1;
}
Board.prototype.setNbTenaillesJ1 = function () {
    this.nbTenaillesJ1++;
}
Board.prototype.getNbTenaillesJ2 = function () {
    return this.nbTenaillesJ2;
}
Board.prototype.setNbTenaillesJ2 = function () {
    this.nbTenaillesJ2++;
}
Board.prototype.getNumTurn = function () {
    return this.numTurn;
}
Board.prototype.setNumTurn = function () {
    this.numTurn++;
}
Board.prototype.getGameOver = function () {
    return this.gameOver;
}
Board.prototype.setGameOver = function () {
    this.gameOver = true;
}
Board.prototype.getDetailGameOver = function () {
    return this.detailGameOver;
}
Board.prototype.setDetailGameOver = function (detailGameOver) {
    this.detailGameOver = detailGameOver;
}
Board.prototype.getLastStepX = function () {
    return this.lastStepx;
}
Board.prototype.setLastStepX = function (x) {
    this.lastStepX = x;
}
Board.prototype.setLastStepY = function () {
    return this.lastStepY;
}
Board.prototype.setLastStepY = function (y) {
    this.lastStepY = y;
}
Board.prototype.getProlongation = function () {
    return this.prolongation;
}
module.exports = Board;