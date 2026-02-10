import React from "react";
import Wrapper from "../layout/Wrapper";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../store/features/popup/popup.slice";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const isFavPage = location.pathname == "/favourites";

  return (
    <div className="bg-dark mt-2 sticky-top z-3 top-0 ">
      <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-dark px-3 pb-4">
          <div className="container-fluid">
            {/* Left side */}
            <NavLink className="navbar-brand fw-bold" to="/">
              Employees
            </NavLink>

            {/* Right side */}

            {!isFavPage && (
              <div id="employeeNavbar">
                <div className="ms-auto d-flex gap-2 mt-3 mt-lg-0">
                  <button
                    onClick={() => dispatch(openEmployeePopup())}
                    className="btn text-white"
                    title="Add Employee"
                  >
                    <FaPlus style={{ fontSize: "1.6rem" }} />
                  </button>

                  <NavLink
                    className="btn text-white "
                    title="Favourite Employees"
                    to="/favourites"
                  >
                    <CiHeart style={{ fontSize: "1.6rem" }} />
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
