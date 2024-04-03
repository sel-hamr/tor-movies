import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Detail({ children }: Props) {
  return <div className="p-4 flex flex-col gap-6 w-full">{children}</div>;
}

export const DetailAction = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>{children}</div>
  );
};

export const DetailTitle = ({ children }: Props) => {
  return <h1 className="text-5xl font-bold text-white">{children}</h1>;
};

export const DetailDescription = ({ children }: Props) => {
  return (
    <p className="text-white max-w-[650px] leading-7 line-clamp-5">
      {children}
    </p>
  );
};

export const DetailHeader = ({ children, className }: Props) => {
  return (
    <motion.div
      className={cn("flex gap-2 items-center font-medium", className)}
    >
      {children}
    </motion.div>
  );
};

export const AnimateItem = ({
  children,
  keyAnimate,
  delay,
}: {
  children: React.ReactNode;
  keyAnimate: string | number;
  delay?: number;
}) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.7, delay }}
      key={keyAnimate}
    >
      {children}
    </motion.div>
  );
};
