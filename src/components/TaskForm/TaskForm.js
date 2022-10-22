import Button from "@mui/material/Button";
import "./TaskForm.css";
import TextField from "@mui/material/TextField";

const TaskForm = ({ onChangeHandler, onCreateTask, onCancel }) => {
  return (
    <div className="new-form-task">
      <TextField
        name="title"
        placeholder="title"
        onChange={onChangeHandler}
        label="title"
        variant="outlined"
      />
      <hr />
      <TextField
        name="description"
        onChange={onChangeHandler}
        placeholder="description"
        label="description"
        variant="outlined"
      />
      <hr />

      <Button onClick={onCreateTask} variant="outlined">
        Save
      </Button>
      <hr />
      <Button onClick={onCancel} style={{ color: "red" }} variant="outlined">
        Cancel
      </Button>
    </div>
  );
};
export default TaskForm;
