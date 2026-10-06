import { Request, Response } from "express";
import Project from "../models/Project";

export const createProject = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const user = (req as any).user.username;

  if (!name) {
    return res.status(400).json({ message: "Project name is required" });
  }

  const project = new Project({
    name,
    description,
    owner: user
  });

  await project.save();

  res.json({ message: "Project created", project });
};

export const getProjects = async (req: Request, res: Response) => {
  const user = (req as any).user.username;

  const projects = await Project.find({ owner: user });

  res.json(projects);
};
