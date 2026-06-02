import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
};

function PropertySearch({
  search,
  setSearch,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <div className="mb-10 grid gap-4 rounded-[28px] border border-white/30 bg-white/70 p-5 shadow-xl backdrop-blur-2xl lg:grid-cols-[1fr_220px]">
      {/* Search */}

      <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-5 py-4">
        <Search
          size={20}
          className="text-[#006491]"
        />

        <input
          type="text"
          placeholder="Search property or location..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Sort */}

      <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-5 py-4">
        <SlidersHorizontal
          size={18}
          className="text-[#006491]"
        />

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="w-full bg-transparent text-sm outline-none"
        >
          <option value="default">
            Sort By
          </option>

          <option value="price-low">
            Price Low → High
          </option>

          <option value="price-high">
            Price High → Low
          </option>

          <option value="rating">
            Highest Rating
          </option>
        </select>
      </div>
    </div>
  );
}

export default PropertySearch;