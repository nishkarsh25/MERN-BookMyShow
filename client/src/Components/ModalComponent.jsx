import React, { useContext } from "react";
import BsContext from "../Context/BsContext";

function Modal(props) {
  const context = useContext(BsContext);
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context;

  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };

  return (
    <>
      {errorPopup && (
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg p-8 shadow-lg max-w-lg w-full">
            <div className="modal-header border-b border-gray-300 pb-4">
              <h2 className="text-2xl font-bold">Message</h2>
            </div>
            <div className="modal-body py-4">
              <p>{errorMessage}</p>
            </div>
            <div className="modal-footer mt-4 flex justify-end">
              <button
                onClick={handleClosePopup}
                className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
