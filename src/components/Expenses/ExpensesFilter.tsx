import React, { PropsWithChildren, SyntheticEvent } from "react";

import "./ExpensesFilter.css";

type expensesFilterProps = {
  onYearSelect: (year: string) => void;
  selectedYear: string;
};

const ExpensesFilter = ({
  onYearSelect,
  selectedYear,
}: PropsWithChildren<expensesFilterProps>) => {
  const selectYearHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const selectElement = e.target as HTMLInputElement;
    onYearSelect(selectElement.value);
    console.log("New selection: ", selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          onChange={selectYearHandler}
          value={selectedYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

