

export default function calculateWinner(squares) {

    const winningRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winningComboIndex = null;

    for (let i = 0 ; i < winningRows.length ; i++) {
        const [a,b,c] = winningRows[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            winningComboIndex = [a,b,c];
            console.log(winningComboIndex)
            return squares[a]
            
        }
    }
    return null
}