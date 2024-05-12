import prisma from "@/prisma/client";
import  { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const createIsssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextRequest) {
    const body =  await request.json();
    const validation = createIsssueSchema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 });

    const newIsssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    });

    return NextResponse.json(newIsssue, { status: 201 });
}