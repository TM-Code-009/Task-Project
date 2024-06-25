"use client";
import React, { useState } from "react";
import {
  MdCheckBox,
  MdCreateNewFolder,
  MdInbox,
  MdTimeToLeave,
  MdToday,
} from "react-icons/md";
import CreateProject from "./createproject";

const Sider = () => {
  const bullet = [
    {
      id: 1,
      name: "inbox",
      url: "/company/inbox",
      icon: <MdInbox />,
    },
    {
      id: 2,
      name: "today",
      url: "/company/today",
      icon: <MdToday />,
    },
    {
      id: 3,
      name: "due",
      url: "/company/due",
      icon: <MdTimeToLeave />,
    },
    {
      id: 4,
      name: "completed",
      url: "/company/completed",
      icon: <MdCheckBox />,
    },
  ];

  const [toggle, setToggle] = useState<boolean>(false);

  console.log("readuign: ", toggle);
  return (
    <div className="relative">
      <div className="w-[250px] flex flex-col border-r h-screen bg-slate-50 px-4 pt-10">
        <div className="mb-10 flex gap-3">
          <img
            src=""
            alt=""
            className="w-16 h-16 border rounded-full bg-slate-100 object-cover"
          />
          <div>
            <p className="text-[14px] font-semibold ">Name</p>
            <p className="text-[12px]">No of Staff: 3</p>
            <p className="text-[12px] mt-3">
              Project Plan: <span className="font-bold ">Freemium</span>
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {bullet?.map((el) => {
            return (
              <div className="hover:border border-slate-50 border hover:text-white hover:bg-blue-950 cursor-pointer rounded-md px-2 py-4 duration-300 transition-all capitalize text-[15px] font-semibold flex items-center gap-2">
                <p className="text-[18px]">{el.icon}</p>
                {el.name}
              </div>
            );
          })}
        </div>

        <div className="my-5">
          <hr />
        </div>

        <div
          onClick={() => {
            setToggle(true);
          }}
          className="hover:border border-slate-50 border hover:text-white hover:bg-blue-950 cursor-pointer rounded-md px-2 py-4 duration-300 transition-all capitalize text-[15px] font-semibold flex items-center gap-2"
        >
          <p className="text-[18px]">
            <MdCreateNewFolder />
          </p>
          Create Project
        </div>

        <div className="my-5">
          <hr />
        </div>
        <div>projects</div>
        <div className="flex-1" />
        <div>settings</div>
      </div>
      <div className="absolute top-0 left-0">
        {toggle && <CreateProject setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default Sider;