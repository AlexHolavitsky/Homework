

import React, { useState, useEffect } from 'react';

// Список смайликів для голосування
const emojiList = ['😀', '😂', '😍', '😎', '😢', '😡'];

const App = () => {
  // Ініціалізація стану для зберігання кількості голосів
  const [votes, setVotes] = useState(() => {
    // Отримуємо дані з localStorage, якщо вони є
    const savedVotes = localStorage.getItem('emojiVotes');
    return savedVotes ? JSON.parse(savedVotes) : emojiList.map(() => 0);
  });

  // Використовуємо useEffect для збереження голосів у localStorage
  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }, [votes]);

  // Обробка кліку на смайлик
  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  // Пошук смайлика, який переміг
  const getWinner = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    return emojiList[winnerIndex];
  };

  // Очищення результатів голосування
  const clearResults = () => {
    setVotes(emojiList.map(() => 0));
    localStorage.removeItem('emojiVotes');
  };

  return (
    <div className="container mt-4">
      <h1>Emoji Voting</h1>
      <div className="d-flex justify-content-around mb-4">
        {emojiList.map((emoji, index) => (
          <div key={index} className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleVote(index)}
            >
              {emoji}
            </button>
            <p>{votes[index]}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-success me-2" onClick={() => alert(`Переміг смайлик: ${getWinner()}`)}>
        Show Results
      </button>
      <button className="btn btn-danger" onClick={clearResults}>
        Очистити результати
      </button>
    </div>
  );
};

export default App;

