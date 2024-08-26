import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/action";

const TaskList = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Add a task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
