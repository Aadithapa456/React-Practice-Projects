import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
const TaskItem = ({ task, handleDelete, handleEdit }) => {
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);
  const closeDeleteModal = () => {
    setisDeleteOpen(false);
  };
  const closeEditModal = () => {
    setisEditOpen(false);
  };
  return (
    <>
      <div className="mx-4 mt-4 flex items-center justify-between rounded-md border bg-gray-50 p-4">
        <div>
          <p className="font-medium text-gray-800">{task.taskName}</p>
          <p className="text-sm text-gray-500">Category: {task.category}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-md bg-yellow-500 px-3 py-1 text-white transition hover:bg-yellow-600"
            onClick={() => setisEditOpen(true)}
          >
            Edit
          </button>
          <button
            className="rounded-md bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
            onClick={() => setisDeleteOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {isDeleteOpen && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={closeDeleteModal}
        />
      )}
      {isEditOpen && (
        <EditModal
          handleEdit={handleEdit}
          handleClose={closeEditModal}
          task={task}
        />
      )}
    </>
  );
};

export default TaskItem;
