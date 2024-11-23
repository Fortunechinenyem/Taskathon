import { useTasks } from "@/context/TaskProvider";
import { useState } from "react";

const TaskFilter = ({ setFilteredTasks }) => {
  const [search, setSearch] = useState("");
  const { state } = useTasks();

  const handleFilter = () => {
    const filtered = state.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleFilter}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default TaskFilter;
