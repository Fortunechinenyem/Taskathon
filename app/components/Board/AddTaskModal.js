import { useTasks } from "@/context/TaskProvider";
import { useState } from "react";

const AddTaskModal = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: `${Date.now()}`,
      title,
      description,
      deadline,
      status: "To Do",
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Title"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskModal;
