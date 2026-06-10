import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserDataContext } from "../context/UserContext";
import DeletePage from "./DeletePage";
import PopUp from "./popUp";
import LoginPage from "./LoginPage";
import { LoginContextData } from "../context/LoginContext";

const TableComponents = () => {
  const [loginConfirm, setloginConfirm] = useContext(LoginContextData);
  const [user, setuser] = useContext(UserDataContext);

  const [searchUser, setsearchUser] = useState("");

  // const [confirmDelete, setConfirmDelete] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const [selectedId, setSelectedId] = useState(0);

  const [popUp, setpopUp] = useState(false);

  useEffect(() => {}, []);

  const deleteHandler = () => {
    setuser(user.filter((elem) => elem.id !== selectedId));

    setShowDelete(false);

    setpopUp(true);

    setTimeout(() => {
      setpopUp(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-10">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center tracking-wide">
          Users Table
        </h1>

        <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-600">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-400 text-white">
              <tr>
                <th className="p-4 text-lg border border-gray-500">ID</th>

                <th className="p-4 text-lg border border-gray-500">
                  First Name
                </th>

                <th className="p-4 text-lg border border-gray-500">
                  Last Name
                </th>

                <th className="p-4 text-lg border border-gray-500 text-center">
                  Delete Section
                </th>
              </tr>
            </thead>

            <tbody>
              {user.map((elem) => (
                <tr
                  key={elem.id}
                  className="
                        bg-gray-800
                        text-white
                        hover:bg-gray-700
                        hover:scale-[1.01]
                        transition-all
                        duration-300
                        "
                >
                  <td className="p-4 border border-gray-600 font-semibold">
                    {elem.id}
                  </td>

                  <td className="p-4 border border-gray-600">
                    {elem.firstName}
                  </td>

                  <td className="p-4 border border-gray-600">
                    {elem.lastName}
                  </td>

                  <td className="p-4 border border-gray-600 text-center">
                    <button
                      onClick={() => {
                        setShowDelete(true); //ye ager dekh ne jaye to as a middleware use hoga
                        setSelectedId(elem.id);
                      }}
                      className="
                    px-4
                    py-2
                    bg-red-500
                    hover:bg-red-600
                    active:scale-90
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-red-500/50
                    border
                    border-red-300
                     "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showDelete && (
        <DeletePage
          closeModal={() => setShowDelete(false)}
          confirmDelete={deleteHandler}
        />
      )}

      {popUp && <PopUp />}
    </div>
  );
};

export default TableComponents;
