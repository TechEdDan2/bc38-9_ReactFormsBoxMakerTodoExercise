import React, { useState } from "react";
import { v4 as uuid4 } from 'uuid';
import Box from "./Box";
import BoxMakerForm from "./BoxMakerForm";


const Boxes = () => {
    const INIT_STATE = [
        { id: uuid4(), width: "4", height: "2", color: "red" },
        { id: uuid4(), width: "3", height: "3", color: "purple" }
    ]

    const [boxes, setBoxes] = useState(INIT_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid4() }]);
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter((box) => box.id !== id));
    };

    return (
        <div>
            <BoxMakerForm addBox={addBox} />
            <div>
                {boxes.map(({ id, width, height, color }) =>
                    <Box
                        id={id}
                        width={width}
                        height={height}
                        color={color}
                        key={id}
                        removeBox={removeBox}
                    />)
                }
            </div >
        </div>
    )

}

export default Boxes;