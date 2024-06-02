import React from "react";

interface Count {
    count: number
}
const Count:React.FC<Count> = (props) => {
    return (
        <>
            <div>{props.count}</div>
        </>
    );
};

export default Count;