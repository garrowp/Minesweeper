import React, { useState } from 'react';

export default ({ mine, number, flags, setFlags }) => {

    const [clicked, setClicked] = useState(false);
    const [shiftClicked, setShiftClicked] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(`#fff`);
    const [showNumber, setShowNumber] = useState(false);

    const handleClick = e => {
        setClicked(!clicked);
        setShiftClicked(false);
        setBackgroundColor(mine ? `red` : `lightblue`);
        setShowNumber(true);
    }

    const handleShiftClick = () => {
        setShiftClicked(!shiftClicked);
        setClicked(false);
        setBackgroundColor(!shiftClicked ? `rebeccapurple` : `#fff`);
        shiftClicked ? setFlags(flags + 1) : setFlags(flags - 1);
    }

    return (
        <div
            style={{
                height: `50px`,
                width: `50px`,
                border: `1px solid black`,
                display: `inline-flex`,
                justifyContent: `center`,
                alignItems: `center`,
                boxSizing: `border-box`,
                background: backgroundColor,
                cursor: !clicked ? `pointer` : `default`,
            }}

            onClick={e => {
                if (!clicked) {
                    e.shiftKey ? handleShiftClick() : handleClick();
                }  
            }}
        >
            {showNumber && number}
        </div>
    )
}