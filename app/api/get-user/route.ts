import { usersCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  const userInfo = await usersCollection.findOne({
    email: email,
  });

  if (userInfo) {
    return NextResponse.json({ ok: true, data: userInfo });
  } else {
    return NextResponse.json({
      ok: false,
      message: "Could not find user!",
      email: email,
    });
  }
}
