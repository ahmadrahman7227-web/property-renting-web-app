function CTASection() {
  return (
    <section className="px-5 py-28 md:px-16">
      <div className="relative overflow-hidden rounded-[48px] bg-[#006491] px-8 py-24 text-center md:px-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070"
            alt="Ocean"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight text-white">
            Ready For Your
            <br />
            Next Luxury Escape?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-blue-100">
            Explore premium properties and experience seamless booking
            with AurAzure.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-5 text-lg font-semibold text-[#006491] transition hover:scale-105">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;