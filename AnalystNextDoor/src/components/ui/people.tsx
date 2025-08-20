"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "",
    designation: "",
    image:
      "/hero_img4.jpg",
  },
  {
    id: 2,
    name: "",
    designation: "",
    image:
      "/hero_img3.jpg",
  },
  {
    id: 3,
    name: "",
    designation: "",
    image:
         "/hero_img2.jpg",
  },
  {
    id: 4,
    name: "",
    designation: "",
    image:
         "/hero_img1.jpg",
  },

 
];

export function AnimatedTooltipPeople() {
  return (
    <div className="flex flex-row items-center justify-center  ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
