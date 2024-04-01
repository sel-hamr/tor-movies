import { generateImagePath } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}
function SliderBackground({ src, alt }: Props) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        className="bg-slate-900 relative h-full w-full"
        initial={{ opacity: 0, scaleX: 1.1 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 1.1 }}
        transition={{ duration: 0.7 }}
        key={src}
      >
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(0deg, #060606cf, #00000099)",
          }}
        />
        <Image
          src={generateImagePath({ src })}
          fill
          className="object-cover"
          alt={alt}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default SliderBackground;
