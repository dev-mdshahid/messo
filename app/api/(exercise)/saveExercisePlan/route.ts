import { exercisePlansCollection, usersCollection } from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const exercisePlan = await request.json();

  try {
    const res = await exercisePlansCollection.insertOne(exercisePlan);
    if (res.acknowledged) {
      const updateRes = await usersCollection.updateOne(
        { email: exercisePlan.client },
        {
          $addToSet: {
            exercisePlans: exercisePlan.id,
          },
        },
      );

      if (updateRes.modifiedCount >= 1) {
        return NextResponse.json({
          ok: true,
          _id: new ObjectId(res.insertedId),
          message: "exercise plan saved successfully!",
          server: exercisePlan.client,
        });
      } else {
        const deleteRes = await exercisePlansCollection.deleteOne({
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
