"use client";

import { toast } from "react-toastify";

const BorrowButton = () => {
  return (
    <button
      onClick={() => toast.success("Book borrowed successfully!!")}
      className="btn bg-cyan-700 text-white mt-6"
    >
      Borrow This Book
    </button>
  );
};

export default BorrowButton;