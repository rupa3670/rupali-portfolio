import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export async function getProjectById(id) {
  try {
    if (!ObjectId.isValid(id)) return null;

    const client = await clientPromise;
    const db = client.db("portfolio");   // ← এখানে নাম দিলাম
    const project = await db
      .collection("projects")
      .findOne({ _id: new ObjectId(id) });

    if (!project) return null;
    return JSON.parse(JSON.stringify(project));
  } catch (err) {
    console.error("Failed to fetch project:", err);
    return null;
  }
}