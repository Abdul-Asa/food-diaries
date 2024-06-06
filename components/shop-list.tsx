import FilterComponent from "./filter";

export default function ShopList() {
  return (
    <section className="flex flex-col">
      {/* Header  */}
      <div className="sticky top-10 z-10 bg-pale md:top-14">
        <div className="h-2 w-full" />
        <div className="flex justify-center border">
          <FilterComponent />
        </div>
      </div>

      {/*  List */}
      <div className="flex w-full justify-center border-x">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-x-4 self-center md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <div
              key={i}
              className="col-span-1 grid h-40 items-center justify-center border-x border-b bg-teal-300 lg:col-span-3"
            >
              Dairy {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="sticky top-0 bg-pale">
<div className="h-2 w-full" />
<div className="flex justify-center border">
  <div className="flex w-full max-w-[1000px] justify-between border-x bg-pale font-semibold">
    <Link
      href={"/"}
      className="flex items-center border-r px-6 py-2 hover:bg-main hover:text-white"
    >
      Food diaries
    </Link>
    <Link
      href={"/"}
      className="flex items-center border-l px-6 py-2 hover:bg-main hover:text-white"
    >
      Food diaries
    </Link>
  </div>
</div>
</div>

{/* Abstract into List component*/
}
{
  /* <section className="flex justify-center border-x">
<div className="grid w-full max-w-[1000px] grid-cols-1 gap-x-4 self-center md:grid-cols-2 lg:grid-cols-3">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
    <div
      key={i}
      className="col-span-1 grid h-40 items-center justify-center border-x border-b bg-teal-300 lg:col-span-3"
    >
      Dairy {i}
    </div>
  ))}
</div>
</section> */
}
