import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function BeautyCarePage() {
  return (
    <Button>
      <Link href={"beautycare/get-beauty-suggestions"}>Get suggestion</Link>
    </Button>
  );
}
