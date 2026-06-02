import BookingCard from "../../components/property/BookingCard";
import HostCard from "../../components/property/HostCard";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyInfo from "../../components/property/PropertyInfo";
import SimilarProperties from "../../components/property/SimilarProperties";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";
import Container from "../../components/ui/Container";

// =====================================
// Property Detail Page
//
// Halaman detail property
// =====================================

function PropertyDetailPage() {
  const property = {
    title: "Villa Luminosa",

    location: "Bali, Indonesia",

    rating: 4.9,

    price: 850,

    description:
      "Experience an unforgettable luxury retreat in the heart of Bali. Enjoy breathtaking views, private amenities, and world-class comfort designed for modern travelers.",

    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
    ],
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* Breadcrumb */}

          <div className="mb-8 text-sm text-gray-500">
            Home / Properties / Villa Luminosa
          </div>

          {/* Gallery */}

          <PropertyGallery
            images={property.images}
            title={property.title}
          />

          {/* Main Content */}

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Left */}

            <div>
              <PropertyInfo
                title={property.title}
                location={property.location}
                rating={property.rating}
                description={property.description}
              />

              <PropertyAmenities />

              <HostCard />
            </div>

            {/* Right */}

            <BookingCard
              price={property.price}
            />
          </div>

          <SimilarProperties />
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default PropertyDetailPage;