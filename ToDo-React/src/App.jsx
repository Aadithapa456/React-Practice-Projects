import React, { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
  const addTask = (task) => {
    const newTasks = [...tasks, task] || [];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.taskId !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  const handleEdit = (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task.taskId === updatedTask.taskId ? updatedTask : task,
    );
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <>
      <div className="m-auto mt-60 max-w-[70%]">
        <Taskform addTask={addTask} />
        <Tasklist
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition={Bounce}
        />
      </div>
    </>
  );
};

export default App;
