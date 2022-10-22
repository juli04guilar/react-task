import { v4 as uuidv4 } from "uuid";

const taskReducer = {
  addTask: (state, action) => {
    const { payload } = action;
    const { title, description } = payload || {};
    return {
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          description,
          status: "Unstarted",
        },
      ],
    };
  },
  updateTaskStatus: (state, action) => {
    const { payload } = action;
    const { taskId, newStatus } = payload || {};
    const taskIndex = state?.tasks?.findIndex((task) => task.id === taskId);
    state.tasks[taskIndex].status = newStatus;
  },
};

export { taskReducer };
