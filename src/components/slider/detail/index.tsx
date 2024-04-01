import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Detail({ children }: Props) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="p-4 flex flex-col gap-6 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
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
  return <p className="text-white max-w-[650px] leading-7">{children}</p>;
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
