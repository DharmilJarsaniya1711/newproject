"use client";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import Image from "next/image";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Login_aside from "../components/login_aside";

export default function New_Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              Create new password
            </h2>

            <div className="input_container flex flex-col gap-4 pt-10">
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
                        onClick={() => setShowPassword((show) => !show)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Confirm password"
                type={showConfirmPassword ? "text" : "password"}
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
                        onClick={() => setShowConfirmPassword((show) => !show)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <button className="w-full h-[45px] text-white rounded-lg bg-[#253754]">
                Verify
              </button>
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
