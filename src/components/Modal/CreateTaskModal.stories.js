import { action } from "@storybook/addon-actions";
import CreateTaskModal from "./CreateTaskModal";

export default {
  title: "TaskPage/CreateTask",
  component: CreateTaskModal,
};

const Template = (args) => <CreateTaskModal {...args} />;
export const OpenModal = Template.bind({});
OpenModal.args = {
  open: true,
  onCreateTask: action("should create task!!!"),
  closeModal: action("close modal !!!!!"),
};
