import { useTasks } from "@/context/TaskProvider";
import TaskCard from "./TaskCard";

const BoardColumn = ({ status }) => {
  const { state } = useTasks();
  const tasks = state.tasks.filter((task) => task.status === status);

  return (
    <div className="flex flex-col bg-gray-50 rounded-3xl p-4 shadow-lg">
      {/* Column Header */}
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center uppercase tracking-wide">
        {status}
      </h2>

      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-gray-400 text-sm text-center mt-4">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default BoardColumn;
