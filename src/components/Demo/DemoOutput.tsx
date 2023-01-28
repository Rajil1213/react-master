import React, { useMemo } from "react";

interface DemoOutputProps {
  items: number[];
  show: boolean;
  title: string;
}

const DemoOutput = ({ show, items, title }: DemoOutputProps) => {
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Running Demo Output...");
  // return <p>{show ? "This is new!" : ""}</p>;
  return (
    <div>
      {show && <h2> {title}</h2>}
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoOutput;
