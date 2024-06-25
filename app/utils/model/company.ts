import { Schema, Types, model, models } from "mongoose";
import { iCompanyData } from "../interface";

const companyModel = new Schema<iCompanyData>(
  {
    companyName: {
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
    logo: {
      type: String,
    },
    plan: {
      type: String,
    },
    planCost: {
      type: Number,
    },
    staff: [
      {
        type: Types.ObjectId,
        ref: "Staffs",
      },
    ],
    projects: [
      {
        type: Types.ObjectId,
        ref: "Projects",
      },
    ],
  },
  { timestamps: true }
);

const companyData =
  models.Companies || model<iCompanyData>("Companies", companyModel);

export default companyData;