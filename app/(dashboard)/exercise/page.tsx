import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ExercisePage() {
  return (
    <Button>
      <Link href={"exercise/create-exercise-plan"}>Create exercise plan</Link>
    </Button>
  );
}
