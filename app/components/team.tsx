"use client";

import Image from "next/image";
import doctor from "../assets/doctor.png";

export default function Team() {
  return (
    <div className="px-10 pt-16 md:px-20 bg-white grid grid-cols-12 gap-5">
      <div className="col-span-12 sm:col-span-5 sm:order-1 order-3 mx-auto">
        <Image
          src={doctor}
          className="w-48 sm:w-full sm:h-full"
          alt="Picture of the author"
        />
      </div>
      <div className="col-span-12 sm:col-span-7 order-2 flex flex-col justify-center gap-5">
        <span className="text-4xl font-bold md:leading-snug">
          Join our adiba care team{" "}
        </span>
        <span className="font-light">
          <p>
            {" "}
            Telemedicine reduces operating costs for hospitals, clinics, medical
            practices and as well as the workload for clinical assistants.
          </p>
          <p>
            Less administration work for healthcare professionals and more
            attention to the patients and complex care lead to better health
            outcomes.
          </p>
        </span>
      </div>
    </div>
  );
}
