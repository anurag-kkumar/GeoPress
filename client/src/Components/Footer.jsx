import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Footer() {
const newsNav=useNavigate();


  return (
    <footer className="relative w-full bg-black py-10 flex flex-col justify-center items-center overflow-hidden">

      {/* Waves */}
      <div className="absolute top-[-100px] left-0 w-full h-[100px]">
        <div
          id="wave1"
          className="wave absolute w-full h-full opacity-100 bottom-0 animate-[animateWaves_4s_linear_infinite]"
        ></div>

        <div
          id="wave2"
          className="wave absolute w-full h-full opacity-50 bottom-[10px] animate-[animate_4s_linear_infinite]"
        ></div>

        <div
          id="wave3"
          className="wave absolute w-full h-full opacity-20 bottom-[15px] animate-[animateWaves_3s_linear_infinite]"
        ></div>

        <div
          id="wave4"
          className="wave absolute w-full h-full opacity-70 bottom-[20px] animate-[animate_3s_linear_infinite]"
        ></div>
      </div>

      <ul className="flex gap-6 mt-10">
  

  <li>
    <a className="text-3xl text-white hover:-translate-y-2 transition"
    href="https://x.com/AnuragK71449642"
    >
      <FaXTwitter />
    </a>
  </li>

  <li>
    <a className="text-3xl text-white hover:-translate-y-2 transition"
    href="https://www.linkedin.com/in/anuragkumar23/">
      <FaLinkedin />
    </a>
  </li>

  <li>
    <a className="text-3xl text-white hover:-translate-y-2 transition"
    href="https://www.instagram.com/anura_g95084/"
    >
      <FaInstagram />
    </a>
  </li>
</ul>


      {/* Menu */}
      <ul className="flex gap-6 mt-6 flex-wrap justify-center">
        <li><a className="text-white opacity-75 hover:opacity-100 text-lg transition" href="#"
        onClick={()=>{
          newsNav('/home')
        }}>Home</a></li>
        <li><a className="text-white opacity-75 hover:opacity-100 text-lg transition" href="# " onClick={()=>{
          newsNav('/newsapp')
        }}>news</a></li>
        <li><a className="text-white opacity-75 hover:opacity-100 text-lg transition" href="#"
        onClick={()=>{
          newsNav('/newsmap')
        }}
        >Services</a></li>
        <li><a className="text-white opacity-75 hover:opacity-100 text-lg transition" href="https://www.linkedin.com/in/anuragkumar23/">Team</a></li>
        <li><a className="text-white opacity-75 hover:opacity-100 text-lg transition" href="mailto:anuragkr4500@gmail.com">Contact</a></li>
      </ul>

      <p className="text-white mt-6 text-sm opacity-90">
        ©2025 Your Website | All Rights Reserved
      </p>

     
    </footer>
  );
}
