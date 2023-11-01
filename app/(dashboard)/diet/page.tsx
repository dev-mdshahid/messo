import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function DietPage() {
  return (
    <div>
      <Button>
        {" "}
        <Link href="/diet/create-diet">Create your diet</Link>{" "}
      </Button>
    </div>
  );
}
