import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Images from "./images";
import Videos from "./videos";
import { Suspense } from "react";

function Media({ imdb_code }: { imdb_code: string }) {
  return (
    <Tabs defaultValue="images" className="flex flex-col w-full ">
      <div className="border-y border-white border-solid py-4 flex justify-between items-center">
        <p className="text-white text-xl font-semibold">Media</p>
        <TabsList>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="images">
        <Suspense fallback={<div>Loading...</div>}>
          <Images imdb_code={imdb_code} />
        </Suspense>
      </TabsContent>
      <TabsContent value="videos">
        <Videos imdb_code={imdb_code} />
      </TabsContent>
    </Tabs>
  );
}

export default Media;
