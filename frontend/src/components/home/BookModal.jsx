import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6 relative"
      >
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <div className="flex flex-col gap-2 mb-4">
          <span className="inline-block w-fit px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
            Published: {book.publishYear}
          </span>
          <span className="text-xs text-gray-400">ID: {book._id}</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="text-xl font-semibold">{book.title}</h2>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <BiUserCircle className="text-red-400 text-2xl" />
          <h3 className="text-lg font-medium">{book.author}</h3>
        </div>

        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          accusantium doloremque delectus ratione labore animi asperiores
          excepturi, reprehenderit minima rem? Cum, alias praesentium laborum
          aliquid neque consectetur!
        </div>
      </div>
    </div>
  );
};

export default BookModal;
