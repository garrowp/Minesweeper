import React from "react";
import "./App.css";
// import Block from "./components/Block";
import Grid from "./components/Grid";

function App() {
	// const [flags, setFlags] = useState(15);

	const blocks = [];
	let mines = 15;
	for (let i = 0; i < 500 / 50; i++) {
		blocks[i] = [];
		for (let j = 0; j < 500 / 50; j++) {
			blocks[i].push({
				key: j,
				mine: false,
				number: null,
			});
		}
    }
    
    while (mines > 0) {
        let row = Math.floor(Math.random() * (500 / 50));
        let col = Math.floor(Math.random() * (500 / 50));
        if (!blocks[row][col].mine) {
            blocks[row][col].mine = true;
            mines--;
        }
    }

	// for (let i = 0; i < mines; i++) {
	// 	let row = Math.floor(Math.random() * (500 / 50));
    //     let col = Math.floor(Math.random() * (500 / 50));
    //     if (blocks[row][col].mine) {

    //     }
	// 	blocks[row][col].mine = true;
	// }

	blocks.forEach((row, rowIndex) => {
		row.forEach((block, blockIndex) => {
			if (!block.mine) {
				let counter = 0;

				// Previous row
				if (
					blocks[rowIndex - 1] &&
					blocks[rowIndex - 1][blockIndex] &&
					blocks[rowIndex - 1][blockIndex].mine
				) {
					counter++;
				}
				if (
					blocks[rowIndex - 1] &&
					blocks[rowIndex - 1][blockIndex - 1] &&
					blocks[rowIndex - 1][blockIndex - 1].mine
				) {
					counter++;
				}
				if (
					blocks[rowIndex - 1] &&
					blocks[rowIndex - 1][blockIndex + 1] &&
					blocks[rowIndex - 1][blockIndex + 1].mine
				) {
					counter++;
				}

				// Current row
				if (
					blocks[rowIndex] &&
					blocks[rowIndex][blockIndex - 1] &&
					blocks[rowIndex][blockIndex - 1].mine
				) {
					counter++;
				}
				if (
					blocks[rowIndex] &&
					blocks[rowIndex][blockIndex + 1] &&
					blocks[rowIndex][blockIndex + 1].mine
				) {
					counter++;
				}

				// Next row
				if (
					blocks[rowIndex + 1] &&
					blocks[rowIndex + 1][blockIndex] &&
					blocks[rowIndex + 1][blockIndex].mine
				) {
					counter++;
				}
				if (
					blocks[rowIndex + 1] &&
					blocks[rowIndex + 1][blockIndex - 1] &&
					blocks[rowIndex + 1][blockIndex - 1].mine
				) {
					counter++;
				}
				if (
					blocks[rowIndex + 1] &&
					blocks[rowIndex + 1][blockIndex + 1] &&
					blocks[rowIndex + 1][blockIndex + 1].mine
				) {
					counter++;
				}

				if (counter > 0) {
                    block.number = counter;
                }
			}
		});
	});

	return (
		<div className="App">
			<h1>Minesweeper</h1>
            {/* Flags remaining: {flags} */}
            <Grid blocks={blocks} />
			{/* <div
				style={{
					width: `500px`,
					height: `500px`,
					border: `1px solid black`,
					margin: `0 auto`
				}}
			>
				{blocks.map((row, index) => (
					<div
						key={index}
						style={{
							width: `100%`,
							lineHeight: 0,
							display: `flex`
						}}
					>
						{row.map(block => (
							<Block {...block} flags={flags} setFlags={setFlags} />
						))}
					</div>
				))}
			</div>             */}
		</div>
	);
}

export default App;
