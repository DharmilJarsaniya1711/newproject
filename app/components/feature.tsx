"use client";

import Image from "next/image";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Feature() {
  return (
    <div className="px-6 sm:px-10 md:px-20">
    <div className="text-center text-3xl sm:text-4xl font-semibold sm:py-14 py-10 px-6">
      Your benefits with adiba
    </div>
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col gap-12">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center lg:w-5/6 gap-5">
          <span className="text-3xl sm:text-4xl font-bold md:leading-snug">
            Intelligent symptom assessments
          </span>
          <span className="font-light">
            AI 24/7 free physicians. Interact with our AI technology at any
            time and clarify the most important questions and concerns about
            your health immediately without any waiting time.
          </span>
        </div>
        <div className="flex items-end justify-end mt-10 lg:mt-0">
          <Image src={img1} className="" alt="Picture of the author" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="flex mt-10 lg:mt-0 lg:order-1 order-3">
          <Image src={img2} className="" alt="Picture of the author" />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-4/5 gap-5 order-2">
          <span className="text-3xl sm:text-4xl font-bold md:leading-snug">
            Video call a doctor anytime, anywhere{" "}
          </span>
          <span className="font-light">
            Humans matter on the human element of care. We connect you and
            your family members with the best medical specialists around the
            globe to identify the optimal treatment for your diseases.{" "}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:w-5/6 gap-5">
          <span className="text-3xl sm:text-4xl font-bold md:leading-snug">
            Prevention is key{" "}
          </span>
          <span className="font-light">
            More predictions. More efficiency. More evidence-based medicine.
            Data driven personalized care will detect diseases in advance
            and act preventively.
          </span>
        </div>
        <div className="flex items-end justify-end mt-10 lg:mt-0">
          <Image src={img3} className="" alt="Picture of the author" />
        </div>
      </div>
    </div>
    <div className="py-16 text-center">
      <button className="bg-slate-950 py-[16px] px-[32px] rounded-xl text-white">
        Try adiba now
      </button>
    </div>
  </div>
  );
}
