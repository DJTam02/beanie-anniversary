import React from "react";
import { getDisplayDate } from "../functions/date";

const ContentPreview = (props: ChildProps) => {
    return (<React.Fragment>
        <div className="verse-location-wrapper">
            {props.verseLocation}
        </div>
        <div>{getDisplayDate(props.date)}</div>
    </React.Fragment>)
};

interface ChildProps {
    date: Date;
    verseLocation: string;
}

export default ContentPreview;