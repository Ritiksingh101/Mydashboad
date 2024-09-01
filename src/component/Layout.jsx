import React, { useContext, useState } from 'react';
import Header from '../component/Header';
import dashboardData from '../assets/DashboardData';
import Cnpp from '../component/Cnpp';
import { useNavigate } from 'react-router-dom';
import Addwidget from '../component/Addwidget';
import { DashboardContext } from '../context/DashboardProvider';


const Layout = () => {
  const{addwidget,setAddwidget}=useContext(DashboardContext)
  return (
    <div className="h-[80vh] flex flex-col items-center bg-slate-100 w-[100%]">
 <Header></Header>
      <div className='w-[95%] '>
     
      <Cnpp></Cnpp>
      {/* <div className="flex flex-1">
       
        <main className="flex-1 p-4 bg-black">
        {dashboardData.categories.map((category) => (
        <div key={category.id} className="mb-8 h-[40vh] bg-fuchsia-200">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-3 gap-4 h-[30vh] bg-blue-300">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="p-4 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">{widget.name}</h3>
                <div className="mt-4 flex flex-row">
                    <ul className="list-disc">
                        <li className="text-gray-700">{widget.text}</li>
                        
                    </ul>
                </div>
                
              </div>
              
            ))}
          </div>
        </div>
      ))}
        </main>
      </div> */}


<div className="container mx-auto p-6 h-[70vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">CSPM Executive Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
          
          {/* ------------------------------------Cloud Accounts---------------------- */}
            <div className="bg-white h-[35vh]  shadow-indigo-500/40 shadow-2xl  rounded-lg  p-6 ">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cloud Accounts</h2>
                <div className="flex items-center justify-center">
                    {/* <svg className="w-24 h-24 text-blue-500" viewBox="0 0 100 100">
                        <circle className="stroke-gray-200" cx="50" cy="50" r="45" strokeWidth="10" />
                        <circle className="stroke-blue-500" cx="50" cy="50" r="45" strokeWidth="10" strokeDasharray="141.3716694115407,141.3716694115407" strokeDashoffset="141.3716694115407" strokeLinecap="round" animation-fill-mode="forwards" animation-iteration-count="1" animation-timing-function="linear" animation-duration="1s" animation-name="draw" />
                        <text className="text-gray-600 text-center font-bold" x="50" y="55">2</text>
                        <text className="text-gray-600 text-center font-bold" x="50" y="65">Total</text>
                    </svg> */}
                </div>
                <div className="mt-4">
                    <ul className="list-disc">
                        <li className="text-gray-700">Connected (2)</li>
                        <li className="text-gray-700">Not Connected (2)</li>
                    </ul>
                </div>
            </div>

            {/* ---------------------------------------Cloud Account Risk Assessment----------------------------- */}
            <div className="bg-white w-[100%] h-[35vh] rounded-lg shadow-indigo-500/40 shadow-2xl p-6">
              <div className='w-[100%] h-[5vh] font-bold text-[20px]'>
              <h2 >Cloud Account Risk Assessment</h2>
              </div>
                
                     <div className='flex gap-[20%]'>
                <div className="flex items-center justify-center">
                    <svg className="w-24 h-24" viewBox="0 0 100 100">
                        <circle className="stroke-gray-200" cx="50" cy="50" r="45" strokeWidth="10" />
                        <circle className="stroke-green-500" cx="50" cy="50" r="45" strokeWidth="10" strokeDasharray="282.7433388230814,282.7433388230814" strokeDashoffset="282.7433388230814" strokeLinecap="round" animation-fill-mode="forwards" animation-iteration-count="1" animation-timing-function="linear" animation-duration="1s" animation-name="draw" />
                        <circle className="stroke-red-500" cx="50" cy="50" r="45" strokeWidth="10" strokeDasharray="79.57747154555252,79.57747154555252" strokeDashoffset="79.57747154555252" strokeLinecap="round" animation-fill-mode="forwards" animation-iteration-count="1" animation-timing-function="linear" animation-duration="1s" animation-name="draw" />
                        <circle className="stroke-yellow-500" cx="50" cy="50" r="45" strokeWidth="10" strokeDasharray="36.65191429177243,36.65191429177243" strokeDashoffset="36.65191429177243" strokeLinecap="round" animation-fill-mode="forwards" animation-iteration-count="1" animation-timing-function="linear" animation-duration="1s" animation-name="draw" />
                        <circle className="stroke-gray-400" cx="50" cy="50" r="45" strokeWidth="10" strokeDasharray="3.435457047100499,3.435457047100499" strokeDashoffset="3.435457047100499" strokeLinecap="round" animation-fill-mode="forwards" animation-iteration-count="1" animation-timing-function="linear" animation-duration="1s" animation-name="draw" />
                        <text className="text-gray-600 text-center font-bold" x="50" y="55">9659</text>
                        <text className="text-gray-600 text-center font-bold" x="50" y="65">Total</text>
                    </svg>
                </div>
                <div className="mt-4">
                    <ul className="list-disc">
                        <li className="text-red-500">Failed (1689)</li>
                        <li className="text-yellow-500">Warning (681)</li>
                        <li className="text-gray-400">Not available (36)</li>
                        <li className="text-green-500">Passed (7253)</li>
                    </ul>
                </div>
                </div>

            </div>
            <div className="bg-white flex justify-center items-center shadow-indigo-500/40 shadow-2xl rounded-lg w-[100%] h-[35vh]">
                
                    <button onClick={()=>setAddwidget(true)} className=" hover:bg-blue-100 border-2 font-bold py-2 px-4 rounded">
                        + Add Widget
                    </button>
                
            </div>
        </div>
    </div>

      </div>
         

      <Addwidget></Addwidget>

    </div>
  );
};

export default Layout;