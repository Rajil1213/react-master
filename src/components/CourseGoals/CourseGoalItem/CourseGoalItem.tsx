import React, { PropsWithChildren, ReactNode } from "react";

import "./CourseGoalItem.css";

type CourseGoalItemProps = {
  id: string;
  children: ReactNode;
  onDelete: (id: string) => void;
};

const CourseGoalItem = ({
  id,
  onDelete,
  children,
}: PropsWithChildren<CourseGoalItemProps>) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li
      className="goal-item"
      onClick={deleteHandler}
    >
      {children}
    </li>
  );
};

export default CourseGoalItem;

