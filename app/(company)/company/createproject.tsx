import React, { FC } from "react";
import { MdCloseFullscreen } from "react-icons/md";

interface iTog {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateProject: FC<iTog> = ({ setToggle }) => {
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
      </div>
    </div>
  );
};

export default CreateProject;