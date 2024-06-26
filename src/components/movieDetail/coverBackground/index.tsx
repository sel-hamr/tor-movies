import { getMovieImages } from "@/lib/action";
import { generateImagePath } from "@/lib/utils";
import Image from "next/image";

async function CoverBackground({ imdb_code }: { imdb_code: string }) {
  const images = await getMovieImages(imdb_code);
  const src = images?.[0]?.file_path;
  return (
    <div className="w-full h-[750px] relative">
      {src && (
        <Image
          src={generateImagePath({ src })}
          fill
          alt={imdb_code}
          className="object-cover"
        />
      )}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at 50% 0%, transparent 65%, hsl(var(--background)))",
        }}
      ></div>
    </div>
  );
}

export default CoverBackground;
