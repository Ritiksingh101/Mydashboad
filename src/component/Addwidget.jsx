import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../context/DashboardProvider";
import axios from "axios";
import { json } from "react-router-dom";

function Addwidget() {
  const { addwidget, setAddwidget } = useContext(DashboardContext);
  const [data,setData]=useState([])
  const getdata =()=>{
    axios.get("http://localhost:5005/categories").then((res)=>setData(res.data))
  }
  useEffect(()=>{getdata()},[])
  
  const postdata=()=>{
    axios.post("http://localhost:5005/categories",obj).then((res)=>alert(res))
    .then((err)=>alert(err))
  }

  return (
    <>
    {JSON.stringify(data)}
      {addwidget && (
        <>
          <div
            onClick={() => setAddwidget(false)}
            className="bg-black w-[100%] h-[100vh] opacity-60 fixed cursor-pointer left-0 top-0 "
          ></div>
          <div className="bg-white sidebar-popup lg:h-[100vh] h-[60vh] r lg:w-[40%] w-[100%] absolute right-0 z-[11]">
            <div className=" bg-blue-800 text-[white] h-[5vh] flex justify-between items-center pr-4">
              <label>Add Widget</label>
              <button onClick={() => setAddwidget(false)}>X</button>
            </div>

            <div className="h-[5vh] flex pl-4 items-center">
              <label>
                Personalise your dashboard by adding the following widget
              </label>
            </div>
            <div className="w-[60%] flex justify-around h-[5vh] items-center border-b-2">
              <label>CSPM</label>
              <label>CWPP</label>
              <label>Image</label>
              <label>Ticket</label>
            </div>

            <div className="flex h-[20vh] flex-col gap-4  items-center justify-center w-[100%]">
              <div className="flex w-[95%] h-[5vh] items-center border-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="mr-2 leading-tight"
                  
                />
                <input
                  type="text"
                  placeholder="Widget1"
                  className="flex outline-none h-[4vh]"
                ></input>
              </div>

              <div className="flex w-[95%] h-[5vh] items-center border-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="mr-2 leading-tight"
                />
                <input
                  type="text"
                  placeholder="Widget1"
                  className="flex outline-none h-[4vh]"
                ></input>
              </div>
            </div>
            <button onClick={()=>postdata()} >Submit</button>
          </div>
        </>
      )}
    </>
  );
}

export default Addwidget;
