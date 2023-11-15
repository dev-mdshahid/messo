import { foodsCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category")?.split("-").join(" ");

  try {
    const foodStream = foodsCollection.find({ category });
    const categorizedFoods = await foodStream.toArray();

    return NextResponse.json({ ok: true, foods: categorizedFoods });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: "Couldn't collect data from database!",
    });
  }
}
