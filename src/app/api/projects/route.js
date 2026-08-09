import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const revalidate = 0;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const rawProjects = await db.collection("projects").find({}).toArray();

    const projects = rawProjects.map((item) => ({
      ...item,
      id: item._id.toString(),
      _id: item._id.toString(),
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("--- MONGODB ERROR ---", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch projects" },
      { status: 500 }
    );
  }
}