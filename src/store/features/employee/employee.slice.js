import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: false,
  loadingId: null,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    //get / fetch employeees
    addBuilder.addCase(getEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });
    addBuilder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      //   state.employees = action.payload;
    });

    //post employee

    addBuilder.addCase(postEmployee.pending, (state, action) => {
      // state.loading = true;
      state.loadingId = "new";
      state.error = null;
    });
    addBuilder.addCase(postEmployee.fulfilled, (state, action) => {
      // state.loading = false;
      state.loadingId = null;
      state.employees.unshift(action.payload);
    });
    addBuilder.addCase(postEmployee.rejected, (state, action) => {
      // state.loading = false;
      state.error = action.payload;
    });

    //update employee
    addBuilder.addCase(updateEmployee.pending, (state, action) => {
      // state.loading = true;
      state.loadingId = action.meta.arg.id;
      state.error = null;
    });
    addBuilder.addCase(updateEmployee.fulfilled, (state, action) => {
      // state.loading = false;
      state.loadingId = null;

      const index = state.employees.findIndex(
        (e) => e.id === action.payload.id,
      );

      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    });
    addBuilder.addCase(updateEmployee.rejected, (state, action) => {
      // state.loading = false;
      state.error = action.payload;
    });

    //delete employee
    addBuilder.addCase(deleteEmployee.pending, (state, action) => {
      // state.loading = true;
      state.loadingId = action.meta.arg.id;

      state.error = null;
    });
    addBuilder.addCase(deleteEmployee.fulfilled, (state, action) => {
      // state.loading = false;
      state.loadingId = null;
      state.employees = state.employees.filter((e) => e.id != action.meta.arg);
    });
    addBuilder.addCase(deleteEmployee.rejected, (state, action) => {
      // state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
