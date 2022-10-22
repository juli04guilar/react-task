import TaskPage from "./pages/TaskPage";
import { connect } from "react-redux";
import { addTask, updateTaskStatus } from "./actions";

function App(props) {
  const onCreateTask = (task) => {
    props.dispatch(addTask(task));
  };
  const onUpdateTaskStatus = ({ taskId, newStatus }) => {
    props.dispatch(updateTaskStatus({ taskId, newStatus }));
  };

  return (
    <div className="App">
      <h1>Task Page</h1>
      <TaskPage
        onUpdateTaskStatus={onUpdateTaskStatus}
        onCreateTask={onCreateTask}
        tasks={props.tasks}
      />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(App);
