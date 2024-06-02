import React from "react";

interface Count {
    count: number;
    refresh: () => void;
}
const Count:React.FC<Count> = (props) => {
    return (
        <>
            <div><h1>Tries: {props.count}</h1>
                <button onClick={props.refresh}>Reset</button>
            </div>
        </>
    );
};

export default Count;