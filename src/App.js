import React from 'react';
import './App.css';
import Block from './components/Block'

function App() {

  const blocks = [];
  for (let i = 0; i < 500 / 20; i++) {
    blocks[i] = [];
    for (let j = 0; j < 500 / 20; j++) {
      blocks[i].push(<Block key={j} />);
    }
  }

  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <div
        style={{
          width: `500px`,
          height: `500px`,
          border: `1px solid black`,
          margin: `0 auto`
        }}
      >
        {blocks.map((row, index) => (
          <div key={index} style={{ width: `100%`, lineHeight: 0}}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
