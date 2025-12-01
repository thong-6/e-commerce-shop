
import { handleGetAdminUsers } from "@/services/admin/users.service";
import { Request, Response } from "express";

export const getAdminDashBoard = async (req: Request, res: Response) => {
    return res.render("admin/dashboard.ejs");
};

export const getAdminUsers = async (req: Request, res: Response) => {
    const data = await handleGetAdminUsers()
    return res.render("admin/users.ejs", { data });
};

export const getAdminProducts = async (req: Request, res: Response) => {
    return res.render("admin/products.ejs");
};

export const getAdminBlog = async (req: Request, res: Response) => {
    return res.render("admin/blogs.ejs");
};


