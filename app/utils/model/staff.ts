import { Schema, Types, model, models } from "mongoose";
import { iStaffData } from "../interface";

const staffModel = new Schema<iStaffData>(
  {
    staffName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    avatar: {
      type: String,
    },
    company: {
      type: Types.ObjectId,
      ref: "Companies",
    },

    steps: [
      {
        type: Types.ObjectId,
        ref: "Steps",
      },
    ],
  },
  { timestamps: true }
);

const staffData = models.Staffs || model<iStaffData>("Staffs", staffModel);

export default staffData;