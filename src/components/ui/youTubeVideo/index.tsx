import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";

interface YouTubeEmbedTypes {
  embed: string;
  className?: string;
  height?: number;
  width?: number;
  playlabel?: string;
  params?: string;
  style?: string;
}

function YouTubeVideo({ embed, className, ...props }: YouTubeEmbedTypes) {
  return (
    <div className={cn("w-full h-full", className)}>
      <YouTubeEmbed videoid={embed} params="controls=0" {...props} />
    </div>
  );
}

export default YouTubeVideo;
