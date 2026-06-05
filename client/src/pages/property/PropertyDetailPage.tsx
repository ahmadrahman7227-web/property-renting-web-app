import BookingCard from "../../components/property/BookingCard";
import HostCard from "../../components/property/HostCard";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyInfo from "../../components/property/PropertyInfo";
import SimilarProperties from "../../components/property/SimilarProperties";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";
import Container from "../../components/ui/Container";

import propertyImage1 from "../../assets/property-detail-1.jpg";
import propertyImage2 from "../../assets/property-detail-2.jpg";
import propertyImage3 from "../../assets/property-detail-3.jpg";
import propertyImage4 from "../../assets/property-detail-4.jpg";
import propertyImage5 from "../../assets/property-detail-5.jpg";

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
      propertyImage1,
      propertyImage2,
      propertyImage3,
      propertyImage4,
      propertyImage5,
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