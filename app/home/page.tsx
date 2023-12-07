"use client";

import Image from "next/image";
import logo from "../assets/adiba.svg";
import earth from "../assets/earth.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import doctor from "../assets/doctor.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import Hero from "../components/hero";
import Stats from "../components/stats";
import Feature from "../components/feature";
import Team from "../components/team";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Hero />

      <Stats />

      <Feature />

      <Team />

      <Footer />
    </div>
  );
}
