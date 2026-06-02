import PropertyCard from "./PropertyCard";

// ==============================
// Property Grid
// Melakukan map data property
// ==============================

type PropertyGridProps = {
  properties: any[];
};

function PropertyGrid({
  properties,
}: PropertyGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          {...property}
        />
      ))}
    </div>
  );
}

export default PropertyGrid;