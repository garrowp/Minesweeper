import React, { useState } from 'react';

export default ({ mine }) => {

    const [clicked, setClicked] = useState(false);
    const [shiftClicked, setShiftClicked] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(`#fff`);

    const handleClick = e => {
        if (e.shiftKey) {
            setShiftClicked(!shiftClicked);
            setClicked(false);
            setBackgroundColor(`rebeccapurple`);
        } else {
            setClicked(!clicked);
            setShiftClicked(false);
            setBackgroundColor(`lightblue`);
        }
    }

    return (
        <div
            style={{
                height: `50px`,
                width: `50px`,
                border: `1px solid black`,
                display: `inline-block`,
                boxSizing: `border-box`,
                background: mine ? `red` : backgroundColor,
                cursor: `pointer`
            }}

            onClick={handleClick}
        />
    )
}