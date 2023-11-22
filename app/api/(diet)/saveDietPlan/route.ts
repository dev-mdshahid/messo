import { dietPlansCollection, usersCollection } from "@/lib/mongoClient";
import { ErrorType } from "@/lib/type";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const dietPlan = await request.json();

  try {
    const res = await dietPlansCollection.insertOne(dietPlan);
    if (res.acknowledged) {
      const updateRes = await usersCollection.updateOne(
        { email: dietPlan.client },
        {
          $addToSet: {
            dietPlans: dietPlan.id,
          },
        },
      );

      if (updateRes.modifiedCount >= 1) {
        return NextResponse.json({
          ok: true,
          _id: new ObjectId(res.insertedId),
          message: "Diet plan saved successfully!",
          server: dietPlan.client,
        });
      } else {
        const deleteRes = await dietPlansCollection.deleteOne({
          _id: new ObjectId(res.insertedId),
        });
        return NextResponse.json({
          ok: false,
          _id: null,
          message: "Couldn't save your plan to the profile!",
        });
      }
    } else {
      return NextResponse.json({
        ok: false,
        _id: null,
        message: "Couldn't save your plan to the database!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      ok: false,
      _id: null,
      message: "Error while connecting to the database!",
    });
  }
}
