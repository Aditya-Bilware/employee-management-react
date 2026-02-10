import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Favourite = () => {
  const employees = useSelector((state) => state.employee.employees);

  const [isLoading, setIsLoading] = useState(true);

  const favouriteEmployee = employees.filter((emp) => emp.highlight === true);

  useEffect(() => {
    if (employees.length >= 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // small delay to avoid flicker
      return () => clearTimeout(timer);
    }
  }, [employees]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "720px" }}>
          <h3 className="text-white text-center mb-4">
            Favourite Employees ❤️
          </h3>

          <ul className="list-group">
            {Array.from({ length: 10 }).map((_, i) => (
              <li
                key={i}
                className="list-group-item bg-dark border-0 mb-3 rounded-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: 56, height: 56, opacity: 0.4 }}
                  />
                  <div className="flex-grow-1">
                    <div
                      className="bg-secondary mb-2"
                      style={{ height: 14, width: "40%", opacity: 0.4 }}
                    />
                    <div
                      className="bg-secondary mb-2"
                      style={{ height: 12, width: "60%", opacity: 0.3 }}
                    />
                    <div
                      className="bg-secondary"
                      style={{ height: 12, width: "80%", opacity: 0.2 }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (favouriteEmployee.length === 0) {
    return (
      <div className="text-center text-white mt-5">
        <h4>No favourite employees ❤️</h4>
        <p className="text-white-50">
          Mark employees as favourite to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "720px" }}>
        <h3 className="text-white text-center mb-4">Favourite Employees ❤️</h3>

        <ul className="list-group mt-3">
          {favouriteEmployee.map((emp) => (
            <li
              key={emp.id}
              className="list-group-item bg-dark text-white border-0 mb-3 rounded-3 shadow-sm"
            >
              <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                <img
                  src={emp.profileUrl}
                  className="rounded-circle"
                  width="56"
                  height="56"
                  alt="profile"
                />

                <div className="flex-grow-1 text-center text-sm-start">
                  <div className="fw-semibold text-break">{emp.name}</div>
                  <div className="text-white-50 small text-break">
                    {emp.email}
                  </div>
                  <p className="mb-0 text-white-50 small mt-1 text-break bio-clamp">
                    {emp.bio}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favourite;
