"use client";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import logo from "./assets/logo.png";
import Image from "next/image";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Login_aside from "./components/login_aside";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
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
              Create your account
            </h2>

            <div className="input_container flex flex-col gap-4 pt-10">
              <TextField
                placeholder="Full Name"
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
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />

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

              <TextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
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
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Phone Number(Optional)"
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
                      <LocalPhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <button className="w-full h-[45px] text-white rounded-lg bg-[#253754]">
                Sign Up
              </button>

              <span className="text-[#5b5d61] text-center text-sm">
                Already have an account?{" "}
                <Link href="/login">
                  <b className="text-[#253754]">Sign in</b>
                </Link>
              </span>
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
