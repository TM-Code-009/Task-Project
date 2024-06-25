import React from "react";
import LandingPage from "./components/LandingPage";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async () => {
  const session: null | {} | undefined | any = await getServerSession(options);

  console.log(session);

  if (session === null) {
    return (
      <div>
        <LandingPage />
      </div>
    );
  } else if (session?.user?.role === "owner") {
    return redirect("/company");
  } else if (session?.user?.role === "staff") {
    return redirect("/staff");
  } else {
    return redirect("/reject");
  }
};

export default page;