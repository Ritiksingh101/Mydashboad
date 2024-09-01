import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardProvider";

function Cnpp() {
  const{addwidget,setAddwidget}=useContext(DashboardContext)

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">CNAPP Dashboard</h1>
      <div className="flex space-x-4">
        <button onClick={()=>setAddwidget(true)} className="bg-gray-200 px-4 py-2 rounded-md">
          Add Widget <span className="text-gray-500">+</span>
        </button>
        <div className="bg-gray-200 px-4 py-2 rounded-md">
        <i class="fa fa-refresh" aria-hidden="true"></i>
        </div>
        <div className="bg-gray-200 px-4 py-2 rounded-md">
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
        <div className="relative flex">
        
         
            <select
              className="
          
          w-full border
          rounded-lg
          py-2
          px-4
          
          placeholder-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm
         
          dark:border-gray-600
          dark:text-gray-300
          dark:placeholder-gray-500
         
        "
            >
                 
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="1">Last 2 days</option>
              <option value="2">Last 1 weeks</option>
              <option value="3">Last 1 Month</option>
            </select>
          
        </div>
      </div>
    </div>
  );
}

export default Cnpp;
