import { dbConfig } from "../../../../utils/dbConfig";
import companyData from "../../../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import staffData from "../../../../utils/model/staff";
import { Types } from "mongoose";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    const { companyID } = params;
    const { staffName } = await req.json();
    await dbConfig();

    const companyDetail = await companyData.findById(companyID);
    //peteroti@company.com
    let email = staffName
      .replaceAll(" ", "")
      .concat("@", `${companyDetail.companyName}.com`)
      .toLowerCase();

    const password = staffName.toLowerCase().replaceAll(" ", "");

    console.log(companyDetail);

    // const salt = await bcrypt.genSalt(10);
    // const hashed = await bcrypt.hash(password, salt);

    if (companyDetail.plan === "Freemium") {
      if (companyDetail.staff.length < 3) {
        const staff = await staffData.create({
          role: "staff",
          email,
          password,//: hashed,
          staffName,
        });

        const myCompany = await companyDetail.staff.push(
          new Types.ObjectId(staff._id)
        );
        companyDetail.save();

        return NextResponse.json({
          message: "company staff created",
          data: { myCompany, staff },
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Upgrade your plan for more staff",

          status: 404,
        });
      }
    } else if (companyDetail.plan === "Starter") {
      if (companyDetail.staff.length < 10) {
        const staff = await staffData.create({
          role: "staff",
          email,
          password,//: hashed,
          staffName,
        });

        const myCompany = await companyDetail.staff.push(
          new Types.ObjectId(staff._id)
        );
        companyDetail.save();

        return NextResponse.json({
          message: "company staff created",
          data: { myCompany, staff },
          status: 201,
        });
      } else {
        return NextResponse.json({
          message: "Upgrade your plan for more staff",

          status: 404,
        });
      }
    } else {
      const staff = await staffData.create({
        role: "staff",
        email,
        password,//: hashed,
        staffName,
      });

      const myCompany = await companyDetail.staff.push(
        new Types.ObjectId(staff._id)
      );
      companyDetail.save();

      return NextResponse.json({
        message: "company staff created",
        data: { myCompany, staff },
        status: 201,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting companies",
      error: error.message,
      status: 404,
    });
  }
};

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { companyID } = params;
    await dbConfig();

    const companyDetail = await companyData.findById(companyID).populate({
      path: "staff",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });

    return NextResponse.json({
      message: "Getting company's staffs",
      data: companyDetail,
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting companies",
      error: error.message,
      status: 404,
    });
  }
};