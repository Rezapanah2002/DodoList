import React, { useState } from "react";

function TodoList() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSub = e => {
    e.preventDefault();
    if (value.trim() !== "") {
      setItems([...items, { text: value, done: false }]);
      setValue("");
    }
  };

  const handleDone = index => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const handleDelete = index => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleEdit = index => {
    setEditIndex(index);
    setEditValue(items[index].text);
  };

  const handleEditChange = e => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = index => {
    const newItems = [...items];
    newItems[index].text = editValue;
    setItems(newItems);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="bg-slate-100 p-3 m-6 rounded-md border-2 border-dashed border-teal-400">
      <form
        className="p-4 m-5 flex justify-center max-[500px]:grid max-[500px]:justify-items-center max-[500px]:gap-3"
        onSubmit={handleSub}
      >
        <input
          type="text"
          placeholder="What is your plan today?"
          className="p-2 mx-3 bg-slate-50 text-black shadow-md rounded-md w-full hover:shadow-lg"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-44 flex justify-center items-center p-3 shadow-md rounded-lg bg-teal-200 hover:bg-teal-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Task
        </button>
      </form>
      <div className="flex justify-evenly ">
        <ul className="list-none p-4 grid place-content-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={
                item.done
                  ? "flex items-center line-through decoration-1 decoration-green-700 w-full"
                  : "flex items-center  border-2 border-dashed border-teal-400 rounded-lg  m-2 p-2 max-[520px]:grid  max-[520px]:w-full"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                    className=" bg-slate-50 m-1 p-2 border rounded-md shadow-sm"
                  />
                  <button
                    onClick={() => handleEditSubmit(index)}
                    className="flex items-center justify-center m-1 p-2 bg-neutral-700 text-lime-300 rounded-xl hover:bg-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {item.text}
                  <button
                    onClick={() => handleDone(index)}
                    className="flex items-center m-1 p-2 bg-neutral-700 rounded-xl text-green-300 hover:bg-neutral-800 max-[420px]:grid max-[420px]:justify-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Done
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="flex items-center m-1 p-2  bg-neutral-700 text-amber-300 rounded-xl hover:bg-neutral-800 max-[420px]:grid max-[420px]:justify-items-center max-[420px]:items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </button>
                </>
              )}
              <button
                onClick={() => handleDelete(index)}
                className="flex items-center m-1 p-2  bg-neutral-700 text-rose-500 rounded-xl hover:bg-neutral-800 max-[420px]:grid max-[420px]:justify-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
