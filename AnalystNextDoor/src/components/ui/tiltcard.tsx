"use client"
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Tilt3dCard = () => {
  return (
    <div className="text-black">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-36 w-36 mt-10 rounded-full flex flex-col items-center justify-center bg-gradient-to-br dark:from-neutral-500 from-transparent to-slate-600 dark:to-transparent"
    >
      
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <svg width="100" height="100" viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M203.468 393.709C308.518 393.709 393.677 308.549 393.677 203.5C393.677 98.4505 308.518 13.2911 203.468 13.2911C98.4187 13.2911 13.2593 98.4505 13.2593 203.5C13.2593 308.549 98.4187 393.709 203.468 393.709Z" fill="url(#paint0_radial_163_2)"/>
            <path opacity="0.2" d="M203.468 22.8302C303.088 22.8302 384.138 103.88 384.138 203.5C384.138 303.12 303.088 384.17 203.468 384.17C103.849 384.17 22.7983 303.12 22.7983 203.5C22.7983 103.88 103.849 22.8302 203.468 22.8302ZM203.468 13.2911C98.4113 13.2911 13.2593 98.4749 13.2593 203.5C13.2593 308.525 98.4113 393.709 203.468 393.709C308.525 393.709 393.677 308.557 393.677 203.5C393.677 98.4431 308.493 13.2911 203.468 13.2911Z" fill="#434343"/>
            <path d="M203.468 335.966C276.627 335.966 335.934 276.659 335.934 203.5C335.934 130.341 276.627 71.0342 203.468 71.0342C130.309 71.0342 71.0024 130.341 71.0024 203.5C71.0024 276.659 130.309 335.966 203.468 335.966Z" fill="#FFFFFF"/>
            <path d="M203.468 288.429C250.373 288.429 288.397 250.405 288.397 203.5C288.397 156.595 250.373 118.571 203.468 118.571C156.563 118.571 118.539 156.595 118.539 203.5C118.539 250.405 156.563 288.429 203.468 288.429Z" fill="url(#paint1_radial_163_2)"/>
            <path d="M203.468 228.969C217.535 228.969 228.938 217.566 228.938 203.5C228.938 189.434 217.535 178.031 203.468 178.031C189.402 178.031 177.999 189.434 177.999 203.5C177.999 217.566 189.402 228.969 203.468 228.969Z" fill="#FFFFFF"/>
            <path d="M349.893 58.0293L351.006 31.1927C351.514 19.1099 340.767 10.5566 328.843 13.5455L306.713 19.0463C299.081 20.9541 292.976 27.1545 291.228 34.8176L267.094 140.828L267.285 140.733L349.956 58.0611L349.893 58.0293Z" fill="#09BCD4"/>
            <path d="M349.925 58.0293L376.761 56.9164C388.844 56.4077 397.397 67.155 394.408 79.0788L388.908 101.209C387 108.841 380.799 114.946 373.136 116.695L267.125 140.828L267.221 140.638L349.893 57.9657L349.925 58.0293Z" fill="#38A4DD"/>
            <path d="M207.697 207.093C203.245 211.068 197.045 204.867 200.988 200.416L320.322 68.6177C325.568 63.3712 334.09 63.3712 339.336 68.6177C344.583 73.8641 344.583 82.3857 339.336 87.6322L207.697 207.093Z" fill="#1B87C9"/>
            <path opacity="0.2" d="M333.581 19.3007C336.729 19.3007 339.59 20.4772 341.657 22.6394C343.724 24.7698 344.773 27.7269 344.646 30.9384L343.533 57.7113C343.47 58.9514 343.788 60.1597 344.392 61.1772C344.678 61.6541 344.996 62.0675 345.377 62.4491C346.554 63.6573 348.207 64.3887 349.924 64.3887H350.179L376.952 63.2758H377.492C381.054 63.2758 384.17 64.7384 386.236 67.3776C388.399 70.1121 389.098 73.8323 388.176 77.5208L382.675 99.6514C381.371 104.898 376.952 109.254 371.673 110.462L283.787 130.494C282.706 130.749 281.72 131.257 280.925 131.989L227.888 180.193L275.901 127.156C276.633 126.361 277.141 125.375 277.396 124.294L297.46 36.2166C298.668 30.9384 302.992 26.5186 308.27 25.2149L330.401 19.7141C331.45 19.4279 332.532 19.3007 333.581 19.3007ZM333.581 12.9413C332.023 12.9413 330.433 13.1321 328.843 13.5455L306.712 19.0463C299.081 20.9541 292.976 27.1545 291.227 34.8176L271.164 122.895L200.988 200.384C197.904 203.85 200.956 208.333 204.549 208.333C205.598 208.333 206.679 207.952 207.665 207.061L285.218 136.727L373.104 116.695C380.736 114.946 386.968 108.841 388.876 101.209L394.376 79.0788C397.27 67.4094 389.162 56.9164 377.524 56.9164C377.27 56.9164 376.984 56.9164 376.697 56.9482L349.924 58.0611H349.861V57.9975L350.974 31.2245C351.419 20.7316 343.47 12.9413 333.581 12.9413Z" fill="#434343"/>
            <defs>
            <radialGradient id="paint0_radial_163_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(149.111 114.351) scale(197.719)">
            <stop offset="0.4707" stopColor="#EF5451"/>
            <stop offset="0.8338" stopColor="#E53A35"/>
            </radialGradient>
            <radialGradient id="paint1_radial_163_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187.054 170.705) scale(97.4638)">
            <stop offset="0.4707" stopColor="#EF5451"/>
            <stop offset="0.8338" stopColor="#E53A35"/>
            </radialGradient>
            </defs>
            </svg>

        </p>
    </motion.div>
  );
};

export default Tilt3dCard;