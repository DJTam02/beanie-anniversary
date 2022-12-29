import { useCookies } from "react-cookie";
import { getDateString } from "../functions/date";
import ContentPreview from "./ContentPreview";
import LockedContent from "./LockedContent";

const ContentDisplay = (props: ChildProps) => {
    const dateString = getDateString(props.date);

    const [cookies] = useCookies([dateString]);

    return <div className="content">
        {cookies[dateString] ? <ContentPreview date={props.date} verseLocation={props.verseLocation} /> : <LockedContent date={props.date} />}
    </div>
}

interface ChildProps {
    date: Date;
    verseLocation: string;
}

export default ContentDisplay;