import { foodsCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const food = await foodsCollection.findOne({ id });

    return NextResponse.json({
      ok: true,
      food,
      message: "Food fetched successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      food: [],
      message: "Couldn't collect data from database!",
    });
  }
}
