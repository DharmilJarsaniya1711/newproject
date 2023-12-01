"use client";

import { InputAdornment, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Login_aside from "../components/login_aside";
import Link from "next/link";

export default function Reset_Password() {

  return (
    <div className="mx-auto h-screen max-h-screen p-6 sm:p-10 bg-white">
      <div className="flex h-full gap-5">
        <div className="w-full md:w-[65%] flex pt-16 justify-between items-center flex-col">
          <Image
            src={logo}
            width={150}
            height={50}
            className=" absolute top-0 left-6"
            alt="Picture of the author"
          />
          <div className="form text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#293754] text-center">
              Reset Password
            </h2>

            <div className="input_container flex flex-col gap-4 pt-10">
              <TextField
                placeholder="Email"
                id="outlined-size-small"
                size="small"
                className="rounded-xl"
                InputProps={{
                  style: {
                    height: "50px",
                    borderRadius: "10px",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Link href="/new_password">

              <button className="w-full h-[45px] text-white rounded-lg bg-[#253754]">
                Change password
              </button>
              </Link>
            </div>
          </div>

          <span className="text-[#5b5d61] text-center text-sm">
            Copyright @ Adiba. Ltd. 2023. All rights reserved
          </span>
        </div>
        {/* ------------------- right side ----------------- */}
        <Login_aside />
      </div>
    </div>
  );
}
