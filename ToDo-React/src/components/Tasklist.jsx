import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

// const tasks = [
//   {
//     id: 1,
//     taskName: "Buy groceries",
//     category: "Shopping",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     taskName: "Submit assignment",
//     category: "Work",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     taskName: "Plan vacation",
//     category: "Personal",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     taskName: "Prepare presentation",
//     category: "Work",
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     taskName: "Read a book",
//     category: "Personal",
//     isCompleted: true,
//   },
// ];

const Tasklist = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div>
      {tasks
        ? tasks.map((item, index) => (
            <TaskItem
              task={item}
              key={index}
              handleDelete={() => handleDelete(item.taskId)}
              handleEdit={handleEdit}
            />
          ))
        : "No tasks found"}
    </div>
  );
};

export default Tasklist;
