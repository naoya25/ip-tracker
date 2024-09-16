"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    fetch("/api/log")
      .then((response) => response.json())
      .then((data) => {
        console.log("IP logged:", data.ip);
      })
      .catch((error) => console.error("Error logging IP:", error));
  }, []);

  return (
    <div className="m-0 p-0 relative w-[100vw] h-[110vh]">
      <Image src="/pay_img.png" alt="paypay" fill className="object-contain" />
    </div>
  );
}
