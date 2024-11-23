import { useTasks } from "@/context/TaskProvider";
import TaskCard from "./TaskCard";

const BoardColumn = ({ status }) => {
  const { state } = useTasks();
  const tasks = state.tasks.filter((task) => task.status === status);

  return (
    <div className="bg-gray-100 rounded p-4 shadow">
      <h2 className="font-bold text-lg">{status}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
    </div>
  );
};

export default BoardColumn;
