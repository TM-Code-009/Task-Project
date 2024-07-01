import { dbConfig } from "../../../utils/dbConfig";
import companyData from "../../../utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import projectData from "../../../utils/model/projectmodel";
import { Types } from "mongoose";
import taskData from "../../../utils/model/taskmodel";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { projectID } = params;

    await dbConfig();

    const company = await projectData.findById(projectID).populate({
      path: "task",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });
    return NextResponse.json({
      message: "Getting company's project task",
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
    const { projectID } = params;
    const { title, staffName } = await req.json();

    const project = await projectData.findById(projectID);
    console.log(project);

    if (project) {
      const task = await taskData.create({
        title,
        assigned: staffName,
      });

      await project.task.push(new Types.ObjectId(task._id));
      project.save();

      return NextResponse.json({
        message: "company's project created",
        data: task,
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