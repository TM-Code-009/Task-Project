import { Schema, Types, model, models } from "mongoose";
import { iTaskData } from "../interface";

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },

    assigned: {
      type: String,
    },

    steps: [
      {
        type: Types.ObjectId,
        ref: "Steps",
      },
    ],

    project: {
      type: Types.ObjectId,
      ref: "Projects",
    },
  },
  { timestamps: true }
);

const taskData = models.Tasks || model<iTaskData>("Tasks", taskModel);

export default taskData;