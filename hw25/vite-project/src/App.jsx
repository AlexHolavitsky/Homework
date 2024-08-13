import React, { Component } from 'react';

const emojiList = ['😀', '😊', '😎', '🤩', '😍'];

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    const savedVotes = JSON.parse(localStorage.getItem('emojiVotes')) || emojiList.map(() => 0);
    this.state = {
      votes: savedVotes,
      winner: null,
      maxVotes: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index]++;
    this.setState({ votes: newVotes });
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.votes);
    const winnerIndex = this.state.votes.indexOf(maxVotes);
    this.setState({
      winner: emojiList[winnerIndex],
      maxVotes: maxVotes,
    });
  };

  clearResults = () => {
    const resetVotes = emojiList.map(() => 0);
    this.setState({
      votes: resetVotes,
      winner: null,
      maxVotes: 0,
    });
    localStorage.removeItem('emojiVotes');
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center">Голосування за найкращий смайлик</h1>
        <div className="d-flex justify-content-around mb-4">
          {emojiList.map((emoji, index) => (
            <div key={index} className="text-center">
              <button
                className="btn btn-outline-primary"
                onClick={() => this.handleVote(index)}
                style={{ fontSize: '2em' }}
              >
                {emoji}
              </button>
              <p>{this.state.votes[index]}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-success me-2" onClick={this.showResults}>
          Show Results
        </button>
        <button className="btn btn-danger" onClick={this.clearResults}>
          Очистити результати
        </button>
        {this.state.winner && (
          <div className="mt-4 text-center">
            <h3>Результати голосування:</h3>
            <p>Переможець:</p>
            <div style={{ fontSize: '3em' }}>{this.state.winner}</div>
            <p>Кількість голосів: {this.state.maxVotes}</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
