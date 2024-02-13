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

const Game = (() => {
    let currentPlayer = "X"; // Assume player X starts first

    const start = () => {
        // Reset the gameboard
        Gameboard.render();
        // Add event listeners to squares for player moves
        document.querySelectorAll(".square").forEach((square, index) => {
            square.addEventListener("click", () => {
                if (gameboard[index] === "") {
                    gameboard[index] = currentPlayer;
                    // Render the updated gameboard
                    Gameboard.render();
                    // Check for winner or switch player
                    if (checkWinner()) {
                        // Display winner message
                        document.querySelector("#message").textContent = `${currentPlayer} wins!`;
                    } else {
                        switchPlayer();
                    }
                }
            });
        });
    };
})();

const btnStart = document.querySelector("#start-game");
btnStart.addEventListener("click", ()=>{
    Game.start();
})
