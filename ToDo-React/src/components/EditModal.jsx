import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { CircleXIcon } from "lucide-react";

const EditModal = ({ task, handleEdit, handleClose }) => {
  const [form, setForm] = useState(task);
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(form);
    handleClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={handleClose}
          >
            <CircleXIcon />
          </button>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              htmlFor="taskName"
              className="text-md mb-2 block font-medium text-gray-700"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={form.taskName}
              onChange={handleFormChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Task Category
            </label>
            <SelectInput
              name={"category"}
              onChange={handleFormChange}
              options={[
                { value: "Work", label: "Work" },
                { value: "Personal", label: "Personal" },
                { value: "Shopping", label: "Shopping" },
              ]}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="mr-4 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => handleEdit()}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
