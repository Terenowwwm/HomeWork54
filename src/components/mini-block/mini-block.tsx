import React from "react";

interface Props{
    click: () => void
    color: string;
}
const MiniBlock:React.FC<Props> = (props) => {
    return (
        <>
            <div className={"mini-block " + props.color} onClick={props.click}>
            </div>
        </>

    );
};

export default MiniBlock;