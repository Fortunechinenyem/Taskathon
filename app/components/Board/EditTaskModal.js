import { useTasks } from "@/context/TaskProvider";
import { useState } from "react";

const EditTaskModal = ({ task, closeModal }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);
  const { dispatch } = useTasks();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, title, description, deadline },
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTaskModal;
