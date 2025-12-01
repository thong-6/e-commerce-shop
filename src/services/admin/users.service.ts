import { prisma } from "@/prisma";


export const handleGetAdminUsers = async () => {
    const data = await prisma.user.findMany();
    return data;
}