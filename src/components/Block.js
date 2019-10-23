import React, { useState } from 'react';

export default () => {

    const [clicked, setClicked] = useState(false);

    return (
        <div
            style={{
                height: `20px`,
                width: `20px`,
                border: `1px solid black`,
                display: `inline-block`,
                boxSizing: `border-box`,
                background: clicked ? `rebeccapurple` : `#fff`,
                cursor: `pointer`
            }}

            onClick={() => setClicked(!clicked) }
        />
    )
}