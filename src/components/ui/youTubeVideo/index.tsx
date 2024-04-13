import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";

function YouTubeVideo({
  embed,
  className,
}: {
  embed: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      <YouTubeEmbed videoid={embed} height={400} params="controls=0" />
    </div>
  );
}

export default YouTubeVideo;
