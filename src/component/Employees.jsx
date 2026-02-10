import React from "react";
import Wrapper from "../layout/Wrapper";
import { CiEdit, CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../store/features/popup/popup.slice";
import EmployeeSkeleton from "./EmployeeSkeleton";
import { updateEmployee } from "../store/features/employee/employee.thunk";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const loading = useSelector((state) => state.employee.loading);
  const loadingId = useSelector((state) => state.employee.loadingId);
  // console.log(employees);

  if (loading) {
    return (
      <div className="row g-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <EmployeeSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="text-center text-white mt-5">
        <h4>You haven’t added any employees yet</h4>
        <p className="text-white-50">Click “Add Employee” to get started.</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className=" bg-dark text-white shadow-sm rounded ">
        <ul className="list-group list-group-flush bg-dark rounded shadow-sm">
          {loadingId === "new" && <EmployeeSkeleton />}

          {employees.map((emp) =>
            loadingId === emp.id ? (
              <EmployeeSkeleton key={emp.id} />
            ) : (
              <EmployeeCard key={emp.id} details={emp} />
            ),
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

const EmployeeCard = ({ details }) => {
  // console.log(details);
  const dispatch = useDispatch();

  const handleHighlight = () => {
    // console.log("working");
    dispatch(
      updateEmployee({
        id: details.id,
        details: {
          ...details,
          highlight: !details.highlight,
        },
      }),
    );
  };
  return (
    <li className="list-group-item bg-dark text-white  px-4 py-3 border-0 mb-3  ">
      <div className="d-flex flex-column flex-sm-row align-items-md-center gap-3">
        {/* profile image */}
        <img
          src={details.profileUrl}
          className="rounded mx-auto mx-md-0"
          width="50"
          height="50"
          alt="profile"
        />

        {/* text content */}
        <div className="flex-grow-1 d-flex flex-column text-center text-md-start">
          <div className="fw-semibold text-break">{details.name}</div>
          <div className="text-white-50 small text-break">{details.email}</div>
          <p className="mb-0 text-white-50 small mt-1 text-break bio-clamp text-justify">
            {details.bio}
          </p>
        </div>

        {/* actions */}
        <div className="d-flex justify-content-center justify-content-md-end gap-4 mt-2 mt-md-0 ">
          <button
            className="btn text-white p-0"
            onClick={() => dispatch(openEmployeePopup(details))}
          >
            <CiEdit style={{ fontSize: "1.8rem" }} />
          </button>

          <button
            className="btn text-white p-0"
            onClick={() => dispatch(openDeletePopup(String(details.id)))}
          >
            <MdOutlineDeleteOutline style={{ fontSize: "1.8rem" }} />
          </button>

          <button
            className="btn text-white p-0"
            title="Favourite Employees"
            onClick={() => handleHighlight(details)}
          >
            {details.highlight ? (
              <FaHeart
                style={{
                  fontSize: "1.6rem",
                  color: "#dc3545",
                  cursor: "pointer",
                  transition: "transform 0.15s ease",
                }}
                onClick={handleHighlight}
              />
            ) : (
              <CiHeart
                style={{
                  fontSize: "1.6rem",
                  color: "#adb5bd",
                  cursor: "pointer",
                }}
                onClick={handleHighlight}
              />
            )}
          </button>
        </div>
      </div>
      {/* <hr /> */}
    </li>
  );
};

export default Employees;
