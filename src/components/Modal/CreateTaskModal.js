import { Modal, Typography, Box } from "@mui/material";
import TaskForm from "../TaskForm/TaskForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateTaskModal = ({
  open,
  closeModal,
  onChangeFormHandler,
  onCreateTask,
}) => {
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create new task
        </Typography>
        <TaskForm
          onCreateTask={onCreateTask}
          onCancel={closeModal}
          onChangeHandler={onChangeFormHandler}
        />
      </Box>
    </Modal>
  );
};

export default CreateTaskModal;
