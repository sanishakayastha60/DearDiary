"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import SignInButton from "./SignInButton";
export default function Quote() {
  const words = [
    {
      text: "A",
    },
    {
      text: "quiet",
    },
    {
      text: "place",
    },
    {
      text: "for",
    },
    {
      text: "your",
    },
    {
      text: "thoughts.",
      className: "text-[#9A3412] dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <SignInButton />
      </div>
    </div>
  );
}
