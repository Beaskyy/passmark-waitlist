"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // 👇 fixed target date (example: Aug 20, 2025, 6:00 PM)
  const targetDate = new Date("2025-08-20T18:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="relative container mx-auto max-w-[1440px] flex flex-col justify-center items-center bg-[#F9FAFB] min-h-screen">
      {/* background blur circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(59.66%_49.84%_at_44.77%_47.75%,rgba(27,152,193,0.3)_0%,rgba(157,174,240,0.3)_100%)] rounded-full blur-3xl" />

      {/* content wrapper */}
      <div className="flex flex-col justify-center items-center gap-[74px] z-10 pt-[154px]">
        <div className="flex flex-col justify-center items-center gap-[70px]">
          <Image src="/logo.svg" alt="logo" width={132} height={40.48} />

          <div className="relative z-50 flex flex-col justify-center items-center gap-10 w-full max-w-[760px]">
            <div className="flex flex-col justify-center items-center gap-4 max-w-[698px]">
              <div className="flex items-center gap-1 border border-[#F6F6F6] bg-[#FBFBFB] py-1.5 pl-[7px] pr-2.5 rounded-[24px]">
                <Image src="/time.svg" alt="time" width={24} height={24} />
                <p className="text-sm text-[#0B72FE] font-semibold">
                  {timeLeft.hours}hrs:{timeLeft.minutes}mins:{timeLeft.seconds}
                  secs left
                </p>
              </div>
              <h2 className="lg:text-[64px] text-3xl font-semibold text-center tracking-[-2%] leading-[120%] text-[#424242]">
                Join early and mark with precision
              </h2>
              <p className="lg:text-[20px] text-base text-[#4A4A4D] tracking-[1%] text-center leading-[158%]">
                Join early to grade faster, maintain accuracy, and deliver
                instant feedback with ease
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/dashboard.svg"
            alt="dashboard"
            width={1200}
            height={529}
          />
        </div>
      </div>
    </div>
  );
}

function calculateTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;

  let hours = 0,
    minutes = 0,
    seconds = 0;

  if (difference > 0) {
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);
  }

  return { hours, minutes, seconds };
}
