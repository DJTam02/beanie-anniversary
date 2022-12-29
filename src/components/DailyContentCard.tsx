import React from "react";
import ContentDisplay from "./ContentDisplay";

const DailyContentCard = (props: ChildProps) => {
    return (<div onClick={(e) => props.onClick(e)} className={"pointer full card " + (props.show ? "" : "bg")}>
        {props.show && <ContentDisplay verseLocation={props.verseLocation} date={props.date} />}
    </div>);
}

interface ChildProps {
    verseLocation: string;
    date: Date;
    onClick: (e: React.MouseEvent) => void;
    show: boolean;
}

export default DailyContentCard;