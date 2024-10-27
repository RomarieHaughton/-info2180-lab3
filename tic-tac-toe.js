document.addEventListener("DOMContentLoaded", () =>{
    const squares =document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    let activePlayer = "X";
    let gameWon =false;

    //winning combo
    const winningCombo=
    [
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6],
    ];

    //check for win
    function checkWinner (){
        return winningCombo.some(combination =>{
            const[a,b,c] = combination;
            return(
                squares[a].textContent === activePlayer &&
                squares[b].textContent === activePlayer &&
                squares[c].textContent === activePlayer
            );

        });
    }

    //reset game
    function resetGame(){
        squares.forEach(square => {
            square.textContent= "";
            square.classList.remove("X", "O");
        });

        status.textContent ="Move mouse over a square and click to play X or O"
        status.classList.remove("you-won");
        activePlayer= "X";
        gameWon= false;
    }


    squares.forEach((square,index) => {
        square.classList.add("square");

        //event click for adding "X" or "O"
        square.addEventListener("click", () => {
            if (square.textContent=== "" && !gameWon){
                square.textContent = activePlayer;
                square.classList.add(activePlayer);

                if(checkWinner()){
                    gameWon= true;
                    status.textContent = 'Congratulations! ${activePlayer} is the Winner!';
                    status.classList.add("you-won");
                } else{

                activePlayer = activePlayer === "X" ? "O" : "X";
                }
            }
        });
        //event for hover mouse effect
        square.addEventListener("mouseover",() => {
            if (square.textContent === ""){
                square.classList.add("hover");
            }
        });
        square.addEventListener("mouseleave", () =>{
            square.classList.remove("hover");
        });
    });

    //EventListener for new game button
    newGameButton.addEventListener("click", resetGame);

});