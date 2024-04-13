import React from "react";

function Storyline({ description }: { description: string }) {
  return (
    <>
      <p className="text-2xl mb-4 font-semibold">Storyline</p>
      <p className="text-white text-lg line-clamp-6">{description}</p>
    </>
  );
}

export default Storyline;
