import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import Goal from "../../../models/Goal";
import "./CourseGoalList.css";

type CourseGoalListProps = {
  items: Goal[];
  onDeleteItem: (id: string) => void;
};

const CourseGoalList = ({ items, onDeleteItem }: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => {
        return (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;

