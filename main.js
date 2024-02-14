const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });
        document.querySelector("#gameboard").innerHTML = boardHTML;
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

})();

const btnStart = document.querySelector("#start-game");
btnStart.addEventListener("click", ()=>{
    Game.start();
})
