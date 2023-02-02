// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const { name, email } = req.body;
    const user = await prisma.usertest.create({
      data: {
        name,
        email,
      },
    });
    res.status(200).json(user);
  }
  const users = await prisma.usertest.findMany();
  res.status(200).json(users);
}

// Path: src\db\db.js
