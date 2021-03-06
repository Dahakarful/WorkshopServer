var express = require('express'),
    router = express.Router(),
    Board = require('./board.js'),
    Players = require('./players.js');

playerClass = new Players();
var player1 = playerClass.setPlayer("Jean");
var player2 = playerClass.setPlayer("Pierre");
//// ------------------------- Tenaille verticale de bas en haut ----------------------------
//console.log("---------------------Tenaille verticale de bas en haut------------------------");
//boardClass = new Board();
//boardClass.play(2, 5, player1.numPlayer);
//boardClass.play(3, 5, player2.numPlayer);
//boardClass.play(2, 6, player1.numPlayer);
//boardClass.play(4, 5, player2.numPlayer);
//boardClass.play(5, 5, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// -------------------------- Tenaille verticale de haut en bas -----------------------
//boardClass = new Board();
//console.log("----------------------Tenaille verticale de haut en bas--------------------");
//boardClass.play(5, 5, player1.numPlayer);
//boardClass.play(4, 5, player2.numPlayer);
//boardClass.play(2, 6, player1.numPlayer);
//boardClass.play(3, 5, player2.numPlayer);
//boardClass.play(2, 5, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " ==== 1");
//console.log("TenailleJ  2 " + boardClass.getNbTenaillesJ2() + "=== 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// -------------------------- Tenaille horizontale de gauche à droite --------------------
//boardClass = new Board();
//console.log("----------------------Tenaille horizontale de gauche à droite--------------------");
//boardClass.play(5, 5, player1.numPlayer);
//boardClass.play(5, 4, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(5, 3, player2.numPlayer);
//boardClass.play(5, 2, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// -------------------------- Tenaille horizontale de droite à gauche -------------------
//boardClass = new Board();
//console.log("----------------------Tenaille horizontale de droite à gauche--------------------");
//boardClass.play(5, 2, player1.numPlayer);
//boardClass.play(5, 3, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(5, 4, player2.numPlayer);
//boardClass.play(5, 5, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// ------------------------- Tenaille diagonale de bas gauche à haut droite --------------
//boardClass = new Board();
//console.log("----------------------Tenaille diagonale de bas gauche à haut droite--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(8, 10, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(7, 11, player2.numPlayer);
//boardClass.play(6, 12, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// ------------------------- Tenaille diagonale de bas droite à haut gauche --------------
//boardClass = new Board();
//console.log("----------------------Tenaille diagonale de bas droite à haut gauche--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(8, 8, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(7, 7, player2.numPlayer);
//boardClass.play(6, 6, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " ==== false");
//// ------------------------- Tenaille diagonale de haut droite à bas gauche --------------
//boardClass = new Board();
//console.log("----------------------Tenaille diagonale de haut droite à bas gauche--------------------");
//boardClass.play(6, 12, player1.numPlayer);
//boardClass.play(7, 11, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(8, 10, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// ------------------------- Tenaille diagonale de haut gauche à bas droite --------------
//boardClass = new Board();
//console.log("----------------------Tenaille diagonale de haut gauche à bas droite--------------------");
//boardClass.play(6, 6, player1.numPlayer);
//boardClass.play(7, 7, player2.numPlayer);
//boardClass.play(6, 2, player1.numPlayer);
//boardClass.play(8, 8, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("TenailleJ1 " + boardClass.getNbTenaillesJ1() + " === 1");
//console.log("TenailleJ2 " + boardClass.getNbTenaillesJ2() + " === 0");
//console.log("GameOver " + boardClass.getGameOver() + " === false");
//// ------------------------- Pente verticale de haut bas ------------------------
//boardClass = new Board();
//console.log("----------------------Pente verticale de haut bas--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(10, 9, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(11, 9, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(12, 9, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(13, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------- Pente verticale de bas haut ------------------------
//boardClass = new Board();
//console.log("----------------------Pente verticale de bas haut--------------------");
//boardClass.play(13, 9, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(12, 9, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(11, 9, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(10, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente horizontale de droite à gauche -----------------
//boardClass = new Board();
//console.log("----------------------Pente horizontale de droite à gauche--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 8, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(9, 7, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(9, 6, player1.numPlayer);
//boardClass.play(13, 5, player2.numPlayer);
//boardClass.play(9, 5, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente horizontale de gauche à droite -----------------
//boardClass = new Board();
//console.log("----------------------Pente horizontale de gauche à droite--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 10, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(9, 11, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(9, 12, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(9, 13, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente verticale avec dernier coup X -- OXOOO
//boardClass = new Board();
//console.log("----------------------Pente verticale avec dernier coup X -- OXOOO--------------------");
//boardClass.play(13, 9, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(11, 9, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(10, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(12, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente verticale avec dernier coup X -- OOXOOO
//boardClass = new Board();
//console.log("----------------------Pente verticale avec dernier coup X -- OOXOOO--------------------");
//boardClass.play(13, 9, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(12, 9, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(10, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(11, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente verticale avec dernier coup X -- OOXOOO
//boardClass = new Board();
//console.log("----------------------Pente verticale avec dernier coup X -- OOOXO--------------------");
//boardClass.play(13, 9, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(12, 9, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(11, 9, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 9, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente horizontale avec dernier coup OXOOO -----------------
//boardClass = new Board();
//console.log("----------------------Pente horizontale avec dernier coup OXOOO--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(9, 11, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(9, 12, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(9, 13, player1.numPlayer);
//boardClass.play(9, 10, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente horizontale avec dernier coup OOXOO -----------------
//boardClass = new Board();
//console.log("----------------------Pente horizontale avec dernier coup OOXOO--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 10, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(9, 12, player1.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(9, 13, player1.numPlayer);
//boardClass.play(9, 11, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ------------------------ Pente horizontale avec dernier coup OOXOO -----------------
//boardClass = new Board();
//console.log("----------------------Pente horizontale avec dernier coup OOOXO--------------------");
//boardClass.play(9, 9, player1.numPlayer);
//boardClass.play(10, 10, player2.numPlayer);
//boardClass.play(9, 10, player1.numPlayer);
//boardClass.play(11, 11, player2.numPlayer);
//boardClass.play(9, 11, player1.numPlayer);
//boardClass.play(12, 12, player2.numPlayer);
//boardClass.play(13, 13, player2.numPlayer);
//boardClass.play(9, 13, player1.numPlayer);
//boardClass.play(9, 12, player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log("GameOver " + boardClass.getGameOver() + " === true");
//// ----------------------- Jouer le 3ème coup -----------------------------
boardClass = new Board();
console.log("----------------------Jouer le 3ème coup--------------------");
boardClass.play(9, 9, player1.numPlayer);
boardClass.play(10, 10, player2.numPlayer);
boardClass.play(11, 11, player1.numPlayer);
console.log(boardClass.getBoard());