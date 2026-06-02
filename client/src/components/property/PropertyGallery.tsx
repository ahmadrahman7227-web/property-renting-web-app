// =====================================
// Property Gallery
//
// Fungsi:
// - Menampilkan foto utama property
// - Menampilkan thumbnail gallery
// - Responsive desktop & mobile
// =====================================

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  return (
    <section>
      {/* ==========================
      Main Image
      ========================== */}

      <div className="overflow-hidden rounded-[32px]">
        <img
          src={images[0]}
          alt={title}
          className="h-[450px] w-full object-cover"
        />
      </div>

      {/* ==========================
      Thumbnail Images
      ========================== */}

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.slice(1, 5).map(
          (image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`${title}-${index}`}
                className="h-[120px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default PropertyGallery;