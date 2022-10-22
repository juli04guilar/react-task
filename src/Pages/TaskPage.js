import { useState } from "react";
import Button from "@mui/material/Button";

import CreateTaskModal from "../components/Modal/CreateTaskModal";
import TaskList from "../components/TaskList/TaskList";
import { TASK_STATUS } from "../constants/status";
import "./TaskPage.css";

const NEW_TASK_INITIAL_STATE = {
  title: "",
  description: "",
};

const TaskPage = ({ tasks, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [newTaskState, setNewTaskState] = useState(NEW_TASK_INITIAL_STATE);

  const onCreateTask = (event) => {
    event.preventDefault();
    props.onCreateTask({ ...newTaskState });
    setShowModal(false);
  };
  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setNewTaskState({
      ...newTaskState,
      [name]: value,
    });
  };
  console.log(props);
  return (
    <div className="task-page">
      <div className="task-page-list">
        <div className="task-list-header">
          <Button variant="outlined" onClick={() => setShowModal(true)}>
            + Add Task
          </Button>
        </div>
        {showModal && (
          <CreateTaskModal
            onCreateTask={onCreateTask}
            onChangeFormHandler={onChangeHandler}
            open={showModal}
            closeModal={() => setShowModal(false)}
          />
        )}
        <hr />
        <div className="task-list-container">
          {TASK_STATUS.map((status) => (
            <TaskList
              onUpdateTaskStatus={props.onUpdateTaskStatus}
              key={status}
              status={status}
              tasks={tasks && tasks.filter((task) => task.status === status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
