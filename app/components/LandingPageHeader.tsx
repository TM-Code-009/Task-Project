"use client";

import React from "react";
import Button from "./Button";
import { MdAppRegistration, MdPerson2 } from "react-icons/md";
import Link from "next/link";

const LandingPageHeader = () => {
  return (
    <div className="flex w-full h-[70px] justify-center items-center ">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div>Logo</div>
        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button icon={<MdPerson2 />} className="text-neutral-900 bg-white ">
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button icon={<MdAppRegistration />}>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeader;