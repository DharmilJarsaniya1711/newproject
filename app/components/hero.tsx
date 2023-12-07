import logo from "../assets/adiba.svg";
import earth from "../assets/earth.png";

import Image from "next/image";


export default function Hero() {

    return (
        <div className="px-6 sm:px-10 lg:px-20 pt-8">
        <div className="nav flex flex-col gap-5 sm:flex-row justify-between">
          <div className="mx-auto sm:mx-0">
            <Image
              src={logo}
              width={110}
              height={40}
              className=""
              alt="Picture of the author"
            />
          </div>
          <div className="flex gap-4 justify-center">
            <button className="font-play bg-slate-100 py-[8px] px-[20px] sm:py-[16px] sm:px-[24px] rounded-xl font-bold">
              Register
            </button>
            <button className="bg-slate-950 py-[8px] px-[32px] sm:py-[16px] sm:px-[48px] rounded-xl text-white">
              Login
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-fit md:h-[90vh]">
          <div className="col-span-12 md:col-span-5 flex mt-10 md:mt-0 sm:justify-center flex-col gap-6">
              <span className="text-5xl md:text-5xl leading-tight xl:text-7xl font-bold xl:leading-tight">
                Creating the future of medicine.
              </span>
              <p className="text-[#677287] font-[18px] xl:w-4/5">
                We connect patients from the Middle East with the best
                specialized doctors worldwide.
              </p>
            <div className="flex gap-6 flex-col sm:flex-row md:flex-col lg:flex-row">
              <button className="bg-[#293754] py-[14px] w-full md:w-auto px-[34px] rounded-xl text-white">
                Check your symptoms
              </button>
              <button className="border-[#293754] border-2 w-full md:w-auto py-[14px] px-[26px] font-medium rounded-xl">
                Get appointment
              </button>
            </div>
          </div>
          <div className="col-span-12 py-6 md:py-0 md:col-span-7 flex justify-center md:justify-end items-center">
            <div className="border-4 border-[#2937541A] lg:p-12 md:p-12 p-8 rounded-full">
              <Image
                src={earth}
                className="w-48 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[370px] xl:w-[370px] relative"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    )
}