import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ status, tasks, onUpdateTaskStatus }) => {
  return (
    <div className="task-list">
      <div className="class-title">
        <strong>{status}</strong>
      </div>
      {tasks &&
        tasks.map((taskRow) => (
          <Task
            onUpdateTaskStatus={onUpdateTaskStatus}
            key={taskRow.id}
            task={taskRow}
          />
        ))}
    </div>
  );
};

export default TaskList;
