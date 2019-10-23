import React from "react";
import "./App.css";
import Block from "./components/Block";

function App() {
	const blocks = [];
	let mines = 15;
	for (let i = 0; i < 500 / 50; i++) {
		blocks[i] = [];
		for (let j = 0; j < 500 / 50; j++) {
			// let mine = false;
			// if (mines > 0 && Math.floor(Math.random() * 2)) {
			// 	mine = true;
			// 	mines--;
			// }
			blocks[i].push({
				key: j,
				mine: false
			});
		}
    }
    
    for (let i = 0; i < mines; i++) {
        let row = Math.floor(Math.random() * (500 / 50));
        let col = Math.floor(Math.random() * (500 / 50));
        blocks[row][col].mine = true;
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
					<div key={index} style={{ width: `100%`, lineHeight: 0 }}>
						{row.map((block) => <Block {...block} />)}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
