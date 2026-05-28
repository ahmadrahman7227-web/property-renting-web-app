import Button from "./Button";

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
}

function PropertyCard({
  image,
  name,
  location,
  price,
}: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-[32px] transition duration-500 hover:-translate-y-2 md:rounded-[40px]">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
        <img
          src={image}
          alt={name}
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[400px] md:h-[500px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {name}
            </h3>

            <span className="rounded-full bg-white/20 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md sm:text-xs md:px-4 md:text-sm">
              {price}/night
            </span>
          </div>

          <p className="mb-4 text-sm text-gray-200 sm:mb-6 md:text-base">
            {location}
          </p>

          <Button
            variant="outline"
            className="bg-white text-xs hover:bg-[#006491] hover:text-white sm:text-sm"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;