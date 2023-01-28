import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

const App = () => {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const dummyItems = useMemo(() => [1, 4, 6, 2, 3], []);

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput
        show={showPara}
        title="My List"
        items={dummyItems}
      />
      <Button
        type="button"
        className=""
        onClick={toggleParaHandler}
        disabled={false}
      >
        Show Paragraph!
      </Button>
      <Button
        type="button"
        className=""
        onClick={allowToggleHandler}
        disabled={false}
      >
        Allow Toggle
      </Button>
    </div>
  );
};

export default App;
