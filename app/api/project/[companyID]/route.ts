import { dbConfig } from "../../../utils/dbConfig";
import companyData from "../../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import projectData from "../../../utils/model/projectmodel";
import { Types } from "mongoose";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { companyID } = params;

    await dbConfig();
    const company = await companyData.findById(companyID).populate({
      path: "projects",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });
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

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { companyID } = params;
    const { title, dueDate } = await req.json();

    const company = await companyData.findById(companyID);

    if (company) {
      const project = await projectData.create({
        title,
        dueDate,
        companyID,
      });

      await company.projects.push(new Types.ObjectId(project._id));
      company.save();

      return NextResponse.json({
        message: "company's project created",
        data: { company, project },
        status: 201,
      });
    } else {
      return NextResponse.json({
        message: "Error getting company",
        status: 404,
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