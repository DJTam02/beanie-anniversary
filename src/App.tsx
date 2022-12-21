import React, { useState } from "react";
import DailyContent from "./components/DailyContent";
import { calendarContent } from "./constants/calendarContent";

const App = () => {
  const [selected, setSelected] = useState<number>(-1);

  return (<div className="calendar">
    {calendarContent.map((content, index) => <DailyContent 
      content={content} 
      isSelected={index === selected}
      key={index}
      setSelected={() => setSelected(index)}
    />)}
  </div>);
}

export default App;
