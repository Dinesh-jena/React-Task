import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const LoginModel = ({ allCondition, setallCondition }) => {
  console.log(
    allCondition.toastMessage,
    allCondition.popUp,
    allCondition.success,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setallCondition((prve) => {
        return { ...prve, popUp: false };
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`fixed top-5 right-5 text-white px-6 py-3 rounded-xl shadow-xl
      ${allCondition.success ? "bg-green-500" : "bg-red-500"}
    `}
    >
      {allCondition.toastMessage}
    </div>,

    document.getElementById("message"),
  );
};

export default LoginModel;
