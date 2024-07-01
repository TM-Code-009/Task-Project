import { Schema, Types, model, models } from "mongoose";
import { iProjectData } from "../interface";

const projectModel = new Schema<iProjectData>(
  {
    title: {
      type: String,
    },
    dueDate: {
      type: String,
    },

    companyID: {
      type: String,
    },

    task: [
      {
        type: Types.ObjectId,
        ref: "Tasks",
      },
    ],

    company: {
      type: Types.ObjectId,
      ref: "Companies",
    },
  },
  { timestamps: true }
);

const projectData =
  models.Projects || model<iProjectData>("Projects", projectModel);

export default projectData;