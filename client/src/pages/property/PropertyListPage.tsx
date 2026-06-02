import { useMemo, useState } from "react";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import PropertyGrid from "../../components/property/PropertyGrid";
import PropertyPagination from "../../components/property/PropertyPagination";
import PropertySearch from "../../components/property/PropertySearch";

import Container from "../../components/ui/Container";

import { properties } from "../../data/properties";

// ==============================
// Property List Page
// Halaman daftar property
// ==============================

function PropertyListPage() {
  const [search, setSearch] =
    useState("");

  const [sortBy, setSortBy] =
    useState("default");

  const filteredProperties = useMemo(() => {
    let filtered = properties.filter(
      (property) =>
        property.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property.location
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      filtered.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return filtered;
  }, [search, sortBy]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* Header */}

          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#006491]">
              Premium Collection
            </p>

            <h1 className="max-w-3xl text-4xl font-bold text-[#1b1c19] md:text-5xl">
              Discover Your Perfect Luxury Stay
            </h1>

            <p className="mt-5 max-w-2xl text-gray-600">
              Explore curated premium villas,
              resorts, and exclusive
              properties.
            </p>
          </div>

          <PropertySearch
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <PropertyGrid
            properties={filteredProperties}
          />

          <PropertyPagination />
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default PropertyListPage;