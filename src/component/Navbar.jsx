import React from "react";
import Wrapper from "../layout/Wrapper";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../store/features/popup/popup.slice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-dark mt-2 sticky-top z-3 top-0 ">
      <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-dark px-3 pb-4">
          <div className="container-fluid">
            {/* Left side */}
            <span className="navbar-brand fw-bold">Employees</span>

            {/* Right side */}
            <div id="employeeNavbar">
              <div className="ms-auto d-flex gap-2 mt-3 mt-lg-0">
                <button
                  onClick={() => dispatch(openEmployeePopup())}
                  className="btn text-white"
                  title="Add Employee"
                >
                  <FaPlus style={{ fontSize: "1.6rem" }} />
                </button>

                <button className="btn text-white " title="Favourite Employees">
                  <CiHeart style={{ fontSize: "1.6rem" }} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
