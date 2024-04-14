import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function list({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Carousel className={cn("w-[90%] mx-auto h-[500px]", className)}>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default list;
