import React from "react";

const Box = ({ id, width, height, color, removeBox }) => {

    return (
        <>
            <div
                key={id}
                style={{
                    width: `${width}rem`,
                    height: `${height}rem`,
                    backgroundColor: color,
                    margin: "0.5rem",
                    display: "inline-block"
                }}
            >

            </div>
            <button onClick={() => removeBox(id)}>X</button>
        </>
    )

}

export default Box;