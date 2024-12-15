type Task = {
  id: number;
  title: string;
  description: string;
  deadine: string;
};

import React from "react";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h2 className="font-bold text-lg">{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.deadine} </p>
    </div>
  );
};

export default TaskCard;
