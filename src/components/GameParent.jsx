import Board from "./Board";
import { useState } from "react";
import calculateWinner from "../helper/calculateWinner";

export default function GameParent() {

  
    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(newSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });


    function onRestartGame(){
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0)
    }


    return (
      <div className="game">

        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} indices={currentMove}/>
        </div>

        <div className="game-info">
          <ol>{moves}</ol>
        </div>

        <div className="new-game">
           { (currentMove === 9 || calculateWinner(currentSquares)) ?
           <button onClick={onRestartGame}> Restart Game </button> : null}
        </div>

      </div>
    );
  }