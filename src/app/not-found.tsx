import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function notFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/404-page-not-found.svg"
        alt="logo"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
