import { dbConfig } from "../../utils/dbConfig";
import companyData from "../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";


export const GET = async () => {
  try {
    await dbConfig();
    const company = await companyData.find();
    return NextResponse.json({
      message: "Getting company's project",
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


    const company = await companyData.create({
      email,
      password,
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