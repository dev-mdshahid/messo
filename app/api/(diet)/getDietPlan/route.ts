import { dietPlansCollection } from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const plan = await dietPlansCollection.findOne({ id });

    return NextResponse.json({
      ok: true,
      plan,
      message: "Diet plan fetched successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      plan: [],
      message: "Couldn't collect diet plan!",
    });
  }
}
