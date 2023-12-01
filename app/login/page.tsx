"use client";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import Image from "next/image";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Login_aside from "../components/login_aside";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="mx-auto h-[95vh] sm:h-screen max-h-screen p-6 sm:p-10 bg-white">
      <div className="flex h-full gap-5">
        <div className="w-full md:w-[65%] flex pt-16 justify-between items-center flex-col">
          <Image
            src={logo}
            width={150}
            height={50}
            className=" absolute top-0 left-6"
            alt="Picture of the author"
          />
          <div className="form pt-5 sm:pt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#293754] text-center">
              Welcome back!
            </h2>

            <div className="input_container flex flex-col gap-6 pt-10">
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
              <div className="w-full text-right">
              <Link href="/reset_password">

                <span className="text-[#253754] text-sm font-semibold">
                  Forgot password?
                </span>
              </Link>
                <button className="w-full h-[45px] text-white rounded-lg bg-[#253754] mt-2">
                  Login
                </button>
              </div>

              <span className="text-[#5b5d61] text-center text-sm">
                Don't have an account?
                <Link href="/">

                <b className="text-[#253754]"> Sign up</b>
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
