const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) =>{
            square.addEventListener("click", Game.handleClick);
        });
    };

    return {
        render
    };

})();

const createPlayer = (name, marks) =>{
    return{
        name,
        marks
    }
}

const Game = (() => {

    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {

        players = [
            createPlayer(document.querySelector("#player1").value,"X"),
            createPlayer(document.querySelector("#player2").value,"O")
        ] 
        
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    };

    const handleClick = (event) => {
        let index = event.target.id.split("-")[1];
        console.log(index);
    }

    return {
        start,
        handleClick
    };

})();

const btnStart = document.querySelector("#start-game");
btnStart.addEventListener("click", ()=>{
    Game.start();
})
