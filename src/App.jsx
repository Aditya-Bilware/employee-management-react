import { useDispatch } from "react-redux";
import "./App.css";
import DeletePopup from "./component/DeletePopup";
import EmployeePopup from "./component/EmployeePopup";
import Employees from "./component/Employees";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { getEmployees } from "./store/features/employee/employee.thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <EmployeePopup />
        <DeletePopup />

        <div className="flex-grow-1 my-4 -lg">
          <Employees />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
