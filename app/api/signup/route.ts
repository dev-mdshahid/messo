import { NextResponse } from "next/server";
import { usersCollection } from "@/lib/mongoClient";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  const data = await request.json();

  const found = await usersCollection.findOne({ email: data.email });
  if (found) {
    return NextResponse.json({
      okay: false,
      message: "User already exist! Try logging in!",
    });
  } else {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = {
      ...data,
      password: hashedPassword,
    };
    const inserted = await usersCollection.insertOne(user);
    if (inserted) {
      return NextResponse.json({
        okay: true,
        message: "User created successfully!",
      });
    } else {
      return NextResponse.json({
        okay: false,
        message: "Error creating user! Try again!",
      });
    }
  }
}
