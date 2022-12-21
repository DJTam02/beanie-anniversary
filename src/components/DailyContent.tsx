import React from "react";
import { Content } from "../types/content";

const DailyContent = (props: ChildProps) => {
    const displayOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const getDisplayDate = (date: Date): string => {
        return date.toLocaleDateString("en-US", displayOptions);
    };

    return (<div className="content-container">
        <div className={(props.isSelected ? "selected" : "") + " content"}>
            {getDisplayDate(props.content.date)}
        </div>
    </div>);
}

interface ChildProps {
    content: Content;
    isSelected: boolean;
    setSelected: () => void;
}

export default DailyContent;