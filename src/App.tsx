import React, { useState } from "react";
import DailyContentCard from "./components/DailyContentCard";
import SelectedContent from "./components/SelectedContent";
import { calendarContent } from "./constants/calendarContent";

const App = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [selectedRect, setSelectedRect] = useState<DOMRect | null>(null);

  const handleSelected = (e: React.MouseEvent, index: number) => {
    setSelected(index);
    if (e.target instanceof Element) {
      setSelectedRect(e.target.getBoundingClientRect());
    }
  };
  
  const handleClose = () => {
    setSelected(-1);
    setSelectedRect(null);
  };

  return (<React.Fragment>
    <div className={"calendar" + (selectedRect && selected !== -1 ? " no-overflow" : "") }>
      {calendarContent.map((content, index) => <DailyContentCard 
        date={content.date}
        key={index}
        onClick={(e) => handleSelected(e, index)}
        show={selected !== index}
        verseLocation={content.verseLocation}
      />)}
    </div>
    {selectedRect && selected !== -1 && <SelectedContent 
      close={() => handleClose()} 
      content={calendarContent[selected]} 
      selectedRect={selectedRect} 
    />}
  </React.Fragment>);
}

export default App;
