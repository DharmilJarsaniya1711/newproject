"use client";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 py-[40px] bg-[#293754] text-white">
        <span className="text-2xl sm:text-3xl font-semibold px-5">
          Start with adiba now!
        </span>
      <div className="flex flex-col sm:flex-row gap-5">
        <button className="bg-[#fff] border-2 py-[12px] px-[32px] font-medium rounded-xl text-[#293754]">
          Check your symptoms{" "}
        </button>
        <button className="border-[#fff] border-2 py-[12px] px-[24px] font-medium rounded-xl">
          Get appointment{" "}
        </button>
      </div>
    </div>
  );
}
