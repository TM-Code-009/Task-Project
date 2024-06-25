import { dbConfig } from "../../../utils/dbConfig";
import companyData from "../../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import staffData from "../../../utils/model/staff";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    await dbConfig();

    const company = await companyData.findOne({
      email,
    });

    const staff = await staffData.findOne({
      email,
    });

    if (company) {
    //   const check = await bcrypt.compare(password, company.password);
      const check = await password === company.password

      if (check) {
        console.log("show me: ", check);
        return NextResponse.json({
          message: "company sign in",
          data: company,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error with Email",
          status: 404,
        });
      }
    } else if (staff) {
      const checkStaff = await password === staff.password

      console.log(checkStaff);

      if (checkStaff) {
        return NextResponse.json({
          message: "staff sign in",
          data: staff,
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Error with Password",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error with Email",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error reading companies signin data",
      error: error.message || error,
      status: 404,
    });
  }
};