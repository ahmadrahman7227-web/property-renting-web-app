function PropertyPagination() {
  return (
    <div className="mt-16 flex items-center justify-center gap-3">
      <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white font-semibold transition hover:border-[#006491] hover:text-[#006491]">
        1
      </button>

      <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white font-semibold transition hover:border-[#006491] hover:text-[#006491]">
        2
      </button>

      <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white font-semibold transition hover:border-[#006491] hover:text-[#006491]">
        3
      </button>
    </div>
  );
}

export default PropertyPagination;