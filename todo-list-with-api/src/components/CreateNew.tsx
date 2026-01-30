"use client";
import { useState } from "react";
import { CreateTodoId } from "@/actions/createTodoId";

interface CreateNewProps {
  onClose: () => void;
}

const CreateNew = ({ onClose }: CreateNewProps) => {
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");
  const [todoId, setTodoId] = useState("");

  const [edited, setEdited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = await CreateTodoId();
    setTodoId(id);

    const data = {
      title,
      content,
      todo_id: id,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo_post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 px-10 py-5 rounded-2xl shadow-all-sides flex flex-col bg-white"
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-2xl rounded-half flex justify-center items-center px-2.5 py-1 hover:bg-gray-200 cursor-pointer transition-all"
        >
          ✖
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Untitled"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setEdited(true);
          }}
          className={`outline-none border-b-2 ${edited ? "text-black" : "text-gray-400"} text-2xl`}
        />
        <textarea
          placeholder="Enter text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-solid border-black rounded-md p-3 h-96"
        />
      </div>
      <div className="mt-5 mb-0 flex justify-center">
        <button
          type="submit"
          className="bg-green-800 py-2 px-4 font-bold text-white rounded-md cursor-pointer hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateNew;
