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
            className="bg-white p-4 rounded shadow mb-2 hover:bg-gray-100 cursor-pointer"
            onDoubleClick={() => setIsEditing(true)} // Open edit modal on double-click
          >
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
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
