import React, { useState } from "react";
import Block from "./Block";

export default ({ blocks }) => {
	const [flags, setFlags] = useState(15);

	return (
		<>
			Flags remaining: {flags}
			<div
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
							<Block
								{...block}
								flags={flags}
								setFlags={setFlags}
							/>
						))}
					</div>
				))}
			</div>
		</>
	);
};
