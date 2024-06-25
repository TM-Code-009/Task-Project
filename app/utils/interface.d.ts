import { Document } from "mongoose";

export interface iCompany {
  companyName: string;
  email: string;
  role: string;
  logo: string;
  password: string;
  plan: string;
  planCost: number;
  address: string;
  staff: {}[];
  projects: {}[];
}

export interface iCompanyData extends iCompany, Document {}

export interface iStaff {
  staffName: string;
  email: string;
  role: string;
  avatar: string;
  password: string;
  address: string;
  steps: {}[];
  company: {};
}

export interface iStaffData extends iStaff, Document {}

export interface iProject {
  title: string;
  dueDate: Date;
  assigned: string;
  task: {}[];
  company: {};
}

export interface iProjectData extends iProject, Document {}

export interface iTask {
  title: string;
  steps: {}[];
  task: {};
}

export interface iTaskData extends iTask, Document {}

export interface iStep {
  title: string;
  task: {};
}

export interface iStepData extends iStep, Document {}