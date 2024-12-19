import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectInput from "./SelectInput";

const Taskform = ({ addTask }) => {
  const [form, setForm] = useState({ taskName: "", category: "Work" });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // const addTask = (e) => {
  //   e.preventDefault();
  //   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   tasks.push(form);
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   setForm({ taskName: "", category: "" }); // Reset form
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.taskName || !form.category) {
      toast.error("Please fill out all the fields");
      return;
    }
    const taskWithId = { ...form, taskId: Date.now() };
    addTask(taskWithId);
    setForm({ taskName: "", category: " " });
  };
  return (
    <form
      className="mb-6 flex flex-col items-center gap-4 md:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="taskName"
        value={form.taskName}
        onChange={handleForm}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <SelectInput
        name={"category"}
        onChange={handleForm}
        options={[
          { value: "Work", label: "Work" },
          { value: "Personal", label: "Personal" },
          { value: "Shopping", label: "Shopping" },
        ]}
      />

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default Taskform;
