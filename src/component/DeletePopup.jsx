import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../store/features/popup/popup.slice";
import { deleteEmployee } from "../store/features/employee/employee.thunk";

const DeletePopup = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.deletePopup);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirmation = async () => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      await dispatch(deleteEmployee(popup)).unwrap();
      dispatch(closeDeletePopup());
    } catch (err) {
      setIsDeleting(false);
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    setIsDeleting(false);
  }, [popup]);

  if (!popup) return null;

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark bg-opacity-75 position-fixed top-0 start-0 w-100 h-100"
      onClick={() => !isDeleting && dispatch(closeDeletePopup())}
      style={{ zIndex: 1050 }}
    >
      <div
        className="card bg-dark text-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "420px" }}
      >
        <div className="card-body p-4 text-center">
          <h4 className="mb-3 fw-bold">Confirm Deletion</h4>

          <p className="text-white-50 mb-4">
            Are you sure you want to delete this employee? This action cannot be
            undone.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-danger fw-semibold px-4 d-flex align-items-center gap-2"
              onClick={handleConfirmation}
              disabled={isDeleting}
            >
              {isDeleting && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </button>

            <button
              className="btn btn-success fw-semibold px-4"
              onClick={() => dispatch(closeDeletePopup())}
              disabled={isDeleting}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
