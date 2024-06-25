import { dbConfig } from "../../../utils/dbConfig";
import companyData from "../../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";


export const GET = async () => {
  try {
    await dbConfig();
    const company = await companyData.find();
    return NextResponse.json({
      message: "Getting companies",
      data: company,
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

export const POST = async (req: NextRequest) => {
  try {
    const { email, password, companyName, plan, planCost } = await req.json();
    await dbConfig();

    // const salt = await bcrypt.genSalt(10);
    // const hashed = await bcrypt.hash(password, salt);

    const company = await companyData.create({
      email,
      password,//: hashed,
      companyName,
      role: "owner",
      plan,
      planCost,
    });

    return NextResponse.json({
      message: "company created",
      data: company,
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