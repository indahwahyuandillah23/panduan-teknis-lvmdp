import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "3");

  const total = await prisma.feedback.count();
  const totalPages = Math.ceil(total / limit);

  const items = await prisma.feedback.findMany({
    orderBy: { createdAt: "desc" },
    skip: (page - 1) * limit,
    take: limit,
  });

  return NextResponse.json({ items, totalPages });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { nama, jabatan, komentar } = body;

  if (!nama || !komentar) {
    return NextResponse.json({ error: "Nama dan komentar wajib diisi" }, { status: 400 });
  }

  const newFeedback = await prisma.feedback.create({
    data: { nama, jabatan, komentar },
  });

  return NextResponse.json(newFeedback, { status: 201 });
}
