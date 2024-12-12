import { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-white p-4 rounded-lg shadow-md mb-3 hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out cursor-pointer"
            onDoubleClick={() => setIsEditing(true)}
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {task.title}
            </h3>

            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {task.description || "No description provided."}
            </p>

            <p className="text-xs text-gray-500">
              <span className="font-semibold">Deadline:</span> {task.deadline}
            </p>
          </div>
        )}
      </Draggable>
      {isEditing && (
        <EditTaskModal task={task} closeModal={() => setIsEditing(false)} />
      )}
    </>
  );
};

export default TaskCard;
