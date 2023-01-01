import React from "react";
import { useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { getDateString, isAfter } from "../functions/date";
import { Content } from "../types/content";
import ContentDisplay from "./ContentDisplay";
import FullContent from "./FullContent";

const SelectedContent = (props: ChildProps) => {
    const dateString = getDateString(props.content.date);

    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [transitionFinished, setTransitionFinished] = useState<boolean>(false);

    const [cookies, setCookie] = useCookies([dateString]);

    useEffect(() => {
        setLoaded(true);
        setTimeout(() => {
            setTransitionFinished(true)
        }, 1000);
    }, []);

    const open = () => {
        if (isAfter(new Date(), props.content.date)) 
            setCookie(dateString, true);
    };

    const style = isLoaded ? {} : { 
        top: props.selectedRect.top, 
        left: props.selectedRect.left,
        width: props.selectedRect.width,
        height: props.selectedRect.height 
    }

    const backgroundClass = "transition pointer" + (isLoaded ? " selected-wrapper" : "");
    const contentClass = "transition border " + (isLoaded ? " selected-content" : "");

    return (<React.Fragment>
        <div className={backgroundClass} onClick={props.close}></div>
        <div className={contentClass} style={style}>
            {cookies[dateString] && <FullContent content={props.content} />}
            <div className="display-wrapper transition pointer" onClick={open} style={cookies[dateString] ? { maxHeight: "0px" } : {}}>
                <div style={{ minHeight: transitionFinished ? "calc(70vh - 40px)" : "", height: "100%" }}>
                    <ContentDisplay verseLocation={props.content.verseLocation} date={props.content.date} />
                </div>
            </div>
        </div>
    </React.Fragment>)
};

interface ChildProps {
    content: Content;
    selectedRect: DOMRect;
    close: () => void;
}

export default SelectedContent;