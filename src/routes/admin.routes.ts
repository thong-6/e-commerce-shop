import { getAdminBlog, getAdminDashBoard, getAdminProducts, getAdminUsers } from "@/controllers/admin/admin.controllers";
import { Express, Router } from "express";


const router = Router();




router.get("/", getAdminDashBoard);
router.get("/users", getAdminUsers);
router.get("/products", getAdminProducts);
router.get("/blogs", getAdminBlog);

export default router;
