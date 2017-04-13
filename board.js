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
        this.playerTurn = 0;
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
    var tenaille;
    // Ne pas modifier la case si elle n'est pas vide
    if (this.board[x][y] === 0) {
        this.board[x][y] = numPlayer;
        this.setPlayerTurn();
        this.setNumTurn();
        this.setLastStepX(x);
        this.setLastStepY(y);
        bool = true;
        win = checkPenteHorizontal(x, y, numPlayer);
        if (!win) {
            var tenaille = checkTenaille(x, y, numPlayer, this.board);
            if (!tenaille.tenaille) {
                //var win = checkPenteHorizontal(x, y, numPlayer, this.board);
            } else {
                if (numPlayer === 1) {
                    this.nbTenaillesJ1++;
                    if (this.nbTenaillesJ1 === 5) {
                        this.gameOver = true;
                    }
                } else {
                    this.nbTenaillesJ2++;
                    if (this.nbTenaillesJ2 === 5) {
                        this.gameOver = true;
                    }
                }
                this.board[tenaille.p1.x][tenaille.p1.y] = 0;
                this.board[tenaille.p2.x][tenaille.p2.y] = 0;
            }
        }
        console.log(win);
        if (win) {
            this.gameOver = true;
        }
    }
    return bool;
}
var checkPenteHorizontal = function (x, y, numPlayer, board) {
    var win = false;
    if (board[x][y + 1] === numPlayer) {
        if (board[x][y + 2] === numPlayer) {
            if (board[x][y + 3] === numPlayer) {
                if (board[x][y + 4]) {
                    win = true;
                }
            }
        }
    } else if (board[x][y - 1] === numPlayer) {
        if (board[x][y - 2] === numPlayer) {
            if (board[x][y - 3] === numPlayer) {
                if (board[x][y - 4] === numPlayer) {
                    win = true;
                }
            }
        }
    } else if (board[x][y - 1] === numPlayer) {
        if (board[x][y + 1] === numPlayer) {
            if (board[x][y + 2] === numPlayer) {
                if (board[x][y + 3] === numPlayer) {
                    win = true;
                }
            }
        }
    } else if (board[x][y - 2] === numPlayer) {
        if (board[x][y - 1] === numPlayer) {
            if (board[x][y + 1] === numPlayer) {
                if (board[x][y + 2] === numPlayer) {
                    win = true;
                }
            }
        }
    } else if (board[x][y - 3] === numPlayer) {
        if (board[x][y - 2] === numPlayer) {
            if (board[x][y - 1] === numPlayer) {
                if (board[x][y + 1] === numPlayer) {
                    win = true;
                }
            }
        }
    }
    if (!win) {
        win = checkPenteVertical(x, y, numPlayer, board);
    }
    return win;
}
var checkPenteVertical = function (x, y, numPlayer, board) {
    var win = false;
    if (board[x + 1][y] === numPlayer) {
        if (board[x + 2][y] === numPlayer) {
            if (board[x + 3][y] === numPlayer) {
                if (board[x + 4]][y]) {
                win = true;
            }
        }
    }
} else if (board[x - 1][y] === numPlayer) {
    if (board[x + 1][y] === numPlayer) {
        if (board[x + 2][y] === numPlayer) {
            if (board[x + 3]][y]) {
            win = true;
        }
    }
}
} else if (board[x - 2][y] === numPlayer) {
    if (board[x - 1][y] === numPlayer) {
        if (board[x + 1][y] === numPlayer) {
            if (board[x + 2]][y]) {
            win = true;
        }
    }
}
} else if (board[x - 3][y] === numPlayer) {
    if (board[x - 2][y] === numPlayer) {
        if (board[x - 1][y] === numPlayer) {
            if (board[x + 1]][y]) {
            win = true;
        }
    }
}
} else if (board[x - 4][y] === numPlayer) {
    if (board[x - 3][y] === numPlayer) {
        if (board[x - 2][y] === numPlayer) {
            if (board[x - 1]][y]) {
            win = true;
        }
    }
}
}
if (!win) {
    win = checkPenteDiagonal(x, y, numPlayer, board);
}
return win;
}
var checkPenteDiagonal = function (x, y, numPlayer, board) {
    var win = false;
    if (board[x + 1][y + 1] === numPlayer) {
        if (board[x + 2][y + 2] === numPlayer) {
            if (board[x + 3][y + 3] === numPlayer) {
                if (board[x + 4]][y + 4]) {
                win = true;
            }
        }
    } else if (board[x - 1][y - 1] === numPlayer) {
        if (board[x - 2][y - 2] === numPlayer) {
            if (board[x - 3][y - 3] === numPlayer) {
                if (board[x - 4]][y - 4]) {
                win = true;
            }
        }
    } else if (board[x - 1][y - 1] === numPlayer) {
        if (board[x + 1][y + 1] === numPlayer) {
            if (board[x + 2][y + 2] === numPlayer) {
                if (board[x + 3]][y + 3]) {
                win = true;
            }
        }
    }
} else if (board[x - 2][y - 2] === numPlayer) {
    if (board[x - 1][y - 1] === numPlayer) {
        if (board[x + 1][y + 1] === numPlayer) {
            if (board[x + 2]][y + 2]) {
            win = true;
        }
    }
} else
if (board[x - 3][y - 3] === numPlayer) {
    if (board[x - 2][y - 2] === numPlayer) {
        if (board[x - 1][y - 1] === numPlayer) {
            if (board[x + 1][y + 1]) {
                win = true;
            }
        }
    }
}
return win;
}
var checkTenaille = function (x, y, numPlayer, board) {
        var tenaille = false;
        var numPlayerEnnemy;
        var pionToDelete = {};
        pionToDelete.tenaille = false;
        pionToDelete.p1 = {};
        pionToDelete.p2 = {};
        if (numPlayer === 1) {
            numPlayerEnnemy = 2;
        } else {
            numPlayerEnnemy = 1;
        }
        if (board[x][y + 1] === numPlayerEnnemy) {
            if (board[x][y + 2] === numPlayerEnnemy) {
                if (board[x][x + 3] === numPlayer) {
                    pionToDelete.p1.x = x;
                    pionToDelete.p1.y = y + 1;
                    pionToDelete.p2.x = x;
                    pionToDelete.p2.y = y + 2;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x][y - 1] === numPlayerEnnemy) {
            if (board[x][y - 2] === numPlayerEnnemy) {
                if (board[x][y - 3] === numPlayer) {
                    pionToDelete.p1.x = x;
                    pionToDelete.p1.y = y - 1;
                    pionToDelete.p2.x = x;
                    pionToDelete.p2.y = y - 2;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x + 1][y] === numPlayerEnnemy) {
            if (board[x + 2][y] === numPlayerEnnemy) {
                if (board[x + 3][y] === numPlayer) {
                    pionToDelete.p1.x = x + 1;
                    pionToDelete.p1.y = y;
                    pionToDelete.p2.x = x + 2;
                    pionToDelete.p2.y = y;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x - 1][y] === numPlayerEnnemy) {
            if (board[x - 2][y] === numPlayerEnnemy) {
                if (board[x - 3][y] === numPlayer) {
                    pionToDelete.p1.x = x - 1;
                    pionToDelete.p1.y = y;
                    pionToDelete.p2.x = x - 2;
                    pionToDelete.p2.y = y;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x - 1][y - 1] === numPlayerEnnemy) {
            if (board[x - 2][y - 2] === numPlayerEnnemy) {
                if (board[x - 3][y - 3] === numPlayer) {
                    pionToDelete.p1.x = x - 1;
                    pionToDelete.p1.y = y - 1;
                    pionToDelete.p2.x = x - 2;
                    pionToDelete.p2.y = y - 2;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x + 1][y + 1] === numPlayerEnnemy) {
            if (board[x + 2][y + 2] === numPlayerEnnemy) {
                if (board[x + 3][y + 3] === numPlayer) {
                    pionToDelete.p1.x = x + 1;
                    pionToDelete.p1.y = y + 1;
                    pionToDelete.p2.x = x + 2;
                    pionToDelete.p2.y = y + 2;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x - 1][y + 1] === numPlayerEnnemy) {
            if (board[x - 2][y + 2] === numPlayerEnnemy) {
                if (board[x - 3][y + 3] === numPlayer) {
                    pionToDelete.p1.x = x - 1;
                    pionToDelete.p1.y = y + 1;
                    pionToDelete.p2.x = x - 2;
                    pionToDelete.p2.y = y + 2;
                    pionToDelete.tenaille = true;
                }
            }
        } else if (board[x + 1][y - 1] === numPlayerEnnemy) {
            if (board[x + 2][y - 2] === numPlayerEnnemy) {
                if (board[x + 3][y - 3] === numPlayer) {
                    pionToDelete.p1.x = x + 1;
                    pionToDelete.p1.y = y - 1;
                    pionToDelete.p2.x = x + 2;
                    pionToDelete.p2.y = y - 2;
                    pionToDelete.tenaille = true;
                }
            }
        }
        return pionToDelete;
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
Board.prototype.setRandomPlayerTurn = function () {
        this.playerTurn = (Math.floor(Math.random() * 2) + 1);
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