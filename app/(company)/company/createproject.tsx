"use client";

import moment from "moment";
import React, { FC, useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";
import { redirect, useRouter } from "next/navigation";

interface iTog {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateProject: FC<iTog> = ({ setToggle }) => {
  const session: any = useSession();
  const route = useRouter();

  const [startDate, setStartDate] = useState<Date>(new Date());

  const mainAction = async (formData: FormData) => {
    const title = formData.get("title");
    const date = startDate;

    console.log(title, date);

    await fetch(`/api/project/${session?.data?.user?.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, dueDate: date }),
    }).then(() => {
      setToggle(false);
      redirect("/company/inbox");
    });

    revalidateTag("project");
  };

  return (
    <div
      className="w-[100vw] backdrop-blur-sm h-screen flex items-center justify-center flex-col"
      style={{
        background: "rgba(109, 188, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="w-[400px] border rounded-md min-h-[200px] border-black p-4 ">
        <div className=" flex justify-between items-center ">
          <p className="text-[18px] font-semibold mb-5 ">
            Creating a New Project
          </p>
          <div
            className="cursor-pointer p-2 mb-4 bg-red-500 text-white rounded-full border"
            onClick={() => {
              setToggle(false);
            }}
          >
            <MdCloseFullscreen />
          </div>
        </div>
        <div className="my-5">
          <hr />
        </div>

        <form action={mainAction} className="w-full">
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold">Project Title</label>
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              className="px-2 bg-transparent border-black border rounded-md h-[45px]  "
            />
          </div>
          <div>
            <label className="text-[12px] font-semibold">
              Project Due Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              className="px-2 bg-transparent border-black border rounded-md h-[45px] w-[367px]"
            />
          </div>

          <button
            className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6"
            type="submit"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;