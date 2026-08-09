import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const revalidate = 0;

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    const rawProject = await db
      .collection("projects")
      .findOne({ _id: new ObjectId(id) });

    if (!rawProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project = {
      ...rawProject,
      id: rawProject._id.toString(),
      _id: rawProject._id.toString(),
    };

    return NextResponse.json(project);
  } catch (error) {
    console.error("--- MONGODB ERROR ---", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch project" },
      { status: 500 }
    );
  }
}