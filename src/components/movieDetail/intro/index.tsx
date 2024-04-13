interface Props {
  title_long: string;
  rating: number;
  mpa_rating: string;
}

function Intro({ title_long, rating, mpa_rating }: Props) {
  return (
    <div className="flex justify-between ">
      <p className="font-semibold text-3xl text-white">{title_long}</p>
      <div className="gap-4 flex">
        <p className="px-4 py-1 bg-[#f9f9f970] text-white rounded-md leading-[27px]">
          IMDb {rating}
        </p>
        <p className="px-6 py-1 border border-solid border-white text-white rounded-md font-semibold leading-[27px]">
          {mpa_rating}
        </p>
      </div>
    </div>
  );
}

export default Intro;
