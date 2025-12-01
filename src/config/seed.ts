
import { prisma } from "@/prisma";
import bcrypt from "bcrypt";



const seedData = async () => {
    // Seed roles
    const roles = await prisma.role.findMany()
    if (roles.length === 0) {
        await prisma.role.createMany({
            data: [
                { name: "ADMIN" },
                { name: "USER" }
            ]
        });
        console.log("Create data successfully"!)
    }

    // Seed users
    const users = await prisma.user.findMany()
    if (users.length === 0) {
        const passHash = await bcrypt.hash("123456", 10);
        await prisma.user.createMany({
            data: [
                {
                    fullName: "Thong Admin",
                    username: "admin@gmail.com",
                    password: passHash,
                    phone: "666666",
                    roleId: 1
                },
                {
                    fullName: "Thong User",
                    username: "user@gmail.com",
                    password: passHash,
                    phone: "555555",
                    roleId: 2
                }
            ]
        });
        console.log("Create data successfully"!)
    }
}
export default seedData


//     // Seed categories
//     const sofaCategory = await prisma.category.upsert({
//         where: { slug: "sofa" },
//         update: {},
//         create: {
//             name: "Sofa",
//             slug: "sofa",
//         },
//     });

//     const tableCategory = await prisma.category.upsert({
//         where: { slug: "table" },
//         update: {},
//         create: {
//             name: "Table",
//             slug: "table",
//         },
//     });

//     // Seed products
//     await prisma.product.upsert({
//         where: { slug: "modern-sofa" },
//         update: {},
//         create: {
//             name: "Modern Sofa",
//             slug: "modern-sofa",
//             description: "Sofa hiện đại đẹp, êm ái",
//             price: 1000,
//             categoryId: sofaCategory.id,
//         },
//     });

//     await prisma.product.upsert({
//         where: { slug: "wooden-table" },
//         update: {},
//         create: {
//             name: "Wooden Table",
//             slug: "wooden-table",
//             description: "Bàn gỗ chất lượng cao",
//             price: 500,
//             categoryId: tableCategory.id,
//         },
//     });

//     // Seed blog
//     await prisma.blog.upsert({
//         where: { slug: "furniture-trends-2025" },
//         update: {},
//         create: {
//             title: "Furniture Trends 2025",
//             slug: "furniture-trends-2025",
//             content: "Xu hướng nội thất năm 2025 với thiết kế hiện đại...",
//             thumbnail: "https://example.com/thumb.jpg",
//             authorId: admin.id,
//         },
//     });

//     console.log("Seed data successfully inserted!");
// }

// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
