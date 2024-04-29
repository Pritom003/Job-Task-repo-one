import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashbord from './Components/Dashbord/Dashbord';
import Home from './Components/routes/Home';
import Salary from './Components/routes/Payroll/Salary';
import Payslip from './Components/routes/Payroll/Payslip';
import PayrollItems from './Components/routes/Payroll/PayrollItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord></Dashbord>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'salary',
        element:<Salary></Salary>,
      },
      {
        path:'payslip',
        element:<Payslip></Payslip>
      },
      {
        path:'payroll-item',
        element:<PayrollItems></PayrollItems>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
