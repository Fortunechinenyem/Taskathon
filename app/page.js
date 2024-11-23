"use client";
import { TaskProvider } from "@/context/TaskProvider";
import { useState } from "react";
import AddTaskModal from "./components/Board/AddTaskModal";
import Board from "./components/Board/Board";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <TaskProvider>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Taskathon</h1>
        <button
          onClick={openModal}
          className="mb-6 px-4 py-
          2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
        {isModalOpen && <AddTaskModal closeModal={closeModal} />}
        <Board />
      </div>
    </TaskProvider>
  );
}
