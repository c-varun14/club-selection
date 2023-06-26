import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res: NextRequest) => {
  const { searchParams } = new URL(res.url);
  const std = searchParams.get("std");
  const sec = searchParams.get("sec");
  const rollNo = searchParams.get("rollNo");
  try {
    const data = await prisma.student.findUnique({
      where: { std, sec, rollNo },
    });
    return NextResponse.json(data);
  } catch (err) {}
};
