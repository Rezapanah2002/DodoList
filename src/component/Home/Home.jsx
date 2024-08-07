import React from "react";

function Home() {
  return (
    <div className="bg-slate-100 m-6 rounded-md border-2 border-dashed border-teal-400 flex justify-center items-center max-[570px]:grid">
      <img
        alt="home"
        src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-5945263-4911411.png?f=webp"
      />
      <div className="p-5 border-dashed border-2 border-slate-600 rounded-2xl m-4 font-serif">
        <h2 className=" flex items-center">
          Wellcome to DodoList
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 ml-1 text-rose-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </h2>
        <p className="text-red-900">This Tool will help you to focus much better!</p>
        <h1 className="flex items-center text-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
              clipRule="evenodd"
            />
          </svg>
          So Let's be Productive!
        </h1>
      </div>
    </div>
  );
}

export default Home;
