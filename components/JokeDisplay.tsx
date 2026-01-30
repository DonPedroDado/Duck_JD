"use client";

import { useState, useCallback } from "react";
import { jokes } from "@/data/jokes";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function ReloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      pointerEvents="none"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

export function JokeDisplay() {
  const [joke, setJoke] = useState(() => pickRandom(jokes));

  const reload = useCallback(() => {
    setJoke(pickRandom(jokes));
  }, []);

  return (
    <main
      className="min-h-screen h-screen flex flex-col items-center justify-center bg-black text-[#00ff41] px-4 py-8"
      style={{ fontFamily: "Courier, 'Courier New', monospace" }}
    >
      <blockquote
        key={joke.slice(0, 50)}
        className="text-lg sm:text-xl md:text-2xl max-w-3xl text-left whitespace-pre-wrap leading-relaxed"
      >
        {joke}
      </blockquote>
      <button
        type="button"
        onClick={() => reload()}
        aria-label="Reload joke"
        className="mt-12 p-3 text-[#00ff41] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-black transition-opacity cursor-pointer select-none"
      >
        <ReloadIcon className="w-8 h-8" />
      </button>
    </main>
  );
}
