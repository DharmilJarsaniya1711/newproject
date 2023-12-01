import img1 from "../assets/earth.svg";
import logo from "../assets/logo.png";
import Image from "next/image";


export default function Login_aside() {

    return (
        <div className="w-[35%] min-w-[350px] p-2 bg-[#253754] rounded-xl md:flex justify-center gap-10 flex-col hidden">
          <div className="">
            <div
              className="border-2 rounded-full mx-auto p-5 border-[#3e4b65] w-fit"
              
            >
              <Image
                src={img1}
                className="w-[250px] [250px] 2xl:w-[300px] 2xl:h-[300px]"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className=" text-center w-100 2xl:w-4/5 mx-auto">
            <h2 className="text-2xl xl:text-4xl font-semibold pb-8 leading-normal">
              Creating the future of the medicine.
            </h2>
            <span className="text-[#b5bac4] text-sm 2xl:text-xl">
              We connect patients from the Middle East with the best specialized
              doctors worldwide.
            </span>
          </div>
        </div>
    )
}