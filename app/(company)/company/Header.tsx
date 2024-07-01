"use client";
import Button from "@/app/components/Button";
import { signOut } from "next-auth/react";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full justify-center items-center h-[60px] border-b">
      <div className="w-full flex items-center justify-between">
        <div>Logo</div>
        <Button
          className="text-[12px] "
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Header;