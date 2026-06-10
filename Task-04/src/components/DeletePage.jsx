import React, { useState } from "react";
import ReactDOM from "react-dom";

const DeletePage = ({ closeModal, confirmDelete }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-10 rounded-lg">
        <p className="text-xl mb-5">
          Are you sure you want to delete the user?
        </p>

        <button
          onClick={confirmDelete}
          className="border-2 px-5 py-2 mr-5 bg-red-500 text-white rounded"
        >
          Yes
        </button>

        <button onClick={closeModal} className="border-2 px-5 py-2 rounded">
          No
        </button>
      </div>
    </div>,

    document.getElementById("delete"),
  );
};

export default DeletePage;
