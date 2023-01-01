import { Content } from "../types/content";

const FullContent = (props: ChildProps) => {
    return (<div className="content-wrapper">
        <h1 className="content-title">{props.content.title}</h1>
        <p className="content-message">{props.content.message}</p>
        <div className="content-verse">
            <p>{props.content.verse}</p>
            <p>- {props.content.verseLocation}</p>
        </div>
    </div>)
};

interface ChildProps {
    content: Content
}

export default FullContent;