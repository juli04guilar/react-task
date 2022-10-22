import { useState } from "react";
import Button from "@mui/material/Button";
import { TASK_STATUS } from "../../constants/status";
import "./Task.css";

const EditAction = ({ task, cancelEditing, onUpdateTaskStatus }) => {
  const onChangeStatus = (event) => {
    const { value } = event.target;
    onUpdateTaskStatus({
      taskId: task.id,
      newStatus: value,
    });
  };
  return (
    <div className="task-actions">
      <select className="select-task-status" onChange={onChangeStatus}>
        {TASK_STATUS.filter((status) => status !== task.status).map(
          (status) => (
            <option value={status}>{status}</option>
          )
        )}
      </select>
      <Button
        style={{ color: "red" }}
        onClick={cancelEditing}
        variant="outlined"
      >
        Cancel
      </Button>
    </div>
  );
};

const Task = ({ task, onUpdateTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="task">
      <div className="task-header">
        <div>{task.title}</div>
        {!isEditing && (
          <Button
            variant="outlined"
            style={{ color: "orange" }}
            onClick={() => setIsEditing(true)}
          >
            <span>Move Status</span>
          </Button>
        )}
        <div>
          {isEditing && (
            <EditAction
              task={task}
              cancelEditing={() => setIsEditing(false)}
              onUpdateTaskStatus={onUpdateTaskStatus}
            />
          )}
        </div>
      </div>
      <hr />
      <div>{task.description}</div>
    </div>
  );
};

export default Task;
