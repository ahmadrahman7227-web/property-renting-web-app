import WishlistCard from "../../components/wishlist/WishlistCard";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import Container from "../../components/ui/Container";

import wishlistImage1 from "../../assets/wishlist-1.jpg";
import wishlistImage2 from "../../assets/wishlist-2.jpg";

// =====================================
// Wishlist Page
//
// Fungsi:
// - Menampilkan property favorit
// =====================================

function WishlistPage() {
  const wishlist = [
    {
      id: 1,
      name: "Villa Luminosa",
      location: "Bali, Indonesia",
      rating: 4.9,
      price: 850,
      image: wishlistImage1,
    },

    {
      id: 2,
      name: "Zen Sanctuary",
      location: "Kyoto, Japan",
      rating: 4.8,
      price: 1200,
      image: wishlistImage2,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* Header */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              My Wishlist
            </h1>

            <p className="mt-3 text-gray-500">
              Your saved dream stays.
            </p>
          </div>

          {/* Wishlist Grid */}

          <div className="grid gap-8 md:grid-cols-2">
            {wishlist.map((property) => (
              <WishlistCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default WishlistPage;