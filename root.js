var express = require('express'),
    router = express.Router(),
    Board = require('./board.js'),
    Players = require('./players.js');

// Initialisation des varriables
var boardClass;
var playerClass;
var playerTurn;
var nameTeam = '1404bres';

// Test
//boardClass = new Board();
//playerClass = new Players();
//var player1 = playerClass.setPlayer("Jean");
//var player2 = playerClass.setPlayer("Pierre");
//console.log(playerClass.getPlayer1());
//console.log(playerClass.getPlayer2());
//console.log(boardClass.getPlayerTurn());
//boardClass.play(2,5,player1.numPlayer);
//boardClass.play(3,5,player2.numPlayer);
//boardClass.play(2,6,player1.numPlayer);
//boardClass.play(4,5,player2.numPlayer);
//boardClass.play(5,5,player1.numPlayer);
//boardClass.play(8,5,player2.numPlayer);
//boardClass.play(2,8,player1.numPlayer);
//boardClass.play(6,5,player2.numPlayer);
//boardClass.play(2,9,player1.numPlayer);
//console.log(boardClass.getBoard());
//console.log(boardClass.getNbTenaillesJ1());
//console.log(boardClass.getNbTenaillesJ2())


//--------------------------------- CONNECTION ---------------------------------------
router.get('/connect/:joueurName', function (req, res) {
    console.log('GET /connect/:groupName');
    var playerName = req.params.joueurName;
    var json = {};
    // Initialiser le board
    if (boardClass === undefined) {
        boardClass = new Board();
        var board = boardClass.getBoard();
        console.log(board);
    }
    // Initialiser les joueurs
    if (playerClass === undefined) {
        playerClass = new Players();
    }

    var player = playerClass.setPlayer(playerName);

    console.log(playerClass.getPlayer1());
    console.log(playerClass.getPlayer2());

    if (player != undefined) {
        var json = {
            idJoueur: player.idPlayer,
            code: 200,
            nomJoueur: playerName,
            numJoueur: player.numPlayer
        };
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        });
    } else {
        json.errorAccess = "Non autorise ou la partie est deja en cours";
        res.writeHead(401, {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        });
    }
    res.end(JSON.stringify(json));
});

//--------------------- JOUER LE COUP SUIVANT -------------------------------------------
router.get('/play/:x/:y/:idJoueur', function (req, res) {
    var x = req.params.x;
    var y = req.params.y;
    var playerId = req.params.idJoueur;
    var json = {};

    try {
        var player = playerClass.findPlayer(playerId);
    } catch (e) {
        json.errorPlayer = "Pas de joueur avec l'ID demande";
        json.code = 401;
    }
    try {
        if (boardClass.getPlayerTurn() === player.numPlayer) {
            var havePlayed = boardClass.play(x, y, player.numPlayer);
            if (!havePlayed) {
                json.errorLocation = "Il y a deja un pion présent sur ces coordonnees !";
                json.code = 406;
            } else {
                json.code = 200;
            }
            var board = boardClass.getBoard();
            console.log(board);
        }else{
            json.errorPlayer = "Ce n'est pas a vous de jouer !";
        }
    } catch (e) {
        json.errorBoard = "Le board n'est pas initialise ! ";
    }

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(json));
});

//----------------------------- A QUI DE JOUER ------------------------------------------
router.get('/turn/:idJoueur', function (req, res) {
    var playerId = req.params.idJoueur;
    var player = playerClass.findPlayer(playerId);
    var json = {};
//    console.log(boardClass.getPlayerTurn());
    if(!boardClass.getGameOver()){
        if (boardClass.getPlayerTurn() === player.numPlayer) {
            json = {
                status: 1,
                tableau: boardClass.getBoard(),
                nbTenaillesJ1: boardClass.getNbTenaillesJ1(),
                nbTenaillesJ2: boardClass.getNbTenaillesJ2(),
                dernierCoupX: boardClass.getLastStepX(),
                prolongation: boardClass.getProlongation(),
                finPartie: boardClass.getGameOver(),
                detailFinPartie: boardClass.getDetailGameOver(),
                numTour: boardClass.getNumTurn(),
                code: 200,
                errorTurn: ""
            }
        } else {
            json = {
                status: 0,
                tableau: boardClass.getBoard(),
                nbTenaillesJ1: boardClass.getNbTenaillesJ1(),
                nbTenaillesJ2: boardClass.getNbTenaillesJ2(),
                dernierCoupX: boardClass.getLastStepX(),
                prolongation: boardClass.getProlongation(),
                finPartie: boardClass.getGameOver(),
                detailFinPartie: boardClass.getDetailGameOver(),
                numTour: boardClass.getNumTurn(),
                code: 200,
                errorTurn: "Ce n'est pas a vous de jouer"
            }
        }
    }else{
        json = {
                status: 0,
                tableau: boardClass.getBoard(),
                nbTenaillesJ1: boardClass.getNbTenaillesJ1(),
                nbTenaillesJ2: boardClass.getNbTenaillesJ2(),
                dernierCoupX: boardClass.getLastStepX(),
                prolongation: boardClass.getProlongation(),
                finPartie: boardClass.getGameOver(),
                detailFinPartie: boardClass.getDetailGameOver(),
                numTour: boardClass.getNumTurn(),
                code: 200,
                errorTurn: "Partie termine !"
            }
    }
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });

    res.end(JSON.stringify(json));
});

router.get('/viderPlateau', function (req, res) {
    var json = {};
    json.success = "Plateau vide !";
    boardClass.init();
    playerClass.init();
    json.J1 = playerClass.getPlayer1();
    json.J2 = playerClass.getPlayer2();
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(json));
});

module.exports = router;