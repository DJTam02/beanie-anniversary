import React from "react";
import { getDisplayDate } from "../functions/date";

const LockedContent = (props: ChildProps) => {
    return (<React.Fragment>
        <div className="image-wrapper">
            <img className="heart-image" src="./heart.png"></img>
            <img className="lock-image" src="./lock.png"></img>
        </div>
        <div>{getDisplayDate(props.date)}</div>
    </React.Fragment>)
};

interface ChildProps {
    date: Date;
}

export default LockedContent;