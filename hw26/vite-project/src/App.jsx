import React, { useState, useEffect } from 'react';

// Список смайликов для голосования
const emojiList = ['😀', '😊', '😎', '🤩', '😍'];

const EmojiVoting = () => {
  // Инициализация состояния для голосов
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('emojiVotes');
    return savedVotes ? JSON.parse(savedVotes) : emojiList.map(() => 0);
  });

  const [winner, setWinner] = useState(null);
  const [maxVotes, setMaxVotes] = useState(0);

  // Обновление localStorage при изменении голосов
  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }, [votes]);

  // Обработка клика по смайлику для голосования
  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  // Определение победителя
  const showResults = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    setWinner(emojiList[winnerIndex]);
    setMaxVotes(maxVotes);
  };

  // Очистка результатов голосования
  const clearResults = () => {
    setVotes(emojiList.map(() => 0));
    setWinner(null);
    setMaxVotes(0);
    localStorage.removeItem('emojiVotes');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Голосование за лучший смайлик</h1>
      <div className="d-flex justify-content-around mb-4">
        {emojiList.map((emoji, index) => (
          <div key={index} className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleVote(index)}
              style={{ fontSize: '2em' }}
            >
              {emoji}
            </button>
            <p>{votes[index]}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-success me-2" onClick={showResults}>
        Show Results
      </button>
      <button className="btn btn-danger" onClick={clearResults}>
        Очистить результаты
      </button>
      {winner && (
        <div className="mt-4 text-center">
          <h3>Результаты голосования:</h3>
          <p>Победитель:</p>
          <div style={{ fontSize: '3em' }}>{winner}</div>
          <p>Количество голосов: {maxVotes}</p>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
