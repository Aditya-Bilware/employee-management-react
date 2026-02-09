import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../store/features/popup/popup.slice";
import { useEffect, useState } from "react";
import {
  postEmployee,
  updateEmployee,
} from "../store/features/employee/employee.thunk";

const EmployeePopup = () => {
  const popup = useSelector((state) => state.popup.employeePopup);
  // console.log(popup);
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });

  // console.log(formDetails);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(closeEmployeePopup());

    if (popup.id) {
      await dispatch(
        updateEmployee({
          id: popup.id,
          details: formDetails,
        }),
      );
    } else {
      await dispatch(postEmployee(formDetails));
    }
  };

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlight: false,
      });
    } else if (popup.id) {
      setFormDetails({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlight: false,
      });
    }
  }, [popup]);

  if (!popup) return null;

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark bg-opacity-75 position-fixed top-0 start-0 w-100 h-100 fw-semibold"
      onClick={() => dispatch(closeEmployeePopup())}
      style={{ zIndex: "1050" }}
    >
      <div
        className="card bg-dark text-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "400px" }}
      >
        <div className="card-body p-4">
          <h4 className="text-center mb-4">Employee Details</h4>

          <form>
            <div className="mb-3">
              <label className="form-label">Profile URL</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Profile url"
                name="profileUrl"
                value={formDetails.profileUrl}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter name"
                name="name"
                value={formDetails.name}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter email"
                name="email"
                value={formDetails.email}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control bg-dark text-white border-secondary"
                rows="4"
                placeholder="Tell us about yourself"
                name="bio"
                value={formDetails.bio}
                onChange={handleInput}
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="btn  w-100 mt-2 text-white fw-bold"
              style={{ backgroundColor: "#191D24" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeePopup;
