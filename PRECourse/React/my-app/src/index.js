import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  const backgroundColor = {
    backgroundColor: "yellow",
  };

  return (
    <button
      className="square"
      onClick={props.onClick}
      style={props.winningSquare ? backgroundColor : null}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    let winningSquare =
      this.props.winnerSquares && this.props.winnerSquares.includes(i)
        ? true
        : false;
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winningSquare={winningSquare}
      />
    );
  }

  render() {
    let boardSquare = [];
    for (let row = 0; row < 3; row++) {
      let boardRow = [];
      for (let column = 0; column < 3; column++) {
        boardRow.push(
          <span key={row * 3 + column}>
            {this.renderSquare(row * 3 + column)}
          </span>
        );
      }
      boardSquare.push(
        <div className="board-row" key="row">
          {boardRow}
        </div>
      );
    }

    return <div>{boardSquare}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          movePosition: 0,
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      ascending: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);

    if (winner || squares[i]) {
      if (!winner) {
        alert('Draw');
        return;
      }
      return;
    }

    const position = this.calculatePosition(i);

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          movePosition: position,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  calculateDraw(squares) {
  }

  calculatePosition(step) {
    let col;
    if (step % 3 === 0) {
      col = 1;
    } else if (step % 3 === 1) {
      col = 2;
    } else col = 3;

    let row;
    if (step === 0 || step === 1 || step === 2) {
      row = 1;
    } else if (step === 3 || step === 4 || step === 5) {
      row = 2;
    } else row = 3;

    return "(" + col + ", " + row + ")";
  }

  toggleSort() {
    this.setState({
      ascending: !this.state.ascending,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const active = {
      fontWeight: "bold",
    };

    const inactive = {
      fontWeight: "normal",
    };

    const moves = history.map((step, move) => {
      const description = move
        ? "Go to move #" + move + history[move].movePosition
        : "Go to game start";
      return (
        <li key={move}>
          <button
            style={this.state.stepNumber === move ? active : inactive}
            onClick={() => this.jumpTo(move)}
          >
            {description}
          </button>
        </li>
      );
    });
    const status = winner
      ? "Winner: " + winner.winner
      : "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              winnerSquares={winner && winner.winnerSquares}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{this.state.ascending ? moves : moves.reverse()}</ol>
          </div>
        </div>
        <div>
          <button onClick={() => this.toggleSort()}>Sort moves</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winnerSquares: lines[i],
      };
    }
  }

  return null;
}