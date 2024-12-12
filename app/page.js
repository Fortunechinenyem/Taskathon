"use client";
import { TaskProvider } from "@/context/TaskProvider";
import { useState } from "react";
import AddTaskModal from "./components/Board/AddTaskModal";
import Board from "./components/Board/Board";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <TaskProvider>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <header className="bg-blue-800 text-white py-6 shadow-md flex items-center justify-between px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">Taskathon</h1>
            <p className="text-lg mt-2">Organize your tasks effortlessly</p>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/avatar-placeholder.png"
              alt="User Avatar"
              width={100}
              height={100}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <p className="text-white font-medium">Welcome, John Doe</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex justify-center mb-8">
            <button
              onClick={openModal}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              + Add Task
            </button>
          </div>

          {isModalOpen && <AddTaskModal closeModal={closeModal} />}

          <Board />
        </main>

        <footer className="bg-gray-800 text-white py-4 mt-auto">
          <div className="container mx-auto flex justify-between items-center px-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Taskathon. All rights reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </TaskProvider>
  );
}
