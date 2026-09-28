"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SharedLook({ slug }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/gallery?look=${encodeURIComponent(slug)}`);
  }, [router, slug]);

  return (
    <p style={{ padding: 40, textAlign: "center" }}>Opening look...</p>
  );
}