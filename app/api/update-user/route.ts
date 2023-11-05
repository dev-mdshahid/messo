import { usersCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const res = await request.json();
    const { email } = res;
    const updateStatus = await usersCollection.updateOne(
      { email },
      {
        $set: { ...res },
      },
    );

    if (!updateStatus.acknowledged) {
      NextResponse.json({ ok: false, message: "Failed to update profile!" });
    }

    return NextResponse.json({
      ok: true,
      message: "Profile updated successfully!",
    });
  } catch (error) {
    NextResponse.json({
      ok: false,
      message: "Something went wrong while updating profile",
    });
  }
}
