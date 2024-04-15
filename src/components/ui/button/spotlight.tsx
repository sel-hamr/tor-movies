import { Loader2 } from "lucide-react";

export interface ButtonProps {
  title: string;
  handleClick?: () => void;
  pending?: boolean;
}

const SpotlightButton = ({ title, pending }: ButtonProps) => {
  const clipPath =
    "polygon(0px 0%, calc(100% - 15px) 0%, 100% 15px, 100% 100%, 100% 100%, 0px 100%, 0px 0px)";
  return (
    <div className="relative w-full h-full">
      <button
        disabled={pending}
        data-loading={pending}
        className="bg-secondary data-[loading=true]:bg-background-foreground z-[2] w-full h-full text-white text-lg absolute block border border-background  border-solid tracking-widest active:translate-x-1 active:translate-y-1 active:shadow-lg active:scale-95 transition-transform duration-200 ease-in-out"
        style={{
          clipPath,
        }}
      >
        {!pending ? (
          title
        ) : (
          <Loader2 className="mx-auto size-6 text-white animate-spin " />
        )}
      </button>
      <div
        className="absolute z-[1] w-full h-full bg-background translate-x-1 translate-y-1"
        style={{
          clipPath,
        }}
      ></div>
    </div>
  );
};

export default SpotlightButton;
