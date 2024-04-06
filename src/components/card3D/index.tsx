"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useAnimate,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

const DEG_VALUE = 13;

function Cart3D({ children, className }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    [`${DEG_VALUE}deg`, `-${DEG_VALUE}deg`]
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    [`-${DEG_VALUE}deg`, `${DEG_VALUE}deg`]
  );
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement)?.getBoundingClientRect();
    const xClient = e.clientX;
    const yClient = e.clientY;
    const width = rect.width;
    const height = rect.height;

    const mouseX = xClient - rect.left;
    const mouseY = yClient - rect.top;

    const XPct = mouseX / width - 0.5;
    const YPct = mouseY / height - 0.5;
    x.set(XPct);
    y.set(YPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const useMouseEnter = () => {
    setIsHovered(true);
  };
  return (
    <MouseEnterContext.Provider value={[isHovered, setIsHovered]}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={useMouseEnter}
        style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
        className={cn("relative", className)}
      >
        {children}
      </motion.div>
    </MouseEnterContext.Provider>
  );
}

export const ItemCard3D = ({ children }: { children: React.ReactNode }) => {
  const [scope, animate] = useAnimate();
  const [isHovered] = useMouseEnter();

  useEffect(() => {
    async function enterAnimate() {
      await animate("#language", { x: 0 });
      animate("h1", { y: 0 });
      animate("p", { opacity: 1, y: 0 });
      animate("button", { opacity: 1 }, { duration: 0.5, delay: 0.1 });
    }
    async function exitAnimate() {
      await animate("#language", { x: 75 });
      animate("h1", { y: -86 });
      animate("p", { opacity: 0, y: 30 });
      animate("button", { opacity: 0 }, { duration: 0.5, delay: 0.1 });
    }
    if (isHovered) enterAnimate();
    else exitAnimate();
  }, [isHovered]);

  return (
    <motion.div
      ref={scope}
      transition={{ type: "spring", duration: 0.5 }}
      style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

export default Cart3D;
